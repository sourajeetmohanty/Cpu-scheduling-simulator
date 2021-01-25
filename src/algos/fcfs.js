
function compareJobs(joba, jobb) {
    if (joba.arrivalTime < jobb.arrivalTime) {
        return -1;
    }

    if (joba.arrivalTime > jobb.arrivalTime) {
        return 1;
    }

    return 0;
}


// jobs:[{id, arrivalTime, burstTime}]
function fcfs(jobs)
{
    console.log(jobs||'empty');
    jobs = Array.from(jobs);
    jobs = jobs.map(job => {
        job.arrivalTime = parseInt(job.arrivalTime, 10);
        job.burstTime = parseInt(job.burstTime, 10);

        return job;
    });

    jobs.sort(compareJobs);

    return jobs.map(job => {
        return {
            id: job.id,
            t: job.burstTime
        };
    });
}

export default fcfs;