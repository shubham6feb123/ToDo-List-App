// Three important things to be remembered :--
// 1.createContext()
// 2.provider
// 3.consumer

import React, { createContext } from "react";
import ComponentA from "./componentA";

const FirstName = createContext();
const LastName = createContext();
const ContextApi = ()=>{
    return (
        <>
        <FirstName.Provider value={"shubham"}>
            <LastName.provider value={"bhaiya"}>
        <ComponentA/>
        </LastName.provider>
        </FirstName.Provider>
        </>
    )
}

export default ContextApi;
export {FirstName,LastName};