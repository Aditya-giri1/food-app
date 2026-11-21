import { useEffect } from "react";
const RestourantMenu = ()=>{
    useEffect(()=>{
        fetchMenu();
    },[]);
const fetchMenu = async function () {
    try {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=467579&catalog_qa=undefined&submitAction=ENTER"
        );

        console.log("Response status:", data.status);
        console.log("Response OK:", data.ok);
        console.log("Response headers:", data.headers);

        const text = await data.text();

        console.log("Raw API Response:", text);

        if (text.length === 0) {
            console.log("API returned an empty response!");
            return;
        }

        const json = JSON.parse(text);

        console.log("Parsed JSON:", json);

    } catch (error) {
        console.error("Error fetching menu:", error);
    }
};
    

    return(
        <div className="RestourantMenu">
            <h1>RestourantName </h1>
            <h2>Maybe it's description </h2>
            <ul>
                <li>
                    biryani
                </li>
                <li>
                    rayeta
                </li>
                <li>
                    chaamp
                </li>
            </ul>
        </div>
    )
}
export default RestourantMenu;