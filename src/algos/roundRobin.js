
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
function Roundrobin(jobs)
{
    console.log(jobs||'empty');
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
        const ans = [];
        while (jobs.length > 0) {
           const job = jobs.shift()
           let t = job.burstTime;
           t = t - quantum;

           if(t<=0)
           {
               ans.push({ id: job.id, t: job.burstTime });
           }
           else{

            ans.push({ id: job.id, t: quantum });
            jobs.push({...job, burstTime: t});
           }

        }
        return ans;
       
    
    
    }
    return [];
}

export default Roundrobin;