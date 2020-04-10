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

        // have to complete the return
        switch(action.type){
            case 'CREATE_GOAL':
                console.log('creating', action.payload)
                return { }
            case 'LOADING_GOALS':
                console.log("loading goals here")
                return { }
            case 'FETCH_GOALS':
                console.log("fetching goals")
                return { }
            case 'DELETE_GOAL':
                console.log("in reducer, deleting", action.payload)
            default:
                console.log("default case in goals reducer")
                return state;
        }
}