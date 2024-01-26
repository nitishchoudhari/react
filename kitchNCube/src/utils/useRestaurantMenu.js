import { useState, useEffect } from 'react'

export const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=' + resId + '&catalog_qa=undefined&submitAction=ENTER');
        const jsonData = await data.json()
        setResInfo(jsonData.data)
    }

    return resInfo;
};