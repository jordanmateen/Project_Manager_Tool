const initialState = {
    projects : [
        {id : '1', title : 'Connect Data Layer', content : "Some content"},
        {id : '2', title : 'Import Provider', content : "Some content"},
        {id : '3', title : 'Quick Fix', content : "Some content"}
    ]

}


const projectReducer = (state  = initialState , action ) =>{
    return state; 
}

export default projectReducer