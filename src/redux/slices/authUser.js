const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: null,
};

const authUserSlice = createSlice({
  name: "auth-user",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      const { userData, token } = action.payload;
      localStorage.setItem("userData", JSON.stringify(userData));
      Cookies.set("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const newState = {
        ...state,
        user: userData,
      };
      return newState;
    },
    removeAuthUser: () => {
      Cookies.remove("token");
      localStorage.clear();
      const newState = {
        ...initialState,
      };
      return newState;
    },
  },
});

export const { setAuthUser, removeAuthUser } = authUserSlice.actions;

export default authUserSlice.reducer;
