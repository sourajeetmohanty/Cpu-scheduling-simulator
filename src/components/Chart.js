import React, { useState } from 'react';
import LinearWithValueLabel from "./loading";
import { Jumbotron, Table,Badge } from "reactstrap";
import { Divider } from 'material-ui';
import SimpleModal from './Modal';
export default function Chart(props) {
    const schedule = Array.from(props.result?.schedule || []);
    const stats = props.result?.stats || {}
    const procGraph = [];
    const procTime = [];
    const statRows = [];
    const colors = {};

    schedule.forEach((job, idx) => {
        let color;
        if (colors[job.id] !== undefined) {
            color = colors[job.id];
        } else {
            color = '#' + Math.random().toString(16).substr(-6);
            colors[job.id] = color;
        }
        procGraph.push(
            <div key={idx.toString()} style={{
                width: job.t * 20 + 10,
                backgroundColor: color, padding: "20px",
                border: "2px solid black"
            }}>{`P${job.id}`}</div>
        );
        procTime.push(
            <div key={idx.toString()} style={{ width: job.t * 20 + 10, padding: "20px" }}>{job.t}</div>
        );
    });

    Object.entries(stats).forEach((d) => {
        const [id, data] = d;
        statRows.push( 
            <tr key={id}>
                <th scope="row">{id}</th>
                <td>{data.wait}</td>
                <td>{data.comp}</td>
                <td>{data.turn}</td>
            </tr>
        );
    });

    return procGraph.length > 0 ?(
        <>
          


            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2 style={{  marginLeft: "150px" }}><Badge color="secondary">Process Details</Badge></h2>
           

              
            <br></br>
            <br></br>
            
            <div style={{  marginLeft: "90px" }}>
            <h3 className="display-6 ml-5" ><u>Gantt Chart</u>:-</h3>
            {/* <SimpleModal/> */}
            </div>
             <br></br>
            <div style={{ display: "flex", textAlign: "center", color: "white", marginLeft: "140px" }}>
                {procGraph}
            </div>
            <div style={{ display: "flex", textAlign: "center", marginLeft: "140px" }}>
                {procTime}
            </div>

            <h3 style={{  marginLeft: "136px" }} ><u>Scheduling Chart</u>:-</h3>
            <br></br>
            <div style={{ display: "flex", textAlign: "center" }}>
            
            <Table dark style={{  marginLeft: "135px" }}>
                <thead>
                    <tr>
                        <th>PID</th>
                        <th>Waiting Time</th>
                        <th>Completion Time</th>
                        <th>Turn Around Time</th>
                    </tr>
                </thead>
                <tbody>
                    {statRows}
                </tbody>
            </Table>
          
           


            </div>
            <br></br>
            <h4 style={{  marginLeft: "140px" }}>CPU utilisation is = 100%</h4>
        </>
    ): <></>
}


