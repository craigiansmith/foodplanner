from django import forms

from .models import Email

class RegisterEmailForm(forms.ModelForm):
    class Meta:
        model = Email
        fields = ['preferred_name', 'email']
        widgets = {
            'preferred_name': forms.TextInput(attrs={'class': 'input is-medium is-info'}),
            'email': forms.EmailInput(attrs={'class':'input is-medium is-info'})
        }
        
