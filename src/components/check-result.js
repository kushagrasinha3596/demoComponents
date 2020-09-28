import React from 'react';
import UserComponent from './user-components';

const checkResult = (props) => {

    function checkResult(){
        console.log("Check Result Called");
    }

    return (
        <UserComponent checkResultCallback={checkResult}></UserComponent>
    );

}

export default checkResult;