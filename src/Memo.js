import React from 'react';

function Memo(props) {
    console.log("memo component called")
    return (
        <div>
         {props.name}        
        </div>
    );
}

 export default React.memo(Memo);
//export default Memo