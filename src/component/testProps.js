import React from 'react';
import PropTypes from 'prop-types';


const TestProps = ({name, age, children}) => {
    // const {name, age, children} = props;
    return ( 
        <div>
            <h1>This is my props, got my name:
            {name} and my age {age}
            </h1> 
            {children}
        </div>
     );
}

TestProps.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
}


 
export default TestProps;