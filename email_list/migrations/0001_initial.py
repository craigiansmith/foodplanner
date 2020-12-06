# Generated by Django 3.0.7 on 2020-10-14 20:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Email',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('preferred_name', models.CharField(max_length=127)),
                ('email', models.EmailField(max_length=254)),
                ('verified', models.BooleanField(default=False)),
            ],
        ),
    ]
