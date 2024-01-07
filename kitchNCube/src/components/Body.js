import RestaurantContainer from "./RestaurantContainer";
import resList from "../utils/data";
import { useState } from "react";

const Body = () => {
    // state variable
    let [listOfRest, setlistOfRest] = useState(resList)
 
    // Normal JS Function

    // let listOfRestJS = [
    //     { "info": {
    //         "id": "54424",
    //         "name": "Nothing But Chicken",
    //         "cloudinaryImageId": "zqimpyyrxrfqqbm4yvqj",
    //         "locality": "Sion-Trombay road",
    //         "areaName": "Chembur",
    //         "costForTwo": "₹400 for two",
    //         "cuisines": [
    //             "Salads",
    //             "Biryani",
    //             "Kebabs",
    //             "Fast Food",
    //             "Healthy Food"
    //         ],
    //         "avgRating": 4.4,
    //         "parentId": "668",
    //         "avgRatingString": "4.4",
    //         }
    //     },
    //     {
    //         "info": {
    //         "id": "54426",
    //         "name": "Subway",
    //         "cloudinaryImageId": "zqimpyyrxrfqqbm4yvqj",
    //         "costForTwo": "₹400 for two",
    //         "cuisines": [
    //             "Salads",
    //             "Biryani",
    //             "Kebabs",
    //             "Fast Food",
    //             "Healthy Food"
    //         ],
    //         "avgRating": 4.2
    //         }
    //     }
    // ];
    // const [listOfRest] = useState(listOfRestJS);
    return (
        <div className="body">
                <div className="filter">
                    <button style={{margin : "10px 0"}} className="filter btn" 
                    onClick = {() => {
                        const filteredList = listOfRest.filter((elem) => Number(elem.info.avgRating) < 4.3);
                        setlistOfRest(filteredList);
                    }}
                    >Top Rated Restaurants</button>
                </div>
                <div className="restaurant-cont">
                    {/* {console.log(listOfRestJS)} */}
                    { listOfRest.map( restro => <RestaurantContainer key={restro.info.id} resData={restro}/>) }
                    
                    {/* <RestaurantContainer resData={resList[0]} />
                    <RestaurantContainer resData={resList[1]} />*/}
                    {/* <RestaurantContainer resName="China Bistro" resDesc="Chinese Cuisine Restaurant" starRate="4.2" orderTime="40" /> */}
                </div>
            </div>
        )
    }

export default Body;