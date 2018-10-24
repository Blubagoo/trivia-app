import React from 'react';
import './styles/question.css';
import { connect } from 'react-redux';

export class Question extends React.Component {
	constructor(props) {
		super(props);
	}
	getQuestion(number) {
		return this.props.questions.STORE[number - 1].question;
	}
	render() {
		return (
			<div className='question-area'>
				<p>{this.getQuestion(this.props.level)}</p>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	questions: state.questions,
	level: state.level,
	health: state.health
});

export default connect(mapStateToProps)(Question);
