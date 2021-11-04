import React from 'react';
import './App.css';
import Section from '../src/components/Feedback/Section';
import FeedbackOptions from '../src/components/Feedback/FeedbackOptions';
import Statistics from '../src/components/Feedback/Statistics';
import Notification from './components/Feedback/Notification';
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    console.log(e.target.name);
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));

    // this.setState(prevState => ({
    //   bad: prevState.bad + 1,
    // }));
  };

  countTotalFeedback = () => {
    // return this.state.bad + this.state.neutral + this.state.good;
    return Object.values(this.state).reduce((acc, item) => (acc += item), 0);
    // this.setState(prevState => (
    //     prevState.bad + 1
    //  ))
  };

  countPositiveFeedbackPercentage = () => {
    // console.log(Object.values(this.state));
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };
  //     ;
  // countPositiveFeedbackPercentage();

  render() {
    return (
      <div className="Feedback_container">
        <Section title="Please leave feedback">
          <FeedbackOptions onIncrementBad={this.handleIncrement} />
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}

          {/* <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          /> */}
        </Section>

        {/* <FeedbackOptions onIncrementBad={this.handleIncrementBad} /> */}
        {/* <Statistics  /> */}
        {/* <span className="Feedback_title">Please leave feedback</span> */}
        {/* <div >
                  <button type="button" className="Feedback_btn">Good</button>
                  <button type="button" className="Feedback_btn">Neutral</button>
                  <button type="button" onClick={this.handleIncrementBad} className="Feedback_btn">Bad</button>
              </div> */}
        {/* <span className="Feedback_title">Statistic</span>
              <ul className="Statistic_list">
                  <li>Good: <span>{this.state.good}</span></li>
                  <li>Neutral: <span>{this.state.neutral}</span></li>
                  <li>Bad: <span>{this.state.bad}</span></li>
              </ul> */}
      </div>
    );
  }
}
export default App;

// import React from 'react';
// import './App.css';

// import Feedback from './components/Feedback/Feedback';

// function App() {
//   return (
//     <div className="App">
//       <Feedback />

//     </div>
//   );
// }

// export default App;
