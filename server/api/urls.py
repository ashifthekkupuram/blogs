from django.urls import path
from .views import BlogCreateList,CategoryList,DetailView,DeleteView,UpdateView

urlpatterns = [
    path('blogs/',BlogCreateList.as_view(),name='blogs'),
    path('categories/',CategoryList.as_view(),name='categories'),
    path('blog/<int:id>/',DetailView.as_view(),name='blog'),
    path('delete/<int:id>/',DeleteView.as_view(),name='delete'),
    path('update/<int:id>/',UpdateView.as_view(),name='update'),
]
