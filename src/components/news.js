import React from "react";



export default function News(props){
    return (
            
        <div className="newstab">
            <div>
            <p className="Arrival">
                {props.timestamp}
            </p>

            </div>
            

        <div className="the-news">
            
        <h3 className="the-heading">
            <a href= {props.link} alt="" className="sourceList">
        {props.heading}
        </a>
        </h3>
        <h4 className="the-preview">
        source: {props.source}
        </h4>

        </div>

        </div>

       

    )
}