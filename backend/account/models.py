from django.db import models
from django.conf import settings

class Profile (models.Model):
    user=models.OneToOneField(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    mobile_number=models.IntegerField(blank=True, null=True)
    # TODO: add other fields related to profile like img profile n all

    def __str__(self):
        return self.user.username
