import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Detail from "./pages/Detail";
import List from "./pages/List";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<List />} />
          <Route path="movie/:idMovie" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
