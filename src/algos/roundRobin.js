
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
function Roundrobin(jobs) {
    console.log(jobs || 'empty');
    jobs = Array.from(jobs);
   
    if (jobs.length > 0) {
        const qo = jobs.pop();
        console.log(qo);
        const quantum = parseInt(qo.quantum, 10);
        jobs = jobs.map(job => {
            job.arrivalTime = parseInt(job.arrivalTime, 10);
            job.burstTime = parseInt(job.burstTime, 10);

            return job;
        });

        jobs.sort(compareJobs);
        const _jobs = [...jobs];
        const ans = [];

        var stats = new Object();
        while (jobs.length > 0) {
            const job = jobs.shift()
            let t = job.burstTime;
            t = t - quantum;

            if (t <= 0) {
                ans.push({ id: job.id, t: job.burstTime });
            }
            else {

                ans.push({ id: job.id, t: quantum });
                jobs.push({ ...job, burstTime: t });
            }

        }
        let wait = 0;
        let comp=wait;
        let turn;
        for (let i = 0; i < ans.length; i++) {
            stats[ans[i].id] = { wait };
            if(i>0)
            {
                comp=wait;
                stats[ans[i-1].id].comp = comp;
                
            }
            wait = wait + ans[i].t;
        }
        stats[ans[ans.length-1].id].comp = wait;
        
        jobs = _jobs;
        for (let i = 0; i < jobs.length; i++) {
            let b = jobs[i].burstTime;
            let k = b % quantum;
            if (k != 0) {
                let d = Math.floor(b / quantum);
                stats[jobs[i].id].wait -= d * quantum;
            }
            else {
                let d = Math.floor(b / quantum);
                d -= 1;
                stats[jobs[i].id].wait -= d * quantum;
            }

        }
        for (let i = 0; i < jobs.length; i++)
        {
            stats[jobs[i].id].turn=stats[jobs[i].id].comp-stats[jobs[i].id].wait;
        }



        return { schedule: ans, stats };



    }
    
    return [];
}

export default Roundrobin;