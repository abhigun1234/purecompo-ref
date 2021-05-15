import React from 'react';
import NormalCompo from './NormalCompo';

function NormalFunctionalComp(props) {
 console.log(" ************ NormalFunctionalComp get executed")
    return (
        <div>
         {props.name}        
        </div>
    );
}

export default React.memo(NormalFunctionalComp);