from django.urls import path

from rest_framework import routers
from . import mixins


router = routers.DefaultRouter()

router.register('jobCandidates', mixins.JobCandidateViewSet, basename="job_candidate")
router.register('jobAds', mixins.JobAdViewSet, basename="job_ad")
# router.register('jobApplications', mixins.JobApplicationViewSet)

urlpatterns = [
    
]

urlpatterns += router.urls