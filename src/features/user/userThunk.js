import customFetch, { checkForUnauthorizedResponse } from '../../utilts/axios'
import { clearValues } from '../job/jobSlice'
import { userLogOut } from './userSlice'
//import { clearAllJobsState } from '../allJobs/allJobsSlice'
export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    // logout user
    thunkAPI.dispatch(userLogOut(message))
    // clear jobs value
    // thunkAPI.dispatch(clearAllJobsState())
    // clear job input values
    thunkAPI.dispatch(clearValues())
    return Promise.resolve()
  } catch (error) {
    // console.log(error);
    return Promise.reject()
  }
}
export const userRegisterThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user)

    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
export const userLoginThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user)

    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const userUpdateThunk = async (url, user, thunkAPI) => {
  try {
    const res = await customFetch.patch(url, user)
    return res.data
  } catch (error) {
   return checkForUnauthorizedResponse(error, thunkAPI)
  }
}
