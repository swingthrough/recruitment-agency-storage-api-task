# Generated by Django 3.2.4 on 2021-06-24 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('agency_api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='JobAd',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('job_title', models.CharField(max_length=255)),
                ('salary', models.IntegerField()),
                ('ad_full_ad_text', models.TextField()),
            ],
        ),
    ]
