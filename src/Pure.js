import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Pure extends PureComponent {
    constructor(props){
     super(props)
    }
    render() {
        console.log("pure component called")
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

Pure.propTypes = {

};

export default Pure;