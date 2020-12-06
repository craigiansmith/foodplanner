from django.urls import path

from .views import RegisterEmailView, VerifyEmailView, CheckEmailView

urlpatterns = [
    path('', RegisterEmailView.as_view(), name='register_email'),
    path('verify/', VerifyEmailView.as_view(), name='verify_email'),
    path('verify/<int:pk>/<str:hashed_email>', CheckEmailView.as_view(), name='subscribed_email')
]
