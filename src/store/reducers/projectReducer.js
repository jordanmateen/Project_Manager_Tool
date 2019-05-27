const initialState = {
    projects : [
        {id : '1', title : 'Connect Data Layer', content : "Some content"},
        {id : '2', title : 'Import Provider', content : "Some content"},
        {id : '3', title : 'Quick Fix', content : "Some content"}
    ]

}


const projectReducer = (state  = initialState , action ) =>{

    const { type } = action

    switch(type){
        case "CREATE_PROJECT":
        console.log('created project', action.project)
        return state;

        case "CREATE_PROJECT_ERROR":
        console.log('create project err', action.err)
        return state;

        default:
        return state
    }
}

export default projectReducer