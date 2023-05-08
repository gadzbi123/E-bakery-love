import { User } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ChooseCake from "./components/ChooseCake/ChooseCake";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import Layout from "./routes/Layout/Layout.component";
import { setCurrentUser } from "./store/user/userStore.reducer";
import { onAuthStateChangedListener } from "./utils/firebase";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        console.log(user);
        dispatch(setCurrentUser(user));
      } else {
        dispatch(setCurrentUser(null));
      }
    });
    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="moje-ciasto" element={<ChooseCake />} />
        <Route path="galeria" element={<Gallery />} />
        <Route path="kontakt" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
