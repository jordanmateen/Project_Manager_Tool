export const createProject = (project) =>{
    return ( dispatch, getState, { getFirebase , getFirestore }) => {
        //async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName : 'Jordan',
            authorLastName : 'Mateen',
            authorId : 12345,
            creatdAt : new Date()
        }).then( () =>{
            dispatch({type : "CREATE_PROJECT", project: project})
        }).catch((err)=>{
            dispatch({type : "CREATE_PROJECT_ERROR", err})
        })
       
    }
}