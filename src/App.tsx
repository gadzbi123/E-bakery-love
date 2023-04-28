import { Route, Routes } from "react-router-dom";
import ChooseCake from "./components/ChooseCake/ChooseCake";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import Layout from "./routes/Layout/Layout.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="moje-ciasto" element={<ChooseCake />} />
        <Route path="galeria" element={<Gallery />} />
        {/* <Route path="kontakt" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
