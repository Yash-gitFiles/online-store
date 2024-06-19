import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import KidsLayout from "./layout/KidsLayout";
import Layout from "./layout/Layout";
import MenLayout from "./layout/MenLayout";
import WomenLayout from "./layout/WomenLayout";
import DetailPage from "./pages/DetailPage";
import Kids from "./pages/Kids";
import ListPage from "./pages/ListPage";
import Women from "./pages/Women";
import Men from "./pages/men/Men";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProvider from "./provider/UserProvider";
import AuthGuard from "./guard/AuthGuard";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={
                <AuthGuard>
                  <MenLayout />
                </AuthGuard>
              }
            >
              <Route index element={<Men />} />
              <Route path=":id" element={<ListPage />} />
              <Route path=":id/:product" element={<DetailPage />} />
            </Route>
            <Route
              path="women"
              element={
                <AuthGuard>
                  <WomenLayout />
                </AuthGuard>
              }
            >
              <Route index element={<Women />} />
              <Route path=":id" element={<ListPage />} />
              <Route path=":id/:product" element={<DetailPage />} />
            </Route>
            <Route
              path="kids"
              element={
                <AuthGuard>
                  <KidsLayout />
                </AuthGuard>
              }
            >
              <Route index element={<Kids />} />
              <Route path=":id" element={<ListPage />} />
              <Route path=":id/:product" element={<DetailPage />} />
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
