# Generated by Django 4.1.4 on 2022-12-22 04:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0001_initial'),
        ('orders', '0003_alter_ordermodel_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ordermodel',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='categories.categorymodel'),
        ),
    ]
