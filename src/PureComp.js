import React, { PureComponent } from 'react';


class PureComp extends PureComponent {
    
    render() {

        console.log("***********  pure component execute")
        return (
            <div>
                Pure component
            </div>
        );
    }
}



export default PureComp;