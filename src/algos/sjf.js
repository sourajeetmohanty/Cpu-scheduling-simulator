
function compareJobs(joba, jobb) {
    if (joba.arrivalTime < jobb.arrivalTime) {
        return -1;
    }

    if (joba.arrivalTime > jobb.arrivalTime) {
        return 1;
    }

    if (joba.burstTime < jobb.burstTime)
        return -1;

    if (joba.burstTime > jobb.burstTime)
        return -1;
    return 0;
}


// jobs:[{id, arrivalTime, burstTime}]
function sjf(jobs) {
    console.log(jobs || 'empty');
    jobs = Array.from(jobs);
    jobs = jobs.map(job => {
        job.arrivalTime = parseInt(job.arrivalTime, 10);
        job.burstTime = parseInt(job.burstTime, 10);

        return job;
    });

    jobs.sort(compareJobs);

    var stats = new Object();
    let wait = 0;
    let comp=wait;
    for (let i = 0; i < jobs.length; i++) {
        stats[jobs[i].id] = {
            wait
        };
        if(i>0)
        {
            comp=wait;
            stats[jobs[i-1].id].comp = comp;
        }
        wait = wait + jobs[i].burstTime;
    }
    stats[jobs[jobs.length-1].id].comp = wait;
    let turn;
    for (let i = 0; i < jobs.length; i++)
    {
        stats[jobs[i].id].turn=stats[jobs[i].id].comp-stats[jobs[i].id].wait;
    }
    return {
        schedule: jobs.map(job => {
            return {
                id: job.id,
                t: job.burstTime
            };
        }), stats
    };
}

export default sjf;