from django.db import models
from user.models import User

class Article(models.Model):
    author = models.ForeignKey(to=User, verbose_name="작성자", on_delete=models.CASCADE, related_name="article")
    title = models.CharField(max_length=100, verbose_name="제목")
    content = models.TextField(verbose_name="내용")
    image = models.FileField(null=True, blank=True)
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)