from django.urls import path
from django.shortcuts import HttpResponse
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path("blogs", views.home, name="blogs"),
    path("<str:name>", views.blog, name="blog"),
    path("handle_error", TemplateView.as_view(template_name="blog/error.html"), name="error_handler")
]