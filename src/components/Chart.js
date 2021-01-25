import React, {useState} from 'react';
import LinearWithValueLabel from "./loading";
export default function Chart(props) {
    const schedule = Array.from(props.schedule);
    const procGraph = [];
    const procTime = [];
    const colors = {};

    schedule.forEach((job, idx) => {
        let color;
        if (colors[job.id] !== undefined) {
            color = colors[job.id];
        } else {
            color = '#' +  Math.random().toString(16).substr(-6);
            colors[job.id] = color;
        }
        procGraph.push(
            <div key={idx.toString()} style={{
                width: job.t * 20+10,
                backgroundColor: color, padding: "20px",
                border:"2px solid black"
              }}>{`P${job.id}`}</div>
        );
        procTime.push(
            <div key={idx.toString()} style={{ width: job.t * 20+10, padding: "20px" }}>{job.t}</div>
        );
    });

    return (
        <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <div style={{ display: "flex", textAlign: "center", color: "white",marginLeft:"160px" }}>
                {procGraph}
            </div>
            <div style={{ display: "flex", textAlign: "center",marginLeft:"160px" }}>
                {procTime}
            </div>
        </>
    )
}