import { Route, Routes } from "react-router";
import HomePages from "./pages/HomePages";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast from "react-hot-toast";



const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
