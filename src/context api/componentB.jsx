
import React, { useContext } from "react";
import ComponentC from "./componentC";
import { FirstName, LastName } from './contextApi';

const ComponentB = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return (
        <>
            <h1>
                My name is {fname} {lname}
            </h1>
        </>
    )
}

export default ComponentB;