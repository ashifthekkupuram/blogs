from django.shortcuts import render
from rest_framework.views import APIView
from .models import Blog,Category
from .serializers import BlogSerializers,CategorySerializers,CreateBlogSerializer
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class BlogCreateList(APIView):
    def get(self, request, format=None):
        cat = request.GET.get('category', '')
        if cat:
            blogs = Blog.objects.filter(category__category_name=cat).order_by('-updated')
        else:
            blogs = Blog.objects.all().order_by('-updated')
        serializer = BlogSerializers(blogs, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = CreateBlogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    
    
    
class CategoryList(APIView):
    def get(self, request, format=None):
        categories = Category.objects.all()
        serializer = CategorySerializers(categories, many=True)
        return Response(serializer.data)
    
class DetailView(APIView):
    def get(self, request,id, format=None):
        blog = Blog.objects.get(id=id)
        seriliazer = BlogSerializers(blog, many=False) 
        return Response(seriliazer.data)
    
class DeleteView(APIView):
    def get(self, request, id, format=None):
        blog = Blog.objects.get(id=id)
        blog.delete()
        return Response({'message':f'successfully delete {blog.title} blog'})
    
class UpdateView(APIView):
    def post(self, request, id, format=None):
        blog = Blog.objects.get(id=id)
        serializer = CreateBlogSerializer(blog, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)   