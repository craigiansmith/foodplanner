from django.urls import path
from django.contrib.auth.views import LoginView, LogoutView

from .views.views import HomeView
from .views.management_views import CreateUserView, ChangePasswordView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='loggedout'),
    path('create/', CreateUserView.as_view(), name='createuser'),
    path('changepassword/', ChangePasswordView.as_view(), name='changepassword'),
    path('home/', HomeView.as_view(), name='home')
]
