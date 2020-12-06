from django.contrib.auth import authenticate, login, update_session_auth_hash
from django.contrib.auth.forms import PasswordChangeForm
from django.urls import reverse_lazy
from django.views.generic.edit import FormView

from ..forms import CustomUserCreationForm
from ..models import CustomUser

class CreateUserView(FormView):
    template_name = 'createuser.html'
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('home')
    
    def form_valid(self, form):
        form.save()
        username = form.cleaned_data.get('username')
        raw_password = form.cleaned_data.get('password1')
        
        user = authenticate(username=username, password=raw_password) 
        login(self.request, user)
        return super().form_valid(form)

class ChangePasswordView(FormView):
    model = CustomUser
    template_name = 'changepassword.html'
    form_class = PasswordChangeForm
    success_url = reverse_lazy('home')
    
    def get_form_kwargs(self):
        kwargs = super().get_form_kwargs()
        kwargs['user'] = self.request.user
        if self.request.method == 'POST':
            kwargs['data'] = self.request.POST
        return kwargs

    def form_valid(self, form):
        form.save()
        update_session_auth_hash(self.request, form.user) 
        return super().form_valid(form)
