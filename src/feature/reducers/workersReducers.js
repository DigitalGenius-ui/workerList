
const initialState = {
    value  : [
        {
            id : 1,
            email : "milad@gmail.com",
            fullName: "Milad Amiri",
            phone:+6299999999,
            salary: 4000,
            date : "14/05/2022"
        },
        {
            id : 2,
            email : "khan@gmail.com",
            fullName: "Khan Amiri",
            phone:+633399999,
            salary:5000,
            date : "10/06/2021"
        },
    ]
}


const workerReducers = (state = initialState.value, action) => {
    switch (action.type) {
        case "ADD_ITEM" : 
            state = [...state, action.payload]
            return state;
        case "UPDATE_ITEM" :
            const updateItem = state.map((worker) => worker.id === action.payload.id ? action.payload : worker);
            state = updateItem;
            return state;
        case "REMOVE_ITEM" :
            return state = state.filter((worker) => worker.id !== action.payload);
        default:
            return state
        }
}

export default workerReducers;