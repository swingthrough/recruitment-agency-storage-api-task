from rest_framework import generics
from rest_framework import mixins

from . import models
from . import serializers

# Create your views here.
# class JobCandidateView(
#     mixins.CreateModelMixin,
#     mixins.RetrieveModelMixin,
#     mixins.ListModelMixin,
#     mixins.UpdateModelMixin,
#     mixins.DestroyModelMixin,
#     generics.GenericAPIView,
# ):
#     queryset = models.JobCandidate.objects.all()
#     serializer_class = serializers.JobCandidateSerializer

#     def get_queryset(self):
#         return super().get_queryset()
    

# class JobAdView(
#     mixins.CreateModelMixin,
#     mixins.RetrieveModelMixin,
#     mixins.ListModelMixin,
#     mixins.UpdateModelMixin,
#     mixins.DestroyModelMixin,
#     generics.GenericAPIView,
# ):
#     queryset = models.JobAd.objects.all()
#     serializer_class = serializers.JobAdSerializer