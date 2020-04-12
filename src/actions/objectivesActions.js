const goalsURL = "/api/goals";

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


// toggle completed


