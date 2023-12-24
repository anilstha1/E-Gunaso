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
import CommentPostPage from "./pages/commentPostPage.jsx/CommentPostPage";
import SearchPage from "./pages/search/SearchPage";
import RelatedPostPage from "./pages/relatedPost/RelatedPostPage";
import BigLoading from "./components/loading/BigLoading";
function App() {
  const { token } = useSelector((state) => state.user);
  const { data, isLoading, error } = useGetUserQuery(token);

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

          <Route
            path='post/:id'
            element={<CommentPostPage />}
          />
          <Route
            path='/search/:query'
            element={<SearchPage />}
          />
          <Route
            path='/similarGunaso'
            element={<RelatedPostPage />}
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
    {
      isLoading?<div><BigLoading/></div>: <RouterProvider router={router} /> 
    }
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
