import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const RestaurantMenu = () => {

    const [resMenu, setResMenu] = useState(null);
    const { resId } = useParams();


    useEffect(() => {
        fetchMenuData();
    }, [])

    const fetchMenuData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=' + resId + '&catalog_qa=undefined&submitAction=ENTER');
        const json = await data.json();
        // console.log(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        setResMenu(json.data)

    }

    if (resMenu === null) {
        return (<h1>Loading...</h1>)
    }

    const { name, cuisines, costForTwoMessage } = resMenu.cards[0]?.card?.card?.info
    const { itemCards } = resMenu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    return (
        <div>
            <h1>{name}</h1>
            <p>
                {cuisines.join(', ')} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => <li>{item.card.info.name}</li>)}
            </ul>
        </div>
    )
}
