import {createSlice} from '@reduxjs/toolkit';

const admins = {'testAdmin@gmail.com': '12345uiopp'}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: null,
        isAdmin: false,
        isLoggingSuccess: true
    },
    reducers: {
        login(state, action) {
            const username = action.payload.username;
            const adminPassword = admins[username]
            if (adminPassword) {
                if (adminPassword === action.payload.password){
                    state.username = username;
                    state.isAdmin = true;
                } else {
                    state.isLoggingSuccess = false;
                }
            } else {
                state.username = username;
            }
        },
        resetState(state) {
            state.username = null;
            state.isAdmin = false;
            state.isLoggingSuccess = true;
        }
    }
});

export default userSlice.reducer

export const {login, resetState} = userSlice.actions