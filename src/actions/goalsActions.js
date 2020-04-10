// a function
// what we return or dispatch is an actionObject

// export function fetchGoals() {

//     // briefly bring back our componentDidMount from before for testing

// }

const goalsURL = "/api/goals";

// fetch goal and fetch goals
export const fetchGoals = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_GOALS'})
            return fetch(goalsURL)
            .then(response => response.json())
            .then(goals => dispatch({type: 'FETCH_GOALS', payload: goals}))
    }
}



