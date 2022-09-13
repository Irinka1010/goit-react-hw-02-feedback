import { Component } from 'react';
import { Block } from './Block';
import Statistics from 'components/Feedback/Statistics';
import ButtonFeedback from 'components/Feedback/ButtonFeedback';
export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  leaveVote = propertyReviews => {
    this.setState(prevState => {
      const value = prevState[propertyReviews];
      return {
        [propertyReviews]: value + 1,
      };
    });
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage(propertyReviews) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[propertyReviews];
    const result = (value / total) * 100;
    return Number(result.toFixed(2));
  }
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage('good');
    return (
      <div>
        <Block title="Please leave feedback">
          <ButtonFeedback leaveVote={this.leaveVote} />
        </Block>
        <Block title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback}
          />
        </Block>
      </div>
    );
  }
}
