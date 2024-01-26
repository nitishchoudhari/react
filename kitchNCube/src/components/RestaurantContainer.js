import { CDN_URL } from "../utils/constants";

const RestaurantContainer = ({ resData }) => {
    const { name, cuisines, avgRating, deliveryTime } = resData?.info;
    return (
        <div className="restro-card flex flex-col h-full w-64 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg">
            <img alt="restro-logo" className="restro-logo rounded-xl mb-4 h-[200px]" src={CDN_URL + resData.info.cloudinaryImageId} />
            <div className="flex-grow">
                <h3 className="font-bold text-lg">{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{deliveryTime} mins</h4>
            </div>
        </div>
    );
}

export default RestaurantContainer;