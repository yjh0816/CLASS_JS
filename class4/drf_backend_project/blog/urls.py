from django.urls import path
from .views import ArticleListView, ArticleDetailView, CategoryListView, ImageListView

urlpatterns = [
    path("article", ArticleListView.as_view()),
    path("article/<int:pk>", ArticleDetailView.as_view()),
    path("category", CategoryListView.as_view()),
    path("image", ImageListView.as_view()),
]