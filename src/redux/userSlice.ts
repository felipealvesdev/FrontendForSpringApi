import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    login: string,
    password: string,
    token: string,
    isLogged:boolean,
}

const initialState: UserState = {
    login:'',
    password: '',
    token: '',
    isLogged: false,
}




export const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeUser(state, action: PayloadAction<UserState>) {
            const { login, password, token } = action.payload
            return {
                ...state, 
                login: login, 
                password: password, 
                token: token, 
                isLogged: true
            }
        },
        logout(state) {
            state.isLogged = false;
            state.login = '';
            state.password = '';
            state.token = '';
        },
        setToken(state, action: PayloadAction<string>) {
            return {...state, token: action.payload}
        }
    }
});

export const { changeUser, logout, setToken } = slice.actions;
export const selectUser = (state: { user: UserState }) => state.user;
export default slice.reducer;