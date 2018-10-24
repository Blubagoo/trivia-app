export const QUESTION = 'QUESTION';
export const FEEDBACK = 'FEEDBACK';
export const DIFFICULTY =	'DIFFICULTY';
export const INC_LEVEL = 'INC_LEVEL';
export const CHANGE_EXP = 'INC_EXP';
export const SET_NAME = 'SET_NAME';
export const STATS = 'STATS';
export const ANSWER = 'ANSWER';
export const FEEDBACK_RESPONSE = 'FEEDBACK_RESPONSE';
export const CHANGE_HEALTH = 'CHANGE_HEALTH';
export const START_OVER = 'START_OVER';
export const CHANGE_RANK = 'CHANGE_RANK';
export const LEVEL_UP = 'LEVEL_UP';

export const changeView = view => {
	return ({
		type: QUESTION,
		view
	})
}
export const changeFeedback = (boolean, view, type) => {
	return ({
		type,
		view,
		feedback: boolean
	})
}
export const setDifficulty = (difficulty) => {
	return ({
		type: DIFFICULTY,
		difficulty
	})
}
export const changeLevel = (level) => {
	return ({
		type: INC_LEVEL,
		level
	})
}
export const changeExp = exp => {
	return ({
		type: CHANGE_EXP,
		exp
	})
}
export const changeHealth = health => {
	return ({
		type: CHANGE_HEALTH,
		health
	})
}
export const setName = name => {
	return ({
		type: 'SET_NAME',
		name
	})
}
export const setStats = difficulty => {
	switch (difficulty) {
		case '3':
			return ({
				type: STATS,
				health: 10
			})
		case '2':
			return ({
				type: STATS,
				health: 30
			})
		default:
			return ({
				type: STATS,
				health: 60
			})
	}
}
export const setAnswer = answer => {
	return ({
		type: ANSWER,
		answer
	});
}
export const feedbackResponse = boolean => {
	return ({
		type: FEEDBACK_RESPONSE,
		answerCorrect: boolean
	});
}
export const startOver = () => {
	return ({
		type: START_OVER
	});
}
export const changeRank = rank => {
	return ({
		type: CHANGE_RANK,
		rank
	});
}
export const levelUp = rank => {
	switch (rank) {
		case 0:
			return ({
				type: LEVEL_UP,
				expMax: 1800,
				rank
			});
		case 1:
			return ({
				type: LEVEL_UP,
				expMax: 2700,
				rank
			});
		case 2:
			return ({
				type: LEVEL_UP,
				expMax: 4000,
				rank
			});
		case 3:
			return ({
				type: LEVEL_UP,
				expMax: 6000,
				rank
			})
		default:
			return ({
				type: 'NADA'
			})
	}
}
