import React from 'react';

const userComponents = (props) => {
    return (
        <button onClick={props.checkResultCallback}>Check Result</button>
    );
}

export default userComponents;