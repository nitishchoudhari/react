import { RestContainer } from "./RestContainer"
import resList from "../../../kitchNCube/src/utils/data";
import { useState } from "react";

export const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
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
                    {resList.map((restro) => <RestContainer resData={restro} /> )}
                </div>
            </div>
        )
}
