import {
	QUESTION,
	FEEDBACK,
	DIFFICULTY,
	INC_LEVEL,
	CHANGE_HEALTH,
	CHANGE_EXP,
	SET_NAME,
	STATS,
	ANSWER,
	FEEDBACK_RESPONSE,
	START_OVER,
	CHANGE_RANK,
	LEVEL_UP
} from '../actions';

import STORE from './questions';
import rankResults from './rank';

const initialState = {
	name: '',
	view: '',
	difficulty: 1,
	feedback: false,
	health: 10,
	expMax: 800,
	exp: 0,
	level: 1,
	levelMax: 10,
	questions: { ...STORE },
	ranks: { ...rankResults },
	rank: 0,
	answer: ''
}
console.log('initialState', initialState)
export const appReducer = (state = initialState, action) => {
	console.log('app reducing this action', action.type);
	switch (action.type) {
		case QUESTION:
			return Object.assign({}, state, {
				type: action.type,
				view: action.view
			});
		case FEEDBACK:
			return Object.assign({}, state, {
				type: action.type,
				view: action.view,
				feedback: action.feedback
			});
		case DIFFICULTY:
			return Object.assign({}, state, {
				type: action.type,
				difficulty: action.difficulty
			});
		case INC_LEVEL:
			return Object.assign({}, state, {
				type: action.type,
				level: action.level + 1
			});
		case CHANGE_HEALTH:
			return Object.assign({}, state, {
				health: action.health
			})
		case SET_NAME:
			return Object.assign({}, state, {
				type: action.type,
				name: action.name
			});
		case STATS:
			return Object.assign({}, state, {
				type: action.type,
				health: action.health
			});
		case ANSWER:
			return Object.assign({}, state, {
				answer: action.answer
			});
		case FEEDBACK_RESPONSE:
			return Object.assign({}, state, {
				type: FEEDBACK,
				answerCorrect: action.answerCorrect
			});
		case START_OVER:
			return Object.assign({}, state, {
				type: '',
				health: 10,
				level: 1,
				exp: 0,
				expMax: 1000,
				rank: 0
			});
			case CHANGE_EXP:
				return Object.assign({}, state, {
					exp: action.exp
				});
			case CHANGE_RANK:
				return Object.assign({}, state, {
					rank: action.rank + 1
				});
			case LEVEL_UP:
				return Object.assign({}, state, {
					expMax: action.expMax,
					rank: action.rank + 1
				});
		default:
			return state;
	}
}
