import { useState, useEffect } from 'react';
import './App.css';
import Section from '../src/components/Feedback/Section';
import FeedbackOptions from '../src/components/Feedback/FeedbackOptions';
import Statistics from '../src/components/Feedback/Statistics';
import Notification from './components/Feedback/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const allFeedbacks = { good, neutral, bad };

  const handleIncrement = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return Object.values(allFeedbacks).reduce((acc, item) => (acc += item), 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <div className="Feedback_container">
      <Section title="Please leave feedback">
        <FeedbackOptions onIncrementBad={handleIncrement} />
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}

// import React from 'react';
// import './App.css';
// import Section from '../src/components/Feedback/Section';
// import FeedbackOptions from '../src/components/Feedback/FeedbackOptions';
// import Statistics from '../src/components/Feedback/Statistics';
// import Notification from './components/Feedback/Notification';
// class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleIncrement = e => {
//     console.log(e.target.name);
//     this.setState(prevState => ({
//       [e.target.name]: prevState[e.target.name] + 1,
//     }));

//   };

//   countTotalFeedback = () => {

//     return Object.values(this.state).reduce((acc, item) => (acc += item), 0);

//   };

//   countPositiveFeedbackPercentage = () => {

//     return Math.round((this.state.good * 100) / this.countTotalFeedback());
//   };

//   render() {
//     return (
//       <div className="Feedback_container">
//         <Section title="Please leave feedback">
//           <FeedbackOptions onIncrementBad={this.handleIncrement} />
//           {this.countTotalFeedback() ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="No feedback given" />
//           )}

//         </Section>

//       </div>
//     );
//   }
// }
// export default App;
