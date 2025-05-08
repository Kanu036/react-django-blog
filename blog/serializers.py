from rest_framework import serializers
from .models import BlogPost

# Serializers define the API representation.
class BlogPostSerializer(serializers.ModelSerializer):
    formatted_date = serializers.SerializerMethodField()
    
    class Meta:
        model = BlogPost
        fields = '__all__'
        lookup_field = 'slug'
        
    def get_formatted_date(self, obj):
        return obj.date_created.strftime("%B %d, %Y") 
        