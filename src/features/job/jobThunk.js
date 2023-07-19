import customFetch from '../../utilts/axios'
import { showLoading, hideLoading, getAllJobs } from '../allJobs/allJobsSlice'
import { userLogOut } from '../user/userSlice'
import { clearValues } from './jobSlice'

export const createJobThunk = async (url, job, thunkAPI) => {
  try {
    const res = await customFetch.post(url, job)
    thunkAPI.dispatch(clearValues())
    return res.data
  } catch (error) {
    thunkAPI.dispatch(userLogOut())

    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
export const deleteJobThunk = async (url, thunkAPI) => {
  thunkAPI.dispatch(showLoading())
  try {
    const resp = await customFetch.delete(url)
    thunkAPI.dispatch(getAllJobs())
    return resp.data.msg
  } catch (error) {
    thunkAPI.dispatch(hideLoading())
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
export const editJobThunk = async (url, job, thunkAPI) => {
  try {
    const resp = await customFetch.patch(url, job)
    thunkAPI.dispatch(clearValues())
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
