import RestaurantContainer from "./RestaurantContainer";

const Body = () => (
    <div className="body">
        <div className="search-bar">Search</div>
        <div className="restaurant-cont">
            { resList.map( restro => <RestaurantContainer key={restro.info.id} resData={restro}/>) }
            
            {/* <RestaurantContainer resData={resList[0]} />
            <RestaurantContainer resData={resList[1]} />
            <RestaurantContainer resData={resList[2]} />
            <RestaurantContainer resData={resList[3]} />
            <RestaurantContainer resData={resList[4]} />
            <RestaurantContainer resData={resList[5]} /> */}
            {/* <RestaurantContainer resName="China Bistro" resDesc="Chinese Cuisine Restaurant" starRate="4.2" orderTime="40" /> */}
        </div>
    </div>
)

export default Body;