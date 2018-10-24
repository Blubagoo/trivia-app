import React from 'react';
import './styles/main-area.css';

import Question from './question';
import Answer from './answer';
import Character from './character';
import Title from './title';
import Feedback from './feedback';

import { changeView, changeFeedback, feedbackResponse, changeHealth, changeExp } from '../actions';
import { connect } from 'react-redux';

export class MainArea extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			correctAnswer: ''
		}
	this.onSubmit = this.onSubmit.bind(this);
	}
	changeFeedback(boolean, view, type) {
		this.props.dispatch(changeFeedback(boolean, view, type));
	}
	changeView(view) {
		this.props.dispatch(changeView(view))
	}
	setFeedbackResponse(boolean) {
		this.props.dispatch(feedbackResponse(boolean));
	}
	onSubmit(event) {
		event.preventDefault();
		
		if (this.props.answer === this.props.questions.STORE[this.props.level - 1].correctAnswer) {
			this.props.dispatch(changeHealth(this.props.health + 10));
			
			if (this.props.difficulty === '1') {
				this.props.dispatch(changeExp(this.props.exp + 200))
			} else if (this.props.difficulty === '2') {
				this.props.dispatch(changeExp(this.props.exp + 400))
			} else {
				this.props.dispatch(changeExp(this.props.exp + 600))
			}

			this.setFeedbackResponse(true);
		} else {

			if (this.props.difficulty === '1') {
				this.props.dispatch(changeHealth(this.props.health - 10))
			} else if (this.props.difficulty === '2') {
				this.props.dispatch(changeHealth(this.props.health - 15))
			} else {
				this.props.dispatch(changeHealth(this.props.health - 20))
			}

			this.setFeedbackResponse(false);
		}
	}
	render() {
		switch (this.props.type) {
			case 'QUESTION':
				return (
					<div className='main-area'>
						<div className='question-area'>
							<form onSubmit={this.onSubmit.bind(this)}>
								<Title name={this.props.name}/>
								<div className='trivia-area'>
									<Question />
									<Answer />
									<input type='submit' className='submit-btn' value='Submit' />
								</div>
							</form>
						</div>
					</div>
				);
			case 'FEEDBACK':
				return (
					<div className='main-area'>
						<div className='feedback-area'>
							<Feedback
								onClick={this.changeFeedback.bind(this)} />
						</div>
					</div>
				)
			default:
				return (
					<div className='main-area'>
						<div className='character'>
							<Character onClick={this.changeView.bind(this)} />
						</div>
					</div>
				)
		}
	}
}

const mapStateToProps = state => ({
	type: state.type,
	view: state.view,
	feedback: state.feedback,
	health: state.health,
	name: state.name,
	difficulty: state.difficulty,
	answer: state.answer,
	questions: state.questions,
	level: state.level,
	exp: state.exp
});

export default connect(mapStateToProps)(MainArea);
