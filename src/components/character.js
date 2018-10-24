import React from 'react';
import './styles/character.css';
import { connect } from 'react-redux';
import { setName, setDifficulty, setStats } from '../actions'

export class Character extends React.Component {
	constructor(props) {
		super(props);
		console.log('character props', props);
		this.state = {
			value: '',
			difficulty: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	setName(name) {
		this.props.dispatch(setName(name))
	}
	handleChange(event) {
		console.log('checking event type', event.target.type);
		switch (event.target.type) {
			case 'text':
				return this.setState({ value: event.target.value })
			case 'radio':
				return this.props.dispatch(setDifficulty(event.target.value));
			default:
				return console.log('default');
		}
	}
	handleSubmit(event) {
		console.log('a name was submitted: ', this.state.value);
		event.preventDefault();
		this.props.dispatch(setName(this.state.value));
		this.props.dispatch(setStats(this.props.difficulty))
		this.props.onClick('QUESTION');
	}
	render() {
		return (
			<div className='intro'>
				<div className='landing'>
					<p>Thanks for trying out trivia challenger! At any time you can press the logo in the top-left of your screen to restart.
							Enter your name and begin your journey.</p>
				</div>
				<div className='form-area'>
					<form onSubmit={this.handleSubmit}>
						<input type='text' value={this.state.value} onChange={this.handleChange} placeholder='Character Name' />
	          <div className='selection-area'>
	            <div className='selection'>
	                <input type='radio' value='1' required onChange={this.handleChange} name='diff' />
	                <p className='question-text'>Easy</p>
	            </div>
	            <div className='selection'>
	                <input type='radio' value='2' required onChange={this.handleChange} name='diff' />
	                <p className='question-text'>Medium</p>
	            </div>
	            <div className='selection'>
	                <input type='radio' value='3' required onChange={this.handleChange} name='diff' />
	                <p className='question-text'>Hard</p>
	            </div>
	          </div>
	          <input type='submit' className='submit-btn' value='Submit' />
					</form>
				</div>
			</div>
		)
	}
}
const mapStateToProps = state => ({
	difficulty: state.difficulty
})
export default connect(mapStateToProps)(Character);
