import {configureStore} from "@reduxjs/toolkit";
import reducer from "./modules/takeaway";

const store = configureStore({
    reducer:{
        foods:reducer
    }
})
export default store