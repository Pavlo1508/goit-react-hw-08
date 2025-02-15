import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage/HomePage";
import NotFound from "../pages/NotFound";
import Contacts from "../pages/ContactsPage/ContactsPage";
import Layout from "./Layout";
import Login from "../pages/LoginPage/LoginPage";
import Register from "../pages/RegisterPage/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import { refreshUserThunk } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

function App() {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.contacts);

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? null : (
    <div className={s.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                {" "}
                <Contacts isLoading={loading} isError={error} />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={<Login />} />}
          />
          <Route
            path="/register"
            element={<RestrictedRoute component={<Register />} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
