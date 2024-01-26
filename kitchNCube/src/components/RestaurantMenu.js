import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";

export const RestaurantMenu = () => {
    const { resId } = useParams();

    const resMenu = useRestaurantMenu(resId);

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
                {itemCards !== undefined && itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}</li>)}
            </ul>
        </div>
    )
}

