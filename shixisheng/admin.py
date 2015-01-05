from django.contrib import admin
from .models import student,Image

class StudentInfoAdmin(admin.ModelAdmin):
	list_display=('name',)
class ImageInfoAdmin(admin.ModelAdmin):
	list_display=('id','img',)
admin.site.register(student,StudentInfoAdmin)
admin.site.register(Image,ImageInfoAdmin)