import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './autService'

//Obtenemos del locaStorage los datos del usuario
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSucess: false,
    isLoading: false,
    message: ''
}

//Registrar un nuevo usuario
export const register = createAsyncThunk('auth/register', async (user, thunkApi)=>{
    try{
        return await authService.register(user)
    }catch(error){
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading=false
            state.isError=false
            state.isSucess=false
            state.message=''
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(register.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isSucess = true
            state.user = action.payload
        })
        .addCase(register.rejected, (state,action)=>{
            state.isLoading = false
            state.isLoading = true
            state.message = action.payload
        })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer