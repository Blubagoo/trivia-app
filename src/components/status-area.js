import React from 'react';
import './styles/status-area.css';
import StatusBars from './status-bar';
import { connect } from 'react-redux';
import { levelUp } from '../actions'

export class StatusArea extends React.Component {
	constructor(props) {
		super(props);
		console.log('status area props', props, this.props.rank);
	}
	componentDidUpdate() {
		console.log('status area component updated');
		const rank = this.props.rank;
		console.log('rendering rank', rank)
		if (this.props.exp >= this.props.expMax) {
			console.log('exp is greater than max');
			this.props.dispatch(levelUp(rank));
		}
	}
	render() {
		return (
			<div className='status-area'>
				<StatusBars bars={this.props} />
			</div>
		)
	}
}

export const mapStateToProps = state => ({
	health: state.health,
	exp: state.exp,
	level: state.level,
	expMax: state.expMax,
	rank: state.rank
})

export default connect(mapStateToProps)(StatusArea);
