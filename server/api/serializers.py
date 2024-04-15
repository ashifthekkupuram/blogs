from .models import Blog,Category
from rest_framework import serializers

class BlogSerializers(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'
        
class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
        
class CreateBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('title','content','category')     