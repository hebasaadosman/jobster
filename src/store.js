import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'

import allJobsReducer from './features/allJobs/allJobsSlice'
import jobReducer from './features/job/jobSlice'

const store = configureStore({
  reducer: { user: userReducer, job: jobReducer, allJobs: allJobsReducer },
})

export default store
