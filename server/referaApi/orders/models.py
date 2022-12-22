from django.db import models

from categories.models import CategoryModel

# Create your models here. It is represet entities in db


class OrderModel(models.Model):
    category = models.ForeignKey(CategoryModel, on_delete=models.CASCADE)
    # category = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    estateAgency = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    deadline = models.DateTimeField()
    description = models.TextField()
