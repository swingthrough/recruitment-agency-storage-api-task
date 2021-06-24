from rest_framework import serializers
from .models import JobAd, JobCandidate

class JobCandidateSerializer(serializers.ModelSerializer):
    """Serializes the Job Candidate"""

    class Meta:
        model = JobCandidate
        fields = '__all__'

class JobAdSerializer(serializers.ModelSerializer):
    """Serializes the Job Ad"""

    class Meta:
        model = JobAd
        fields = '__all__'

# class JobApplicationSerializer(serializers.ModelSerializer):
#     """Serializes the Job Application"""

#     class Meta:
#         model = JobApplication
#         fields = '__all__'