const initialState = {
    name:'Vikrant'
}

const nameReducer = (state=initialState,action) =>{
    if(action.type==="change_name"){
        return{
            ...state,
            name:action.payload
        }
    }
    return state;

}

export default nameReducer;