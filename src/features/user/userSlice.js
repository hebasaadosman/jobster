import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import {
  getUsertoLocalStorage,
  addUsertoLocalStorage,
  removeUsertoLocalStorage,
} from '../../utilts/localStorage'
import { userRegisterThunk, userLoginThunk, userUpdateThunk } from './userThunk'

const initialState = {
  user: getUsertoLocalStorage(),
  isLoading: false,
  isSidebarOpen: false,
}
export const userLogin = createAsyncThunk(
  'user/userLogin',
  async (user, thunkAPI) => {
    return userLoginThunk('auth/login', user, thunkAPI)
  }
)
export const userRegister = createAsyncThunk(
  'user/userRegister',
  async (user, thunkAPI) => {
    return userRegisterThunk('auth/register', user, thunkAPI)
  }
)
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, thunkAPI) => {
    return userUpdateThunk('auth/updateUser', user, thunkAPI)
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },
    userLogOut: (state, { payload }) => {
      state.user = null
      state.isSidebarOpen = false
      removeUsertoLocalStorage()
      if (payload) {
        toast.success(payload)
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state, { payload }) => {
        state.isLoading = true
      })
      .addCase(userRegister.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.user
        addUsertoLocalStorage(payload.user)
        toast.success(`Hello There ${state.user.name}`)
      })
      .addCase(userRegister.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
      .addCase(userLogin.pending, (state, { payload }) => {
        state.isLoading = true
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.user
        addUsertoLocalStorage(payload.user)
        toast.success(`welcome  back ${state.user.name}`)
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
      .addCase(updateUser.pending, (state, { payload }) => {
        state.isLoading = true
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload
        state.isLoading = false
        state.user = user
        addUsertoLocalStorage(user)
        toast.success('User Updated')
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
  },
})
export const { toggleSidebar, userLogOut } = userSlice.actions
export default userSlice.reducer
