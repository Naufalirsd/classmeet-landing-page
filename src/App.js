import logo from "./logo.svg";
import "./App.css";
import Navigasi from "./components/Navigation";
import Headers from "./components/Headers";
import About from "./components/About";
import Unit from "./components/Unit";
import Profile from "./components/Profil-galeri";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Navigasi />
            <Headers />
            <About />
            <Unit />
            <Profile />
            <Footer />
        </div>
    );
}

export default App;
