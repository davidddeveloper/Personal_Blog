# Generated by Django 4.2 on 2023-09-27 19:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_alter_blog_text'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='date_posted',
            field=models.DateField(blank=True, null=True),
        ),
    ]
