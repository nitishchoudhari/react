import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(null);

    useEffect(() => {

        (navigator.onLine) ? setOnlineStatus(true) : setOnlineStatus(false);

        window.addEventListener('offline', () => {
            setOnlineStatus(false);
        })

        window.addEventListener('online', () => {
            setOnlineStatus(true);
        });

    })

    return onlineStatus;
}

export default useOnlineStatus;