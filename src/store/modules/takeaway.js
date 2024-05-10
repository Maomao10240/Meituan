import {createSlice} from "@reduxjs/toolkit"
import axios from "axios";

const foodStore = createSlice({
    name:"food",
    initialState:{
        foodList:[],
        activeIndex:0
    },
    reducers:{
        setFoodList(state,action){
            state.foodList = action.payload;
        },
        changeActiveIndex(state, action){
            state.activeIndex = action.payload;
        }
    }
})
const {setFoodList,changeActiveIndex} = foodStore.actions;
const fetchFoodList = ()=>{
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3004/takeaway')
        dispatch(setFoodList(res.data));
    }
}

export {fetchFoodList, changeActiveIndex};
const reducer = foodStore.reducer
export default reducer;