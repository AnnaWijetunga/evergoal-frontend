// a reducer is a function and reducers exist in-between our store and our components
// reducers take in data (action and current state) and reduce it to a single object: the state
// reducers are functions with a switch statement that returns a new state based on the action type sent
// what sends info to our reducer? an action creator is sending a new action and creates an action
// action object to reducer to state - the order

// the first argument is state to set initial state
// object with a goalsData key pointing to an empty array
// object with a goalData key pointing to an empty array
// the second argument is action

// spread operator ...
// spread operator helps to include existing goals AND add a new goal
export default function goalsReducer(state = {
    loading: false,
    goalsData: [],
    goalData: []
    }, action){

        switch(action.type){
            case 'CREATE_GOAL':
                console.log('creating', action.payload)
                return {...state, goalsData:[...state.goalsData, action.payload]}
            case 'LOADING_GOALS':
                console.log("loading goals here")
                return {...state, loading: true}
            case 'FETCH_GOALS':
                console.log("fetching goals")
                return {...state, loading: false, goalsData: action.payload}
            case 'FETCH_GOAL':
                console.log("fetching 1 goal")
                return {...state, loading: false, goalData: action.payload}
            case 'DELETE_GOAL':
                console.log("in reducer, deleting", action.payload)
                return {...state, loading: false, goalsData: state.goalsData.filter(goal => goal.id !== action.payload.id)}
            default:
                console.log("default case in goals reducer")
                return state;
        }
}

// For example: FETCH_GOALS:
// we are RETURNing a new version of that state
// we don’t want goals to point to an empty array any longer
// we now want it to point to our fetch request data: goalsData: action.payload
// we are successfully updating our Redux store