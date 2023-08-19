import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "../redux/counter";

export default configureStore({
    reducer: {

        counter :counterSlice,

    },
    
});