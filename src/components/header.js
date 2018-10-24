import React from 'react';
import './styles/header.css';
import logo from './styles/logo.png';
import { connect } from 'react-redux';
import { startOver } from '../actions';

export class Header extends React.Component {
	constructor(props) {
		super(props);
		console.log('class header props', props);
	}
	render() {
		return (
			<div className='header'>
				<img className='img' src={logo} alt='Trivia Challenger Logo' onClick={ () => this.props.dispatch(startOver()) } />
				<h1 className='banner'>Trivia Challenger</h1>
			</div>
		)
	}
}

export default connect()(Header)
