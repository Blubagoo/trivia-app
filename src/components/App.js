import React, { Component } from 'react';
import './styles/App.css';
import { connect } from 'react-redux';

import Header from './header';
import MainArea from './main-area';
import StatusArea from './status-area';

export class App extends Component {
	constructor(props) {
		super(props);
		console.log('app props', props);
	}
  render() {
    return (
      <div className='app'>
        <Header />
        <MainArea />
        <StatusArea />
      </div>
    );
  }
}

const mapStateToProps = state => ({
	view: state.view,
	health: state.health,
	expMax: state.expMax,
	exp: state.exp,
	level: state.level,
})

export default connect(mapStateToProps)(App)

