# Generated by Django 5.1.6 on 2025-02-07 11:48

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid5, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=50, verbose_name='タイトル')),
                ('image', models.ImageField(upload_to='images', verbose_name='イメージ画像')),
                ('content', models.TextField(max_length=20000, verbose_name='本文')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='作成日時')),
                ('update_at', models.DateTimeField(auto_now=True, verbose_name='更新日時')),
            ],
        ),
    ]
