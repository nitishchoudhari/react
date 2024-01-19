import { useRouteError } from "react-router-dom"

export const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>This is Error Page</h1>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    )
}