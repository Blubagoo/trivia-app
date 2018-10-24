import React from 'react';
import './styles/answer.css';
import { connect } from 'react-redux';
import { setAnswer } from '../actions';

export class Answer extends React.Component {
	constructor(props) {
		super(props);
		console.log('answer props', props.answer);
		this.state = {
			answer: ''
		}
	}
	handleChange(event) {
		console.log('setting answer to, ', event.target.value);
		this.props.dispatch(setAnswer(event.target.value));
		console.log('after dispatch', this.props.answer);
	}
	getAnswers(number) {
		console.log('answer index,', number);
		const answers = this.props.questions.STORE[number - 1].answers.map((answer, index) => {
			return (
				<div className='answer' id={index} key={index}>
					<input type='radio' value={answer} required name='answer' onChange={this.handleChange.bind(this)} />
					<p className='sm-text'>{answer}</p>
				</div>
			)
		});
		return answers;
	}
	render() {
		console.log('level', this.props.level);
		return (
			<div className='answers'>
				{this.getAnswers(this.props.level)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	questions: state.questions,
	level: state.level,
	answer: state.answer
});

export default connect(mapStateToProps)(Answer);
