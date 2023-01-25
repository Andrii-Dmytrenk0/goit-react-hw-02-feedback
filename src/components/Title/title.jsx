import React from "react";
import PropTypes from 'prop-types';


export const Title = ({ title }) => {
    return (
        <Text>{title}</Text>
    )
};

Title.propTypes = {
    title: PropTypes.string.isRequired
}