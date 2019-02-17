import React, { Component } from "react";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <li>{this.props.quiz_question.answer_options[0]}</li>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
