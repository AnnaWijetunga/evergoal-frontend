// a reducer is a function
// what sends info to our reducer? a creator is sending a new action and creates an action

// the first argument is state to set initial state
// object with a goalsData key pointing to an empty array
// object with a goalData key pointing to an empty array
// the second argument is action
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