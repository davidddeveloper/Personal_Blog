from typing import Any
from django.db import models

# Create your models here.
class Tag(models.Model):
    name = models.CharField(max_length=30)
    def __str__(self):
        return self.name

class Blog(models.Model):
    title = models.CharField(max_length=60)
    text = models.TextField()
    image = models.ImageField(upload_to='media/', blank=True, null=True)
    date_posted = models.DateField(blank=True, null=True)
    read_time = models.IntegerField(blank=True, null=True)
    tag = models.ManyToManyField(to=Tag)
    def __str__(self):
        return self.title
