# Generated by Django 3.1.7 on 2021-07-02 11:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('images_api', '0009_auto_20210630_1410'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Image',
            new_name='ImageField',
        ),
    ]