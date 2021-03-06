// a function (not a class)
// what we return or dispatch is an actionObject

// replacing this to deploy to Heroku: const goalsURL = "http://localhost:3000/api/goals"
// const goalsURL = "/api/goals";
const goalsURL = "https://evergoal-app.herokuapp.com/api/goals"

// fetch all goals
// thunk allows us to call dispatch on the inside of a creator action (vs how connect calls dispatch automatically)
// fetchGoals is ultimately returning the data structure of a FUNCTION, from lines 11 to 15
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
// JSON.stringify - from object to string
export const addGoal = goalInput => {
    let data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(goalInput)
    }
    return dispatch => {
        fetch(`${ goalsURL }`, data)
            .then(response => response.json())
            .then(goal => dispatch({
                type: 'CREATE_GOAL',
                payload: goal 
            }))
            .catch(err => err)
    }
}

// delete goal
export const deleteGoal = goal_id => {
    let data = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    return dispatch => {
        fetch(`${goalsURL}/${goal_id}`, data)
            .then(response => response.json())
            .then(goal => dispatch({
                type: 'DELETE_GOAL',
                payload: goal
            }))
            .catch(err => err)
    }
}

// Reminder of fetch requests:
// this fetch request returns a promise
// a promise that we’ll get some sort of response eventually
// once that promise is resolved, the response from our request comes into our first THEN
// we convert that into JSON
// once that’s converted to JSON, that comes down as the argument in the next THEN
// goals is what we’re hoping to get back - the same as that converted response to JSON
// dispatching - go to our reducer, take our reducer this action object and update our Redux store based on the info I’m sending you here (type/payload)