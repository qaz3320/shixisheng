#coding:utf-8
from django.conf.urls import patterns, include, url
from django.contrib import admin
import settings

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'shixisheng.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', 'shixisheng.views.home'),
    url(r'^haha/(\w+)$', 'shixisheng.views.hello'),
    url(r'^new$', 'shixisheng.views.new'),
    url(r'^delete/(\d+)$', 'shixisheng.views.delete'),
    url(r'^edit/(\d+)$', 'shixisheng.views.edit'),
    url(r'^edit_view/(\d+)$', 'shixisheng.views.edit_view'),
	url(r'^media/(?P<path>.*)$','django.views.static.serve',{'document_root':settings.MEDIA_ROOT, 'show_indexes':True}),
    url(r'^admin/', include(admin.site.urls)),
)
