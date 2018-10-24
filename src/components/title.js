import React from 'react';
import './styles/title.css';
import { connect } from 'react-redux';

export class Title extends React.Component {
	constructor(props) {
		super(props);
		console.log('title props', props, this.props.ranks);
		console.log('GETRANKNAME', this.getRankName(this.props.rank))
	}
	getRankName() {
		console.log(this.props.ranks.rankResults[this.props.rank].ranking )
		return this.props.ranks.rankResults[this.props.rank].ranking;
	}
	render() {
		return (
			<div className='title'>
				<p className='title'>{this.props.name},</p>
				<p className='title'>{this.getRankName()}</p>
			</div>
	  )
	}
}

const mapStateToProps = state => ({
	rank: state.rank,
	ranks: state.ranks
});

export default connect(mapStateToProps)(Title);

