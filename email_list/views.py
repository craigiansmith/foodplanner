from django.core.mail import send_mail
from django.shortcuts import redirect, render
from django.urls import reverse_lazy
from django.views.generic import TemplateView, View
from django.views.generic.detail import SingleObjectMixin
from django.views.generic.edit import CreateView

import base64

from .models import Email
from .forms import RegisterEmailForm

class RegisterEmailView(CreateView):
    model = Email
    form_class = RegisterEmailForm
    success_url = reverse_lazy('verify_email')

    def post(self, request):
        form = RegisterEmailForm(request.POST)
        if form.is_valid():
            email = form.save()
            hashed_email = email.create_hash() 
            url_prefix = 'https://foodplanner.com.au/register/verify/'
            hashed = base64.urlsafe_b64encode(email.create_hash()).decode()
            verification_url = '{pre}{pk}/{hashed}'.format(pre=url_prefix,
                    pk=str(email.pk),hashed=hashed)
             
            send_mail(
                'Please verify your email address',
                'Copy the URL below into the address bar of your web browser to ' +
                'verify your email address' + verification_url,
                None,
                [form.cleaned_data['email']],
                html_message='<h1>Hi ' + form.cleaned_data['preferred_name'] + '</h1>' + 
                '<p>Click the link below to verify your email address</p> ' +
                '<a href="' + verification_url + '">Verify</a>',
                fail_silently=False
            )

        return redirect('verify_email')

class VerifyEmailView(TemplateView):
    template_name = 'verify_email.html'

class CheckEmailView(TemplateView):
    template_name = 'subscribed_email.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**self.kwargs)
        self.email = Email.objects.get(pk=self.kwargs['pk'])
        self.hashed_email = self.kwargs['hashed_email']
        if self.email.check_hash(base64.urlsafe_b64decode(self.hashed_email)):
            self.email.verified = True
            self.email.save()
            send_mail(
                'New  subscription at foodplanner.com.au',
                'Someone just subscribed!',
                None,
                ['craig@tbvp.com.au']
            )
            return context
        else:
            return context
        
