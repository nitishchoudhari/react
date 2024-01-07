const RestaurantContainer = ({resData}) => {
    const {name, cuisines, avgRating, deliveryTime} = resData?.info;
    return (
        <div className="restro-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img alt="restro-logo" className="restro-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} mins</h4>
        </div>)
}

export default RestaurantContainer;