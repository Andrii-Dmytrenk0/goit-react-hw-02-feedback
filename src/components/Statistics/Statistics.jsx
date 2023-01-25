import React from "react";
import PropTypes from 'prop-types';


export const Statistics = ({ good, neutral, bad, total, goodPersentage, }) => {
    return (
        <List>
            <ListItem>Good: {good}</ListItem>
            <ListItem>Neutral: {neutral}</ListItem>
            <ListItem>Bad: {bad}</ListItem>
            <ListItem>Total: {total}</ListItem>
            <ListItem>Positive feedback:{goodPersentage}</ListItem>
        </List>
    )
}


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    goodPersentage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};