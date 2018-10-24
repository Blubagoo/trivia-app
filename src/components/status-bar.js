import React from 'react';
import './styles/status-bar.css';
import { connect } from 'react-redux';


export class StatusBar extends React.Component {
	constructor(props) {
		super(props);
		console.log('status bar props', props);
	}
	render() {
		return (
			<div className='status-bars'>
				<div className='health-bg'>
					<div className='health'>
						<p className='md-text status-bar-text'>HEALTH: {this.props.health}</p>
					</div>
				</div>
				<div className='exp-bg'>
					<div className='exp'>
						<p className='md-text status-bar-text'>EXP: {this.props.exp}/ {this.props.expMax}</p>
					</div>
				</div>
				<div className='level-bg'>
					<div className='level'>
						<p className='md-text status-bar-text'>LEVEL: {this.props.level}</p>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	view: state.view,
	health: state.health,
	healthMax: state.healthMax,
	expMax: state.expMax,
	exp: state.exp,
	level: state.level,
	levelMax: state.levelMax
})

export default connect(mapStateToProps)(StatusBar);
