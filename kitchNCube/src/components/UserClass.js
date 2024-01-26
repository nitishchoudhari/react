import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 2
        }
        // console.log('child constructor');
    }

    componentDidMount() {
        console.log('child component did mount');
        // API Call
    }

    componentDidUpdate() {
        console.log('child component did update');
    }

    componentWillUnmount() {
        console.log('component unmounted');
    }

    render() {
        // console.log('child render');
        const { name, location, contact } = this.props;
        const { count, count2 } = this.state;
        return (
            <div className="user-card">
                <h2>Name - {name}</h2>
                <h2>Count : {count}</h2>
                <button onClick={
                    () => {
                        this.setState({
                            count: count + 1,
                            count2: count2 + 1
                        })
                    }
                }> Increase Count</button>
                <h2>Count2 : {count2}</h2>
                <h3>Location - {location}</h3>
                <h4>Contact - {contact}</h4>
            </div>
        )
    }
}

export default UserClass;