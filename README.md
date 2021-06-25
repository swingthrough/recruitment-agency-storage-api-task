# recruitment-agency-storage-api-task

## How to run backend API locally (macOS)

Clone the repository and navigate to the project directory:

`cd recruitment-agency-storage-api-task`

Create a python virtual environment:

`python3 -m venv env`

Start the virtual environment:

`source env/bin/activate`

Install requirements:

`pip install -r requirements.txt`

Make a copy of the file `.env.example`, rename it to `.env` and add your django secret key:

`DJANGO_SECRET_KEY=<your secret key>`

Navigate to BE folder:

`cd recruitment_agency_api`

Make and apply migrations:

```
python manage.py makemigrations
python manage.py migrate
```

Run server:

`python manage.py runserver`

Now the API should be running on:

http://127.0.0.1:8000/v1/api/

### API endpoints

Content-Type for requests is `application/json`

#### Get a list of job candidates:

`GET /v1/api/jobCandidates/`

#### Create a job candidate:

`POST /v1/api/jobCandidates/`

Example Content:
```
{
    "full_name": "John Doe",
    "expected_salary": 60000,
    "skills": "React, NodeJS, JS",
    "applied_for_job_ad": [
        1
    ]
}
```
Assuming there is a Job Ad with ID = 1

Example curl request to create a JobCandidate:

```
curl -d '{
    "full_name": "Jan Janovic",    
    "expected_salary": 60000,
    "skills": "Some skills"       
}' -H "Content-Type: application/json" -X POST http://127.0.0.1:8000/v1/api/jobCandidates/
```

#### Update job candidate:

`PUT /v1/api/jobCandidates/1/`

```
{
    "full_name": "John Doe",
    "expected_salary": 75000,
    "skills": "React, NodeJS, JS, TypeScript",
    "applied_for_job_ad": [
        1
    ]
}
```

Example Content:
```
{
    "job_title": "Java developer",
    "salary": 81000,
    "ad_full_ad_text": "Looking for a Java developer for our VC backed startup"
}
```

#### Detail of a job candidate:

`GET /v1/api/jobCandidates/1/`

Delete job candidate:

`DELETE /v1/api/jobCandidates/{id}/`

Example curl request:
```
curl -X DELETE http://127.0.0.1:8000/v1/api/jobCandidates/1/
```
Assuming the id of the candidate you want to delete is 1

Get a list of job ads:

`GET /v1/api/jobAds/`

#### Create a job ad:

`POST /v1/api/jobAds/`

Example Content:
```
{
    "job_title": "Java developer",
    "salary": 75000,
    "ad_full_ad_text": "Looking for a Java developer..."
}
```

#### Update a job ad:

`PUT /v1/api/jobAds/1/`

Example Content:
```
{
    "job_title": "Java developer",
    "salary": 81000,
    "ad_full_ad_text": "Looking for a Java developer for our VC backed startup"
}
```

#### Delete a job ad:

`DELETE /v1/api/jobAds/1/`

## Filtering
To show job candidates that applied for a particular job ad (here a job ad with id 1):

`GET /v1/api/jobCandidates/?job_ad=1`

To show job ads that a particular job candidate applied for (here a job candidate with id 3):

`GET /v1/api/jobAds/?job_candidate=3`