import React from "react";

export default function Nav(){
    return (
        <div>
        <nav>

        <img src="https://cdn4.iconfinder.com/data/icons/summer-line-5/48/sea_lighthouse_ocean_water_beach-256.png"  className="logoimg"/>
        
         

        <div>
            <h2 className='logoname'>
            LightCrypto
        </h2>
        <p className="newstor">News Aggregator</p>

        </div>

        <h2 className='search'>
            <input type= "search" placeholder="search" className = "searchtab" />
        </h2>
        </nav>
    </div>
    )
}