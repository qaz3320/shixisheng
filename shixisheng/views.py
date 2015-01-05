#coding:utf-8
from django.http import HttpResponse
from django.shortcuts import render_to_response,redirect
import datetime
from django.template.response import TemplateResponse as TR
from shixisheng.models import student,Image

def home(request):
	all = student.objects.all()
	d = {"date":str(datetime.datetime.now()),"all":all}
	d['all'] = all
	all_img = Image.objects.all()
	d['all_img'] = all_img
	return TR(request,"index.html",d)

def hello(request,abcd):
   # return HttpResponse("hello python" + ("\t") + abd)
	all = student.objects.all()#(必须遍历列表，all 本身作为一个列表 不能直接查询列表当中的ID)
	d = {"ab":abcd,"date":str(datetime.datetime.now()),"all":all}
	#all = student.objects.filter(name = "Jike")(过滤。。只查询表中 包含filter() 括号中内容的记录 )
	return TR(request,"hello.html",d)
	#return render_to_response("hello.html",d,context_instance= RequestContext(request))

def new(request):
	print request.POST
	s = student()
	s.name = request.POST['name']
	s.address = request.POST['address']
	s.content = request.POST['content']
	s.count   = 0
	s.save()
	return redirect("/haha/faffafsa")

def delete(request,id):
	s = student.objects.get(id = int(id))
	#s = student.objects.get(name = "Jike")(通过 name 删除)
	s.delete()
	return redirect("/haha/fasfasd")

def edit_view(request,id):
	s =student.objects.get(id = int(id))
	time = datetime.datetime.now()
	d = {"s" :s,"t":str(time)}
	return TR(request,"edit.html",d)

def edit(request,id):
	s = student.objects.get(id=int(id))
	s.name = request.POST['name']
	s.address = request.POST['address']
	s.save()
	return redirect("/haha/sadasda")