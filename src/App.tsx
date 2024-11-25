import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import { RedirectPage } from "./pages/RedirectPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:hash" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  );
};
