import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    login: string,
    password: string,
    token: string,
    isLogged:boolean,
    role: string
}

const initialState: UserState = {
    login:'',
    password: '',
    token: '',
    isLogged: false,
    role: ''
}




export const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeUser(state, action: PayloadAction<UserState>) {
            const { login, password, token, role } = action.payload
            return {
                ...state, 
                login: login, 
                password: password, 
                token: token, 
                isLogged: true,
                role: role
            }
        },
        logout(state) {
            state.isLogged = false;
            state.login = '';
            state.password = '';
            state.token = '';
            state.role = '';
        },
        setToken(state, action: PayloadAction<string>) {
            return {...state, token: action.payload}
        }
    }
});

export const { changeUser, logout, setToken } = slice.actions;
export const selectUser = (state: { user: UserState }) => state.user;
export default slice.reducer;