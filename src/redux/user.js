import {createSlice} from '@reduxjs/toolkit';

const admins = {'testAdmin@gmail.com': '12345yuiopp'}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: JSON.parse(localStorage.getItem('auth'))?.username,
        isAdmin: JSON.parse(localStorage.getItem('auth'))?.isAdmin,
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

            localStorage.setItem('auth', JSON.stringify({username: state.username, isAdmin: state.isAdmin}))
        },
        resetState(state) {
            state.username = null;
            state.isAdmin = false;
            state.isLoggingSuccess = true;
            localStorage.clear()
        }
    }
});

export default userSlice.reducer

export const {login, resetState} = userSlice.actions