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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MenLayout />}>
            <Route index element={<Men />} />
            <Route path=":id" element={<ListPage />} />
            <Route path=":id/:product" element={<DetailPage />} />
          </Route>
          <Route path="women" element={<WomenLayout />}>
            <Route index element={<Women />} />
            <Route path=":id" element={<ListPage />} />
            <Route path=":id/:product" element={<DetailPage />} />
          </Route>
          <Route path="kids" element={<KidsLayout />}>
            <Route index element={<Kids />} />
            <Route path=":id" element={<ListPage />} />
            <Route path=":id/:product" element={<DetailPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
