from django.db import models
import uuid

class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=50, verbose_name='タイトル')
    image = models.ImageField(upload_to='images', verbose_name='イメージ画像')
    content = models.TextField(max_length=20000, verbose_name='本文')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='作成日時')
    update_at = models.DateTimeField(auto_now=True, verbose_name="更新日時")
    
    def __str__(self):
        return self.title