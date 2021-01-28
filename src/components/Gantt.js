import React, {useState} from 'react';
import fcfs from "../algos/fcfs";
import sjf from "../algos/sjf";
import Add from "./add";
import Chart from "./Chart";
import CircularIndeterminate from "./loading";
import priority from "../algos/priority";
import AddPriority from "./addPriority"
import roundRobin from "../algos/roundRobin";
import AddRobin from "./addRobin";
const algorithmMap = {
    fcfs,
    sjf,
    priority,
    roundRobin
}

export default function Gantt(props) {
    const [result, setResult] = useState({});
    const [isLoading,setLoading]=useState(false);
    const algorithm = props.algorithm.toString() || "fcfs";

    const handleSubmit = (jobs) => {
        setResult(
            algorithmMap[algorithm](jobs)
        );
        setLoading(true);
        setTimeout(function(){ setLoading(false); }, 3000);
    }

    let addComponent = <Add handleSubmit={handleSubmit} />;

    if (algorithm === "priority") addComponent = <AddPriority handleSubmit={handleSubmit} />
    else if (algorithm === "roundRobin") addComponent = <AddRobin handleSubmit={handleSubmit}/>

    return (
        <>
        
            {addComponent}
            <br></br>
            <Divider></Divider>

            
            {(isLoading)?<CircularIndeterminate/>:<Chart result={result} />};

            


        </>
    );
}


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