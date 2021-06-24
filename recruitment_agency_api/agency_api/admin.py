from django.contrib import admin
from .models import JobCandidate, JobAd

# Register your models here.

admin.site.register(JobCandidate)
admin.site.register(JobAd)
# admin.site.register(JobApplication)