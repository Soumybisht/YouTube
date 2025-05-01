import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addChatMessage:(state,action)=>{
            state.messages.splice(15,1);
            state.messages.unshift(action.payload);
        }
    }

})


export const {addChatMessage} = chatSlice.actions;

export default chatSlice.reducer;