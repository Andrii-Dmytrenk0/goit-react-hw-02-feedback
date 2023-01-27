import React from "react";
import PropTypes from 'prop-types';
import css from './feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css.listButton}>
            {options.map(el => <li key={el}>
                <button className={css.button} onClick={() => onLeaveFeedback(el)} action={el}>{el[0].toUpperCase() + el.slice(1)}</button>
            </li>)}
        </ul>
    );
}


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
} 