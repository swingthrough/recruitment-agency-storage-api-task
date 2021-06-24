from rest_framework import viewsets
from rest_framework import mixins

from . import models
from . import serializers

class JobCandidateViewSet(
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.ListModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    viewsets.GenericViewSet,
):
    serializer_class = serializers.JobCandidateSerializer
    
    def get_queryset(self):
        queryset = models.JobCandidate.objects.all()
        job_ad = self.request.query_params.get('job_ad')
        print('-------')
        print(self.request.query_params)
        if job_ad is not None:
            queryset = queryset.filter(applied_for_job_ad=job_ad)
        return queryset

class JobAdViewSet(
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.ListModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    viewsets.GenericViewSet,
):
    serializer_class = serializers.JobAdSerializer

    def get_queryset(self):
        queryset = models.JobAd.objects.all()
        job_candidate = self.request.query_params.get('job_candidate')
        print('-------')
        print(self.request.query_params)
        if job_candidate is not None:
            queryset = queryset.filter(jobcandidate=job_candidate)
        return queryset

# class JobApplicationViewSet(
#     mixins.CreateModelMixin,
#     mixins.RetrieveModelMixin,
#     mixins.ListModelMixin,
#     mixins.UpdateModelMixin,
#     mixins.DestroyModelMixin,
#     viewsets.GenericViewSet,
# ):
#     queryset = models.JobApplication.objects.all()
#     serializer_class = serializers.JobApplicationSerializer