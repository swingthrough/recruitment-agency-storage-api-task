export interface JobCandidate {
    id: number,
    full_name: string,
    expected_salary: number,
    skills: string,
}

export interface JobAd {
    id: number,
    job_title: string,
    salary: number,
    ad_full_ad_text: string,
}

// export interface JobApplication {
//     job_candidate: number,
//     job_ad: number,
// }