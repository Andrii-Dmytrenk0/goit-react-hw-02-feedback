import React from "react";
import PropTypes from 'prop-types';
import css from './statistics.module.css';



export const Statistics = ({ good, neutral, bad, total, goodPersentage, }) => {
    return (
        <ul className={css.listStatistics}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {goodPersentage}</li>
        </ul>
    )
}


Statistics.propTypes = {
   good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    goodPercentage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};