import React from "react";



export default function News(props){
    return (
            
        <div>

        <div className="the-news">
            
        <h3 className="the-heading">
        {props.heading}
        </h3>
        <h4 className="the-preview">
        source: {props.source}
        </h4>

        </div>

        </div>

       

    )
}