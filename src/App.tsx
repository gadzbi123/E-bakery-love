import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./routes/Layout/Layout.component";
import ChooseCake from "./components/ChooseCake/ChooseCake";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="moje-ciasto" element={<ChooseCake />} />
        {/* <Route path="galeria" element={<Galery />} /> */}
        {/* <Route path="kontakt" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
