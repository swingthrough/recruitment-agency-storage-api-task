from django.db import models

# Create your models here.

class JobAd(models.Model):
    job_title = models.CharField(max_length=255)
    salary = models.IntegerField()
    ad_full_ad_text = models.TextField()

    def __str__(self):
        return self.job_title

class JobCandidate(models.Model):
    full_name = models.CharField(max_length=255)
    expected_salary = models.IntegerField()
    skills = models.TextField()
    applied_for_job_ad = models.ManyToManyField(JobAd, blank=True)

    def __str__(self):
        return self.full_name

# class JobApplication(models.Model):
#     job_candidate = models.ForeignKey(JobCandidate, on_delete=models.CASCADE)
#     job_ad = models.ForeignKey(JobAd, on_delete=models.CASCADE)

#     def __str__(self):
#         return f"job_candidate: {self.job_candidate}, job_ad: {self.job_ad}"