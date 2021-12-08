from django.urls import path
from  .views import (RegisterView,
                    login_user)

app_name='account'

urlpatterns = [
    path('register/',RegisterView.as_view(),name='register'),
    path('login/',login_user,name='login')
]
