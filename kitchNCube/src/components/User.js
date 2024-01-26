import { useState } from "react";

const User = ({ name, location, contact }) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);
    return (
        <div className="user-card">
            <h2>Name - {name}</h2>
            <button onClick={
                () => {
                    setCount(count + 1);
                    setCount2(count2 + 1)
                }
            }>
                Increment Count
            </button>
            <h2>Count : {count}</h2>
            <h2>Count2 : {count2}</h2>
            <h3>Location - {location}</h3>
            <h4>Contact - {contact}</h4>
        </div>
    )
};

export default User;
