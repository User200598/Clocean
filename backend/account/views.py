import json
from django.contrib.auth.models import User
from .serializers import RegisterSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from django.contrib.auth import authenticate,login
from django.core.exceptions import ValidationError


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


@api_view(["POST"])
@permission_classes([AllowAny])
def login_user(request):
    data={}
    user=authenticate(username=request.data['username'],password=request.data['password'])
    if user.is_authenticated:
        login(request,user)
        data['messages']='Welcom Hero'
        data['username']=user.username
        res_data={
            'data':data,
        }
        return Response(res_data)
    else:
        raise ValidationError({"400":'user not find'})
    raise ValidationError({"400":'user not find'})