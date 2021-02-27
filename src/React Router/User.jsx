import React from 'react';
import { useParams,useLocation, useHistory } from 'react-router-dom';

// const User = ({match})=>{
//     return (
//         <>
//         <h1>User {match.params.name} page...</h1>
//         </>
//     )
// }
const User = ()=>{
    const {name,lname }= useParams(); 
    const location = useLocation();
    const history = useHistory();
    // console.log(location);
    console.log(history);
    return (
        <>
        <h1>User {name} {lname} page...</h1>
        <p>My current location is {location.pathname}</p>
        {location.pathname==='/user/shubham/sharma' ? 
        <button onClick={()=>{history.goBack()}}>Go to service</button> : null}
        </>
    )
}

export default User;