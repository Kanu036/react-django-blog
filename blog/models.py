from django.db import models
from django.utils import timezone
from django.template.defaultfilters import slugify

class Categories(models.TextChoices):
    WORLD = 'world', 'World'
    ENVIRONMENT = 'environment', 'Environment'
    TECHNOLOGU = 'technology', 'Technology'
    DESIGN = 'design', 'Design'
    CULTURE = 'culture', 'Culture'
    BUSINESS = 'business', 'Business'
    POLITICS = 'politics', 'Politics'
    OPINION = 'opinion', 'Opinion'
    SCIENCE = 'science', 'Science'
    HEALTH = 'health', 'Health'
    STYLE = 'style' , 'Style'
    TRAVEL = 'travel', 'Travel'

class BlogPost(models.Model):
    title = models.CharField(max_length=160)
    slug =  models.SlugField(unique=True)
    category = models.CharField(max_length=50,choices=Categories.choices,default=Categories.WORLD)
    thumbnail = models.ImageField(upload_to='photos/%y/%m/%d/')
    excerpt = models.CharField(max_length=150)
    month = models.CharField(max_length=3)
    day = models.CharField(max_length=2)
    content = models.TextField()
    featured = models.BooleanField(default=False)
    date_created = models.DateTimeField(default=timezone.now, blank=True)
    
    
    def save(self, *args, **kwargs):
        
        original_slug  = slugify(self.title)
        slug =original_slug
        count = 1 
        while BlogPost.objects.filter(slug__iexact=slug).exists():
            slug = f"{original_slug}-{count}"
            count += 1
            
        self.slug = slug
            
        if self.featured:
            try:
                temp = BlogPost.objects.get(featured=True)
                if self != temp:
                    temp.featured =False
                    temp.save()
                         
            except BlogPost.DoesNotExist:
                pass
                    
        super(BlogPost,self).save(*args,**kwargs)

    def __str__(self):
        return self.title
        
        