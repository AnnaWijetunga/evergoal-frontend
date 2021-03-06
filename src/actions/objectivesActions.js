// const goalsURL = "http://localhost:3000/api/goals" - removed for Heroku
// const goalsURL = "/api/goals";

const PRODUCTION_BASE_URL = 'https://evergoal-app.herokuapp.com'
// const DEVELOPMENT_BASE_URL = 'http://localhost:3001'

const BASE_URL = document.location.hostname === 'my-evergoal.herokuapp.com' ? 
PRODUCTION_BASE_URL : PRODUCTION_BASE_URL
const goalsURL = `${BASE_URL}/api/goals`

// fetch goal objectives
export const fetchGoalObjectives = goalId => {
    return dispatch => {
        fetch(`${goalsURL}/${goalId}/objectives`)
            .then(response => response.json())
            .then(objectives => {
                let res = {
                    objectives,
                    goalId
                }
                dispatch({
                    type: 'FETCH_OBJECTIVES',
                    payload: res 
                })
            })
            .catch(err => err)
    }
}

// create new objective
export const addObjective = ( objectiveInput, goalId ) => {
    let data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objectiveInput)
    }
    return dispatch => {
        fetch(`${ goalsURL }/${goalId}/objectives`, data)
            .then(response => response.json())
            .then(objective => {
                let res = {objective, goalId}
                dispatch({type: 'CREATE_OBJECTIVE', payload: res})
            })
            .catch(err => err)
    }
}

// delete objective
export const deleteObjective = id => {
    
    let data = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    } 
    return dispatch => {
        fetch(`${BASE_URL}/objectives/${ id }`, data)
            .then(response => response.json())
            .then(objective => dispatch({
                type: 'DELETE_OBJECTIVE',
                payload: objective 
            }))
            .catch(err => err)
    }
}

// toggle to mark an objective complete - or click again to uncheck it
export const toggleCompleted = id => {
    let data = {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    return dispatch => {
        fetch(`${BASE_URL}/api/objectives/${ id }`, data)
            .then(response => response.json())
            .then(objective => dispatch({
                type: 'TOGGLE_COMPLETED_OBJECTIVE',
                payload: objective 
            }))
            .catch(err => err)
    }
}

