import RestaurantContainer from "./RestaurantContainer";
import { useState, useEffect } from "react";
import { Shimmer } from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    // state variable
    // let [listOfRest, setlistOfRest] = useState(resList)
    const [listOfRest, setlistOfRest] = useState([]) // This is kept intact
    const [filteredRestaurant, setFilteredRestaurant] = useState([]); // a copy to change things while displaying
    const [searchVal, setSearchVal] = useState("");

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.233318112726874&lng=72.97126818448305&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
            const response = await data.json();
            console.log(response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            // good way of handling data =>  optional chaining
            setlistOfRest(response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurant(response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.log('error');
        }
    }

    // conditional Rendering
    // if(listOfRest.length === 0){
    //     // return <h1>Loading...</h1> //Bad UX Instead use Shimmer UI to showcase data loading.
    //    return <Shimmer />
    // }

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

    const onlineStatus = useOnlineStatus()
    if (onlineStatus === false) {
        return (
            <h1>Looks Like you are offline! Please check your Internet Connection</h1>
        )
    }

    return (listOfRest.length === 0) ? (<Shimmer />) : (
        <div className="body bg-gray-100">
            <div className="flex items-center justify-start">
                <div className="m-4 p-4 text-white">
                    <input
                        type="text" placeholder="Restaurants..."
                        className="search-box bg-black text-white border border-gray-300 p-2 rounded"
                        value={searchVal}
                        onChange={(e) => {
                            setSearchVal(e.currentTarget.value);
                        }}
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded"
                        onClick={() => {
                            const searchedList = listOfRest.filter((elem) =>
                                elem.info.name.toLowerCase().includes(searchVal.toLowerCase())
                            );
                            setFilteredRestaurant(searchedList);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div>
                    <button
                        style={{ margin: "10px 0" }}
                        className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                            const filteredList = listOfRest.filter(
                                (elem) => Number(elem.info.avgRating) < 4.3
                            );
                            setFilteredRestaurant(filteredList);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>

            <div className="restaurant-cont flex m-4 p-4 flex-wrap justify-evenly">
                {/* {console.log(listOfRestJS)} */}
                {filteredRestaurant.map(restro => {
                    return (<Link className="mb-8" key={restro.info.id} to={"/restaurants/" + restro.info.id}><RestaurantContainer resData={restro} /></Link>)
                })}
                {/* <RestaurantContainer resData={resList[0]} />
                    <RestaurantContainer resData={resList[1]} />*/}
                {/* <RestaurantContainer resName="China Bistro" resDesc="Chinese Cuisine Restaurant" starRate="4.2" orderTime="40" /> */}
            </div>
        </div>
    )
}

export default Body;