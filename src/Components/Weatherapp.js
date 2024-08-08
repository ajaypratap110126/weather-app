import React, { useEffect, useState } from 'react'
import image from '../Assests/weather-photo.png'
import { FaStreetView } from "react-icons/fa";

const Weatherapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Bareilly");

  useEffect(()=>{
    const fetchApi = async () =>{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=622218700a98993165846ea8a8c87308`
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log("Res..",resJson);
      setCity(resJson.main);
      
    }
    fetchApi();
  },[search])

  return (
    <div className='flex item-center justify-center m-20'>
      <div className="card bg-base-100 w-96 shadow-2xl">
        
        <input 
          className='absolute p-3 m-2 ml-20 text-1xl border-4 rounded-full'
          type='search'
          placeholder='Search Location'
          onChange={(e) => setSearch(e.target.value)}
        />
        
        <figure>
          <img
            className='m-6'
            src={image}
            alt="Loading" 
            width="320px"
            height="200px"/>
            {/* <div className="aboslute text-center text-1xl">{city.temp}°Cal</div> */}
        </figure>
        {
          !city ? (
            <div>No Data Found</div>
          ): (
            <>
                <div className="card-body">
                  <div className='flex justify-center'>
                    <span className="card-title item-center text-2xl">
                      <FaStreetView />
                    </span>
                    <span className='text-2xl'>
                      {search}
                    </span>
                  </div>
                  <div className="text-center badge badge-secondary text-1xl">{city.temp}°Cal</div>
                  
                  <div className="flex justify-center card-actions m-2">
                  <p className='mr-2'>Min : {city.temp_min}°Cal</p>
                  { "|| "}
                  <p className='ml-2'>Max : {city.temp_max}°Cal</p>
                  </div>
                </div>
            </>
          )
        }
        
      </div>
      
    </div>
  )
}

export default Weatherapp;

