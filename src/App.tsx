
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          {/* Default (redirect or 404) */}
          <Route path="*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
