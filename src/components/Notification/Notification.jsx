import React from "react";
import PropTypes from 'prop-types';


export const Notification = ({ message }) => {
    return (
        <Wrapper>
            <Paragraf>{message}
            </Paragraf>
        </Wrapper>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};