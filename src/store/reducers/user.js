import { createSlice } from '@reduxjs/toolkit'
import { getUserInfo } from '@/api/user'
import { message } from 'antd'

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUserInfo (state, action) {
      return action.payload
    }
  }
})

export const { setUserInfo } = userSlice.actions

export const asyncGetUserInfo = () => {
  return async dispatch => {
    const res = await getUserInfo().catch(e => {
      console.log(e);
      message.error(e.message)
    })

    dispatch(setUserInfo(res?.data))
  }
}

export default userSlice.reducer
