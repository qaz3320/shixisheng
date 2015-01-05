#coding:utf-8
from django.db import models


class Image(models.Model):
	img = models.ImageField(upload_to = './img')

class student(models.Model):
	name = models.CharField(max_length= 30)
	address = models.CharField(max_length=50)
	count = models.IntegerField(default=0)
	date  = models.DateField(auto_now=True)
	content = models.TextField()
class chang(models.Model):
	name = models.CharField(max_length = 30)
	age = models.CharField(max_length = 10)
	gf = models.CharField(max_length = 20)
