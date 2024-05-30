import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
    name: 'cart',
    //name
    initialState:{
        items:[]
    },

    //initial value
    reducers:{
        addItems:(state,action)=>{
state.items.push(action.payload);
// in older version of Redux DON't Mutate the state returning was mandatory
// but in newwer versiion We have to mutate the state
//uses immer behind the scene
// behind the mutate  Redux uses immer js find the difference between new state and older state
//earlier this is not allowed to write this state in Vanilaa State
        },
        removeItem:(state)=>{
            state.items.pop()
        },
        clearCart:(state,action)=>{
            state.items.length=0
            // return {items:[]} this new array will be replaced in inside originstates
            // RTK either you mutate the sate or return a new state
        }
    }
    //reducer functions
})

export const {addItems,removeItem,clearCart}=cartSlice.actions;
//this is how we export our actions
export default cartSlice.reducer;

//export only 1 reducer
