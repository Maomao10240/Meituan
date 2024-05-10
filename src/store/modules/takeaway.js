import {createSlice} from "@reduxjs/toolkit"
import axios from "axios";

const foodStore = createSlice({
    name:"food",
    initialState:{
        foodList:[],
        activeIndex:0,
        cartList:[]
    },
    reducers:{
        setFoodList(state,action){
            state.foodList = action.payload;
        },
        changeActiveIndex(state, action){
            state.activeIndex = action.payload;
        },
        addCartList(state,action){
            //是否添加过 payload is dictionary
            const item = state.cartList.find(item=>item.id===action.payload.id)
            if(item){
                item.count++;
            }else{
                state.cartList.push(action.payload)
            }
        },
        increCount(state, action){
            const item = state.cartList.find(item=>item.id===action.payload.id)
            item.count++;
        },
        decreCount(state, action){
            const item = state.cartList.find(item=>item.id===action.payload.id)
            if(item.count === 0){
                return;
            }
            item.count--;
        },
        clearCart(state,action){
           state.cartList =[]
        }
    }
})
const {clearCart,setFoodList,changeActiveIndex,addCartList,increCount,decreCount} = foodStore.actions;
const fetchFoodList = ()=>{
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3004/takeaway')
        dispatch(setFoodList(res.data));
    }
}

export {fetchFoodList, changeActiveIndex, addCartList,increCount,decreCount,clearCart};
const reducer = foodStore.reducer
export default reducer;