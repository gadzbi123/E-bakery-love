import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home.component";
import logo from "./logo.svg";
import Layout from "./routes/layout/layout.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="moje-ciasto" element={<ChooseCake />} /> */}
        {/* <Route path="galeria" element={<Galery />} /> */}
        {/* <Route path="kontakt" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
