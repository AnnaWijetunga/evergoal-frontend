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


// delete objective


// toggle completed


