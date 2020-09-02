import React from 'react';


const Weather = (props) => {
    return(
        <div className = "container">
            <div className="cards">
                <h1> {props.city},{props.country} </h1>
                <h5 className="py-4">
                    {/* copy this class name from the icons className to add sun icon in the project*/}
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>
                {/* 25&deg; will give you temperature with degree unit */}
                <h1 className="py-2">{props.temp_celcius}&deg;</h1>
                {/* show max and min temperature */}
                {minmaxTemp(props.temp_min, props.temp_max)}
                <h4 className="py-3">{props.description}</h4>

            </div>
            
        </div>
    );
};

function minmaxTemp(min, max){
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    );
}


export default Weather;