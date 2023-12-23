import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Layout from "./layout/Layout";
import GlobalStyle from "./styles/GlobalStyle";
import { lightThemeColors } from "./styles/Theme";
import HomePage from "./pages/home/HomePage";
import Trending from "./components/home/center/trending/Trending";
import Latest from "./components/home/center/latest/Latest";
import SignupPage from "./pages/signup/SignupPage";
import LoginPage from "./pages/login/LoginPage";
import AddPostPage from "./pages/addpost/AddPostPage";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery } from "./store/api/api";
import { useEffect } from "react";
import { setStatus, setToken, setUser } from "./store/slice/userSlice";
function App() {
  const { token } = useSelector((state) => state.user);
  console.log(token);
  const { data, isLoading, error } = useGetUserQuery(token);

  console.log(data, isLoading, error);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (token) {
      dispatch(setToken(token));
      dispatch(setStatus());
    }
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data.data));
    }
  }, [data]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={<Layout />}
      >
        <Route
          path='/'
          element={<HomePage />}
        >
          <Route
            path='/trending'
            element={<Trending />}
          />

          <Route
            index
            element={<Latest />}
          />
        </Route>

        <Route
          path='signup'
          element={<SignupPage />}
        />
        <Route
          path='login'
          element={<LoginPage />}
        />

        <Route
          path='addPost'
          element={<AddPostPage />}
        />
      </Route>
    )
  );
  return (
    <ThemeProvider theme={lightThemeColors}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
