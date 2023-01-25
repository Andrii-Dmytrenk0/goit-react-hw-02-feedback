import React from "react";
import PropTypes from 'prop-types';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <List>
            {options.map(el => <li key={el}> 
                <Button onClick={() => onLeaveFeedback(el)} actions={el}>{el[0].toUpperCase() + el.slice(1)}</Button>
            </li>)}
        </List>
    );
}


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}