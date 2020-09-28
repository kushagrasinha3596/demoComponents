import React from 'react';

const userComponents = (props) => {

    function checkResult(){
        console.log("Check Result Called");
    }

    return (
        <button onClick={checkResult}>Check Result</button>
    );
}

export default userComponents;