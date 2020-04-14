export default function objectivesReducer(state = {
    loading: false,
    objectivesData: []},
    action){

    switch(action.type){
        case 'FETCH_OBJECTIVES':
            console.log("fetching objectives", action.payload)
            return {...state, objectivesData: action.payload.objectives}
        case 'LOADING_OBJECTIVES':
            console.log("now loading objectives")
            return {...state, loading: true}
        case 'CREATE_OBJECTIVE':
            console.log("create objective", action.payload)
            return {...state, objectivesData:[...state.objectivesData, action.payload.objective]}
        case 'DELETE_OBJECTIVE':
            console.log("deleting objective", action.payload)
            return {...state, loading: false, objectivesData: state.objectivesData.filter(objective => objective.id !== action.payload.id)}
        case 'TOGGLE_COMPLETED_OBJECTIVE':
            console.log("toggling complete objective")
            return {...state, objectivesData: [...state.objectivesData.map(objective => objective.id === action.payload.id ? {...objective, completed: !objective.completed} : objective )]}
        default:
            console.log("default case in objective reducer")
            return state;
    }
}