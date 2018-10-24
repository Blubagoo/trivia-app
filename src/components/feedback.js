import React from 'react';
import './styles/feedback.css';
import { connect } from 'react-redux';
import { changeLevel, startOver, changeRank } from '../actions'

export class Feedback extends React.Component {
	constructor(props) {
		super(props);
		console.log('feedback props', props);
	}
	componentDidMount() {
		console.log('component mounted at feedback');
		if (this.props.exp >= this.props.expMax) {
			this.props.dispatch(changeRank(this.props.rank))
		}
	}
	render() {
		console.log('this props in feedback', this.props);
		if (this.props.health <= 0) {
			return (
				<div onClick={() => {
					this.props.dispatch(startOver())
					}
				}>
					<p>the game is over</p>
					<input type='submit' className='submit-btn' value='Submit' />
				</div>
			)
		}
		if (this.props.level === this.props.levelMax) {
			return (
				<div className='feedback' onClick={() => {
						this.props.dispatch(startOver())
						}}>
					<p>Hey you finished! From hence forth, you will be known as {this.props.name}, {this.props.ranks.rankResults[this.props.rank].ranking}</p>
				</div>
			)
		}
	 	if (this.props.isAnswerCorrect === true) {
	 		return (
		 		<div className='feedback'
			 		onClick={() => {
			 			this.props.dispatch(changeLevel(this.props.level));
			 			this.props.onClick(false, 'QUESTION', 'QUESTION');
			 		}}>
			 		<h1 className='feedback-banner'>Right!</h1>
			 		<img src={this.props.questions.STORE[this.props.level - 1].img} alt={this.props.questions.STORE[this.props.level - 1].alt} />
		 			<p>{this.props.questions.STORE[this.props.level - 1].alt}</p>
		 		</div>
	 		)
	 	}
 		return (
 			<div className='feedback'
 				onClick={() => {
		 			this.props.dispatch(changeLevel(this.props.level));
		 			this.props.onClick(false, 'QUESTION', 'QUESTION');
		 		}}>
		 		<h1 className='feedback-banner'>Wrong!</h1>
		 		<img src={this.props.questions.STORE[this.props.level - 1].img} alt={this.props.questions.STORE[this.props.level - 1].alt} />
		 		<p>The answer was {this.props.questions.STORE[this.props.level - 1].correctAnswer}</p>
		 	</div>
 		)
	}
}

const mapStateToProps = state => ({
	level: state.level,
	isAnswerCorrect: state.answerCorrect,
	questions: state.questions,
	difficulty: state.difficulty,
	health: state.health,
	exp: state.exp,
	expMax: state.expMax,
	rank: state.rank,
	ranks: state.ranks,
	levelMax: state.levelMax,
	name: state.name
})

export default connect(mapStateToProps)(Feedback);
