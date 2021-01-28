import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import "../index.css";
import { Table } from 'reactstrap';
const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">What is Scheduling?</h1>
        <p className="lead">
If you are familiar with computer system architecture, you most probably heard a lot about central processing units that execute all arithmetic & logic operations that are available in the main memory.
 In the past, our operating systems were not able to deal with several processes at a time (only one process was taken into the memory). Nowadays most operating systems allow us to execute several processes concurrently. These systems are called multi-programming systems. In these systems, a Process Scheduler (also called Long Term Scheduler) chooses a process to be taken into the memory to be run from the secondary memory (hard disk, SSD, etc.). Ready processes are usually kept in queues (CPU ready queue & I/O device ready queue). This multi-programming approach has brought about some issues to be considered. In order to avoid making CPU is idle when an input/output device operation is needed during the execution of a process, CPU Schedulers have been started to be used in order to choose another process among available processes. A CPU scheduler decides the next process according to what algorithm it uses.
 Likewise, I/O devices also use some algorithms to determine which process should be the next process. In this chapter, we are going to go over some most commonly used CPU Scheduling Algorithms.
</p>
<br></br>
<div style={{ width: "100%", display: "flex", justifyContent: "center"}}>
<img src={"/sch1.png"}  /> 
</div>


<br></br>

       <ol>
  <li><h5>First Come First Serve</h5></li>
  <li><h5>Shortest Job First</h5></li>
  <li><h5>Priority Scheduling</h5></li>
  <li><h5>Round Robin</h5></li>
  
</ol>

      
 
        

<Divider ></Divider>
       
      </Jumbotron>
      
      <Jumbotron>
     
      <h2 className="display-6">FCFS</h2>
      <p className="lead">
      FCFS algorithm works in a quite straightforward way. It chooses the next process with respect to its arrival time.
       Early comers have higher priority than latecomers.
       It is a non-preemptive algorithm which means that once a process is chosen it is executed until its burst time finishes.</p>
       <br></br>
       <h5>Lets Look at the following table:</h5>

       <div>

       <Table hover bordered dark size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Process </th>
          <th>Arrival Time</th>
          <th>CPU Bust Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>P0</td>
          <td>0</td>
          <td>8</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>P1</td>
          <td>3</td>
          <td>3</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>P2</td>
          <td>5</td>
          <td>7</td>
        </tr>
      </tbody>
    </Table>
       </div>
       <p className="lead">
       At first, P0 comes ready queue and immediately taken into account by CPU.
        When P0 is running, P1 arrives at 3ms and P2 arrives at 5ms. When P0 finished,
        there are two processes in the ready queue (P1 and P2). Since P1 arrived earlier than P2, it has a higher priority.
       </p>
       <Divider ></Divider>
      </Jumbotron>
      <Jumbotron>
     
     <h2 className="display-6">SJF</h2>
     <p className="lead">
     This scheduling algorithm as it's name suggests allocates CPU to the job that has the smallest execution time.SJF assigns higher priority to the processes which have shorter burst time.
      It is a non-preemptive algorithm.</p>
      <br></br>
      <h5>Lets Look at the following table:</h5>

      <div>

      <Table hover bordered dark size="sm">
     <thead>
       <tr>
         <th>#</th>
         <th>Process </th>
         <th>Arrival Time</th>
         <th>CPU Bust Time</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <th scope="row">1</th>
         <td>P0</td>
         <td>0</td>
         <td>8</td>
       </tr>
       <tr>
         <th scope="row">2</th>
         <td>P1</td>
         <td>3</td>
         <td>3</td>
       </tr>
       <tr>
         <th scope="row">3</th>
         <td>P2</td>
         <td>5</td>
         <td>7</td>
       </tr>
     </tbody>
   </Table>
      </div>
      <p className="lead">
      Since there is only one process at 0ms, P0 will be chosen by the scheduler. 
      After P0 finish, we will have P1 and P2 at the ready queue.
       P1 has 8ms CPU burst and P2 has 7ms so that the scheduler will choose P2. 
      </p>
      <Divider ></Divider>
     </Jumbotron>
     <Jumbotron>
     
     <h2 className="display-6">Priority Scheduling</h2>
     <p className="lead">
     Priority Scheduling assigns priority to the jobs, so now they get allocated by their priority.
     Priority scheduling consists of predefined priorities assigned the processes. It has two types. Pre-emptive and Non-pre-emptive.
     For a fair example Let's assume we have more priority for smaller value of execution</p>
      <br></br>
      <h5>Lets Look at the following table:</h5>

      <div>

      <Table hover bordered dark size="sm">
     <thead>
       <tr>
         <th>#</th>
         <th>Process </th>
         <th>Arrival Time</th>
         <th>CPU Bust Time</th>
         <th>Priority</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <th scope="row">1</th>
         <td>P0</td>
         <td>0</td>
         <td>2</td>
         <td>3</td>
       </tr>
       <tr>
         <th scope="row">2</th>
         <td>P1</td>
         <td>0</td>
         <td>4</td>
         <td>2</td>
       </tr>
       <tr>
         <th scope="row">3</th>
         <td>P2</td>
         <td>2</td>
         <td>3</td>
         <td>1</td>
         
       </tr>
     </tbody>
   </Table>
      </div>
      <p className="lead">
      If we use a pre-emptive type of Priority Scheduling, at first P0 and P1 will be in the ready queue. 
      Since P1 is a higher priority than P0, P1 will be chosen by the scheduler.
       During the execution of P1 (at 2ms) P2 will arrive with higher priority.
        Therefore, P1 will be pre-empted and added into the tail of the ready queue and P2 will be the next process.
       After termination of P2 other processes will be chosen in terms of their priorities.
       <br></br>
       <br></br>
       In the non-pre-emptive type, similarly, at first, P0 and P1 will be in the ready queue and P1 will be the next process
        due to its higher priority. Unlikely the pre-emptive type, when P2 will arrive at 2ms, P1 will remain in its running state. 
       After P1 terminated, the scheduler will choose P2 to be run because of its higher priority compared to P0’s.  
      </p>
      <Divider ></Divider>
     </Jumbotron>
     <Jumbotron>
     
     <h2 className="display-6">Round Robin</h2>
     <p className="lead">
     Round Robin is an algorithm that can be visualised like a traffic signal post.Where each vehical party is able to share some attention of the signal to go.
     In Round Robin, a specified amount of time should be declared which is called quantum.
      According to quantum time processes pre-empted and added into the tail of the ready queue. If there are n processes in the ready queue and the quantum time is q, the time shared among processes as 1/n so that a process can wait at most (n-1)q ms. 
     It is a very similar algorithm with First Come First Served. The only difference is pre-emption.</p>
      <br></br>
      <h5>Lets Look at the following table:</h5>

      <div>

      <Table hover bordered dark size="sm">
     <thead>
       <tr>
         <th>#</th>
         <th>Process </th>
         <th>Arrival Time</th>
         <th>CPU Bust Time</th>
        
       </tr>
     </thead>
     <tbody>
       <tr>
         <th scope="row">1</th>
         <td>P0</td>
         <td>0</td>
         <td>8</td>
         
       </tr>
       <tr>
         <th scope="row">2</th>
         <td>P1</td>
         <td>0</td>
         <td>8</td>
         
       </tr>
       <tr>
         <th scope="row">3</th>
         <td>P2</td>
         <td>2</td>
         <td>7</td>
        
         
       </tr>
     </tbody>
   </Table>
      </div>
      <p className="lead">
      lets assume the quantum to be 5ms. So the sequence of allocation of the processes are:
      P0,P1,P2,P0,P1,P2.
       <br></br>
         
      </p>
      <Divider ></Divider>
     </Jumbotron>
      
    </div>
  );
};



const Divider = ({ children }) => {



    return (
      <div className="container">
        <div className="border" />
        <span className="content">
          {children}
        </span>
        <div className="border" />
      </div>
    );
  };
  
export default Example;