from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import PasswordChangeForm

from .forms import CustomUserCreationForm

class CoachTests(TestCase):
    def setUp(self):
        self.client = Client()
        self.login_url = reverse('login') 
        self.credentials = {
            'username': 'testUser',
            'password': 'tricky_password8'
        }
        self.User = get_user_model()

    def tests_run(self):
        pass

    def test_there_is_a_login_page(self):
        response = self.client.get(self.login_url)
        self.assertTrue(response is not None)
        
    def test_login(self):
        self.User.objects.create_user(**self.credentials)
        response = self.client.login(username='testUser', password='tricky_password8')
        self.assertTrue(response)

    def test_login_authenticates_user_and_makes_user_active(self):
        self.User.objects.create_user(**self.credentials)
        response = self.client.post(self.login_url, self.credentials, follow=True)
        self.assertTrue(response.context['user'].is_authenticated)
        self.assertTrue(response.context['user'].is_active)

    def test_user_reports_its_type(self):
        pass 

    def test_user_creation_form(self):
        form_data = {
            'username': 'testuser1',
            'email': 'testuser1@test.com',
            'password1': 'tricky_password8',
            'password2': 'tricky_password8',
        }
        form = CustomUserCreationForm(data=form_data)
        self.assertTrue(form.is_valid())

    def test_create_user(self):
        credentials = {
            'username': 'testagain',
            'email': 't@t.com',
            'password1': 'tricky_password8',
            'password2': 'tricky_password8',
        }

        self.client.post(reverse('createuser'), credentials)
        self.assertTrue(self.User.objects.get(username='testagain') is not None)

    def test_change_password_form(self):
        user = self.User.objects.create_user(**self.credentials)
        form_data = {
            'old_password': 'tricky_password8',
            'new_password1': 'new_password9',
            'new_password2': 'new_password9',
        } 
        form = PasswordChangeForm(user, data=form_data)
        self.assertTrue(form.is_valid())

    def test_change_password_view(self):
        user = self.User.objects.create_user(**self.credentials)
        form_data = {
            'old_password': 'tricky_password8',
            'new_password1': 'new_password9',
            'new_password2': 'new_password9',
        } 
        self.client.login(username='testUser', password='tricky_password8')
        self.client.post(reverse('changepassword'), form_data)
        response = self.client.login(username='testUser', password='new_password9')
        self.assertTrue(response)
