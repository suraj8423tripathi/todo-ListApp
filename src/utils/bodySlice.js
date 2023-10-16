import { createSlice } from "@reduxjs/toolkit";

const bodySlice = createSlice({
    name: 'body',
    initialState: {
        items: [],
        completedtask: 0,
    },
    reducers: {
        // But in redux-toolkit
        addTodoList: (state, action) => {
            // Vanialla(older) Redux => Don't MUtate State, returning was mandatory
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            // But in redux-toolkit
            // We have to mutate the state
            // But still behind the scenes react is doing the same thing but not asking developers to do it.
            
            // So what actually redux do it uses the a library called Immer. So immer check the difference between the original state and the mutated state and gives back you the new state i.e immutable state
            // Ek br ye immutable state vala concept acche se dekh lena
            // ASK What is state mutation means??
            state.items.push(action.payload);

            //ASK why this is not working
            // state = ["ganesh"];
            // And this is not working because here state is a local variable and whatever changes we are making it is happening locally only.

            // One more thing let say i want to console.log(state) it will not give proper console or esa kahe ki kuch proxy krke dega that we will not be able to read.
            // So to get read of this problem we can use console.log(current(state)); and current import will get imported from toolkit.

            // One more cool thing, RTK- says either- Mutate the existing state or return a new state
            // its just an example === state.items.length=0 or return {items :[]}; 
        },
        removeTodoList: (state) => {
            state.items.pop();
        },
        increaseCompletedTask: (state) => {
            state.completedtask += 1;
        },
        deleteItemsFromList: (state, action) => {
            const itemIdToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== itemIdToRemove);
        }
    }
});

export const { addTodoList, removeTodoList, increaseCompletedTask, deleteItemsFromList } = bodySlice.actions;

export default bodySlice.reducer;