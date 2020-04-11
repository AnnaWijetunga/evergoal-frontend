export default function objectivesReducer(state = {
    loading: false,
    objectivesData: []},
    action){

    switch(action.type){
        case 'FETCH_OBJECTIVES':
            console.log("fetching objectives", action.payload)
            return
        case 'LOADING_OBJECTIVES':
            console.log("now loading goals")
            return 
        case 'CREATE_OBJECTIVE':
            console.log("create objective", action.payload)
            return 
        case 'DELETE_OBJECTIVE':
            console.log("deleting objective", action.payload)
            return
        case 'TOGGLE_COMPLETE_OBJECTIVE'
            console.log("toggling complete objective")
            return
        default:
            console.log("default case in objective reducer")
            return state;
    }
}