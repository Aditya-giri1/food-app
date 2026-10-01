import Rescard from "./Rescard";
import data from "../utils/data";
import { useState,useEffect } from "react";
function Body(){
  const [Listofrestro, SetListofrestro] = useState(data);
  const [filterestro, Setfilter] = useState(data);
  const [curntval, Setcurntval] = useState("");
  useEffect(()=>{
    console.log("heelo vro what you looking at");
    fethcdata();  
    
  },[])
  const fethcdata = async()=>{
    const data = await fetch(import.meta.env.VITE_SWIGGY_API_URL);
    const json = await data.json();
    console.log(json);
    const restroro  = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.map(
    (restro) => restro.info);
    SetListofrestro(restroro);
    Setfilter(restroro);
  }
  return(
    <>
        <div className="btn" >
          <div className="searchfield" >
            <input type="text" placeholder="Search" value={curntval} onChange={(e)=>{
              Setcurntval(e.target.value);
            }} />
            <button onClick={()=>{
              const filtires = Listofrestro.filter((restri)=>{
               return restri.name.toLowerCase().includes(curntval.toLowerCase());
              });
              Setfilter(filtires);
              console.log(curntval);
            }}  >Search</button>
          </div>
            <button onClick={()=>{
              const filterdata = Listofrestro.filter((restro)=>{
              return  restro.avgRating>4.4
              })
              Setfilter(filterdata);
            }} className="filter-btn">Top Rated Restaurants</button>
        </div>
    <div className='body'>
        {
      filterestro.map((restro, index)=>(
        <Rescard
        key={index}
        imgurl={restro.cloudinaryImageId}
        name={restro.name}
        areaName={restro.areaName}
        avgRating={restro.avgRating}
        cuisines={restro.cuisines}
        locality={restro.locality}
        />
      ))
    }
    </div>
    </>
  )
}
export default Body;