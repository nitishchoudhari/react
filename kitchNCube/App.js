import React from "react";
import ReactDOM from "react-dom/client";

/* React code*/
const root = ReactDOM.createRoot(document.getElementById('root'));

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)


const RestaurantContainer = (props) => {
    const { resData } = props;
    return (
        <div className="restro-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img alt="restro-logo" className="restro-logo" src="https://upload.wikimedia.org/wikipedia/en/b/bf/Twisties_logo.png" />
            <h3>{resData.data.name}</h3>
            <h4>{...resData.data.cuisines.join(', ')}</h4>
            <h4>{resData.data.avgRating} stars</h4>
            <h4>{resData.data.deliveryTime} mins</h4>
        </div>)
}

const resObj = {
    type: "restaurant",
    data: {
        type: "F",
        id: "219",
        name: "Anjappar",
        uuid: "8791296b-70ce-441f-8f9c-7a25414db291",
        city: "1",
        area: "Koramangala",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "fa25f646f0f18e7b1d854e3e8b4a8f1b",
        cuisines: [
            "Chettinad",
            "Thalis",
            "Biryani",
            "Chinese",
            "Tandoor",
            "South Indian",
            "North Indian",
        ],
        tags: [],
        costForTwo: 60000,
        costForTwoString: "â‚¹600 FOR TWO",
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        slaString: "24 MINS",
        lastMileTravel: 0.6000000238418579,
        slugs: {
            restaurant: "anjappar-4th-b-block-koramangala",
            city: "bangalore",
        },
        cityState: "1",
        address:
            "4, 17th Main, Near BDA Complex, 100 Feet Road, 4th B Block,Koramangala",
        locality: "4th B Block",
        parentId: 61,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
            header: "50% off",
            shortDescriptionList: [
                {
                    meta: "50% off | Use WELCOME50",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                },
            ],
            descriptionList: [
                {
                    meta: "50% off up to â‚¹100 | Use code WELCOME50",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
            header: "50% OFF",
            shortDescriptionList: [
                {
                    meta: "Use WELCOME50",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                },
            ],
            descriptionList: [
                {
                    meta: "50% off up to â‚¹100 | Use code WELCOME50",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                },
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: "",
        },
        ribbon: [{ type: "PROMOTED" }],
        chain: [],
        feeDetails: {
            fees: [],
            totalFees: 0,
            message: "",
            title: "",
            amount: "",
            icon: "",
        },
        availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
            "cid=5850298~p=1~eid=00000186-20ad-87c6-0d5e-392c004e0163",
        badges: {
            imageBased: [],
            textBased: [],
            textExtendedBadges: [],
        },
        lastMileTravelString: "0.6 kms",
        hasSurge: false,
        sla: {
            restaurantId: "219",
            deliveryTime: 24,
            minDeliveryTime: 24,
            maxDeliveryTime: 24,
            lastMileTravel: 0.6000000238418579,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "NOT_LONG_DISTANCE",
            preferentialService: false,
            iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.1",
        totalRatings: 500,
        new: false,
    },
    subtype: "basic",
}


const Body = () => (
    <div className="body">
        <div className="search-bar">Search</div>
        <div className="restaurant-cont">
            <RestaurantContainer resData={resObj} />
            {/* <RestaurantContainer resName="China Bistro" resDesc="Chinese Cuisine Restaurant" starRate="4.2" orderTime="40" /> */}
        </div>
    </div>
)

const AppLayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
)

root.render(<AppLayout />);
