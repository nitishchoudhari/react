import { RestContainer } from "./RestContainer"
import resList from "../../../kitchNCube/src/utils/data";
import { useEffect, useState } from "react";

export const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const response =  await data.json();
        console.log(response.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        // good way of handling data =>  optional chaining
        setListOfRestaurants(response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (
        <div className="body">
                <div className="filter">
                    <button style={{margin : "10px 0"}} className="filter btn"
                    onClick={() => {
                        const filteredData = resList.filter((restro)=>{
                            return restro.info.avgRating < 4.3
                        })
                        // console.log(filteredData);
                        setListOfRestaurants(filteredData)
                    }}
                    >Top Rated Restaurants</button>
                </div>
                <div className="restaurant-cont">
                    {listOfRestaurants.map((restro) => <RestContainer  key={restro.info.id} resData={restro} /> )}
                </div>
            </div>
        )
}
