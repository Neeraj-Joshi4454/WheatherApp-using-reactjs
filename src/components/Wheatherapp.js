import React, { useEffect, useState } from "react";
import './Wheatherapp.css';
const Wheatherapp = () => {

    const [city, newCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {

        const fetchApi = async () => {

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1185842f6398a4b7862f2d9094c6d3d8`;
            const responce = await fetch(url);
            const resJson = await responce.json();
            // console.log(resJson);
            newCity(resJson);
        }


        fetchApi();
    }, [search])

    return (
        <div className="main">
            <div className="app">
                <div className="search">
                    <h1>My Wheather</h1>
                    <input type="search" name="city" id="city" placeholder="City Name"

                        onChange={(event) => {setSearch(event.target.value)}}/>
                </div>


                {
                    !city ? (
                        <p> No data found </p>
                    ) : (
                        <div>
                            <div className="nameicon">
                                <h3><span className="icon"><i className="fas fa-street-view"></i></span>{search}</h3>
                            </div>
                            {
                                city.main.temp>300 ? (
                                    <div className="mainicon">
                                        <i className="fas fa-sun fa-4x rotate"></i>
                                    </div>
                                ) : (
                                    <div className="mainicon">
                                        <i className="fas fa-cloud fa-4x"></i>
                                    </div>
                                )}
                            <div className="tempreture">
                                <p>{city.main.temp}</p>
                            </div>
                        </div>
                    )}

            </div>
        </div>
    );

}

export default Wheatherapp;