import React from 'react';
import PropTypes from 'prop-types';

const Location = ({city})=>(
    //Destructuring
    //const city=props.city;
    //const {city}=props;
        
    <div className="locationCont">
        <h1>
            {city}
        </h1>
    </div>
);

Location.propTypes={
    city:PropTypes.string.isRequired,
};

export default Location;