from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from blog.models import BlogPost
from .serializers import BlogPostSerializer

class BlogPostListView(ListAPIView):
    queryset = BlogPost.objects.order_by('-date_created')
    serializer_class = BlogPostSerializer
    permission_classes = (permissions.AllowAny, )

class BlogPostDetailView(RetrieveAPIView):
    queryset = BlogPost.objects.order_by('-date_created')
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class BlogPostFeaturedView(ListAPIView):
    queryset = BlogPost.objects.all().filter(featured=True)
    serializer_class = BlogPostSerializer
    permission_classes = (permissions.AllowAny, )

class BlogPostCategoryView(APIView):
    serializer_class = BlogPostSerializer
    permission_classes = (permissions.AllowAny,)
    
    def post(self, request, format=None):
        category = self.request.data.get('category', None)  
        
        if category is None:
            return Response({'error': 'Category is required'}, status=400)
        
        queryset = BlogPost.objects.filter(category__iexact=category).order_by('-date_created')
        
        if not queryset.exists():
            return Response({'message': 'No posts found for this category.'}, status=404)
        
        serializer = BlogPostSerializer(queryset, many=True)
        
        return Response(serializer.data)


