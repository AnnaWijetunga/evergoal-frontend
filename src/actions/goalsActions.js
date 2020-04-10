// a function
// what we return or dispatch is an actionObject

const goalsURL = "/api/goals";

// fetch all goals
// thunk allows us to call dispatch on the inside of a creator action (vs how connect calls dispatch automatically)
export const fetchGoals = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_GOALS'})
            return fetch(goalsURL)
            .then(response => response.json())
            .then(goals => dispatch({type: 'FETCH_GOALS', payload: goals}))
    }
}

// fetch a particular goal by id
export const fetchGoal = id => {
    return (dispatch) => {
        dispatch({type: 'LOADING_GOALS'})
            return fetch(`${goalsURL}/${id}`)
                .then(response => response.json())
                .then(goal => dispatch({type: 'FETCH_GOAL', payload: goal}))
    }
}

// create new goal


// delete goal

