from django.shortcuts import render, redirect, HttpResponseRedirect, HttpResponse
from .models import Blog, Tag
# Create your views here.
def home(request):
    blogs = Blog.objects.all()
    return render(request, 'blog/blog_home.html', {
        'blogs': blogs
    })

def blog(request, name):
    blogs = Blog.objects.all()
    try:
        blog = Blog.objects.get(title=name)
    except:
        return render(request, 'blog/error.html', {
            'blogtitle': name
        })
    return render(request, 'blog/blog.html', {
        'blog': blog,
        'blogs': blogs
    })