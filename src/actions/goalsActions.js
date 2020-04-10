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



// Reminder of fetch requests:
// this fetch request returns a promise.
// a promise that we’ll get some sort of response eventually.
// once that promise is resolved, the response from our request comes into our first THEN.
// ee convert that into JSON.
// once that’s converted to JSON, that comes down as the argument in the next THEN.
// accounts is what we’re hoping to get back - the same as that converted response to JSON.
// dispatching - go to our reducer, take our reducer this action object and update our Redux store based on the info I’m sending you here (type/payload).