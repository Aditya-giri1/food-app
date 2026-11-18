import { useEffect } from "react"

const Restourant = ()=>{
    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu = async()=>{
        const data = await fetch(import.meta.env.VITE_SWIGGY_API_URL);
        const json = await data.json()
    }
    return(
        <div>

        </div>
    )
}