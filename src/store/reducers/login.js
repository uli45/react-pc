import { createSlice } from '@reduxjs/toolkit'
import { login } from '@/api/login'
import { saveToken, getToken } from '@/utils/storage'

const loginSlice = createSlice({
  name: 'login',
  initialState: getToken(),
  reducers: {
    setToken (state, action) {
      return action.payload
    }
  }
})

export const { setToken } = loginSlice.actions

export const asyncLogin = data => {
  return async dispatch => {
    // 发请求，进行登录
    const res = await login(data)

    saveToken(res.data)

    dispatch(setToken(res.data))
  }
}

export default loginSlice.reducer
