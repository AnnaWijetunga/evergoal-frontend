// const goalsURL = "http://localhost:3000/api/goals" - removed for Heroku

// const goalsURL = "/api/goals";

// https://evergoal-app.herokuapp.com/api/goals/8/objectives/8

const goalsURL = "https://evergoal-app.herokuapp.com/api/goals"

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
        // original fetch
        fetch(`/objectives/${ id }`, data)
        
        
        // need to update this fetch url and not sure how
        // 405 error - not allowed

        // DELETE https://my-evergoal.herokuapp.com/objectives/6 405 (Not Allowed)

        // fetch(`https://evergoal-app.herokuapp.com/api/goals/objectives/${ id }`, data)
        // fetch(`https://evergoal-app.herokuapp.com/api/goals/${ goalsId }/objectives/${ id }`, data)

        // /objectives/:id
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
        fetch(`/api/objectives/${ id }`, data)
            .then(response => response.json())
            .then(objective => dispatch({
                type: 'TOGGLE_COMPLETED_OBJECTIVE',
                payload: objective 
            }))
            .catch(err => err)
    }
}

