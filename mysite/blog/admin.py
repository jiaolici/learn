from django.contrib import admin
from blog import models

# Register your models here.
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title','timestamp')
    search_fields = ('title','body')
    list_filter = ('timestamp',)
    date_hierarchy = 'timestamp'
    ordering = ('timestamp',)

admin.site.register(models.BlogPost,BlogPostAdmin)