from django.db import models

# Create your models here.


class CategoryModel(models.Model):
    category = models.CharField(max_length=100, unique=True)