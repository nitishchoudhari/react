import User from "./User"
import UserClass from "./UserClass"
import React from "react"

// // export const About = () => {
// //     return (
// //         <div>
// //             <h1>This is About Page</h1>
// //             <User name="Nitish" location="Mumbai" contact="@nitishchoudhari47" />
// //             <UserClass name="Nitish-class" location="Mumbai" contact="@nitishchoudhari47" />
// //         </div>
// //     )
// // } 

export class About extends React.Component {
    constructor(props) {
        super(props)
        console.log('Parent Constructor');
    }

    componentDidMount() {

        console.log('Parent comp did mount');
    }

    componentDidUpdate() {
        console.log('Parent comp did update');
    }

    componentWillUnmount() {
        console.log('Parent comp unmmounted');
    }

    render() {
        console.log('Parent render');
        return (
            <div>
                <h1>This is About Page</h1>
                <User name="Nitish" location="Mumbai" contact="@nitishchoudhari47" />
                <UserClass name="Nitish-class" location="Mumbai" contact="@nitishchoudhari47" />
            </div>
        )
    }
}


// export class About extends React.Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             count: 0
//         }
//     }


//     render() {
//         console.log('This is this keyword ', this);
//         const { count } = this.state;

//         return (
//             <div>
//                 <h1 onClick={
//                     () => {
//                         this.setState({
//                             count: this.state.count + 1
//                         })
//                     }
//                 }>This is About Page</h1>
//                 <h3>{count}</h3>
//                 <User />
//             </div>
//         )
//     }
// }