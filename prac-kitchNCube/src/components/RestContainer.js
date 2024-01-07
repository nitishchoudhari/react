import { CDN_URL } from "../utilities/constant.js";

export const RestContainer = ({resData}) => {
    const {name, cuisines, avgRating, deliveryTime} = resData?.info;
    return (
        <div className="restro-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img alt="restro-logo" className="restro-logo" src={CDN_URL + resData.info.cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} mins</h4>
        </div>)
}

