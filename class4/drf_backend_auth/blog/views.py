from rest_framework import generics
from rest_framework.parsers import MultiPartParser
from .permissions import CustomReadOnly
from .models import Article
from .serializers import ArticleSerializer, ArticleCreateSerializer

class ArticleListView(generics.ListCreateAPIView):
    permission_classes = [CustomReadOnly]
    parser_classes = [MultiPartParser]
    queryset = Article.objects.all().order_by('id')

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return ArticleCreateSerializer
        return ArticleSerializer
    
class ArticleDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [CustomReadOnly]
    serializer_class = ArticleSerializer
    queryset = Article.objects.all().order_by('id')
