from django.db import models

# Create your models here.
class Category(models.Model):
    category_name = models.CharField(max_length=25)
    category_created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.category_name

class Blog(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField()
    author = models.CharField(max_length=50, default='Admin')
    category = models.ForeignKey(Category, null=True, on_delete=models.SET_NULL)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f'{self.title} by {self.author}'
    
