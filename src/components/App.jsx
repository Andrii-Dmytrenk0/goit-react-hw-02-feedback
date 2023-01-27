import React from "react";
import { Title } from "./Title";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import css from './app.module.css';

export class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  updateState = (button) => {
    this.setState((prevState) => ({
      [button]: prevState[button] + 1,
    }))
  }

  countTotalFeedback = () => {
  return this.state.good + this.state.neutral + this.state.bad;
  }


countPositiveFeedbackPercentage = () => {
  return `${Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    )}%`;
  }

render() {
  const totalFeedback = this.countTotalFeedback(this.state);
  const positiveFeedbackPercentage = totalFeedback === 0 ? null : this.countPositiveFeedbackPercentage(this.state);
  const options = Object.keys(this.state);
  const { good, neutral, bad } = this.state;

    return (
      <div className={css.container}>
        <Title title="Please leave feedback" />
        <FeedbackOptions options={options}
        onLeaveFeedback={this.updateState} />
        {totalFeedback === 0 ? <h2>There is no feedback</h2> :
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            goodPersentage={positiveFeedbackPercentage}
          />}
      </div>
    )
  }
}