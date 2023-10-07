const { createSlice } = require("@reduxjs/toolkit")


const initialAuthState={login:false,userID:''}

const authSlice=createSlice({
  name:'authentication',
  initialState:initialAuthState,
  reducers:{
    isLogin(state){
      state.login=true
    },

    isLogout(state){
      state.login=true
    },
    setUserId(state,action){
      state.userID=action.payload
    }


  }
})


export const authActions=authSlice.actions
export default authSlice.reducer