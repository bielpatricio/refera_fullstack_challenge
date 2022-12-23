from django.db import models

from categories.models import CategoryModel


class OrderModel(models.Model):
    category = models.ForeignKey(CategoryModel, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    estateAgency = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    deadline = models.DateTimeField()
    description = models.TextField()
