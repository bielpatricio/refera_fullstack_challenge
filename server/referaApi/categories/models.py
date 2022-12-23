from django.db import models


class CategoryModel(models.Model):
    category = models.CharField(max_length=100, unique=True)
