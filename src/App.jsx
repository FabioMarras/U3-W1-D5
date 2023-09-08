import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/NavBar";
import HarryPotter from "./components/HarryPotter";
import TheLordOfRings from "./components/TheLordOfRings";
import JohnWick from "./components/JohnWick";
import Header from "./components/Header";
import Footer from "./components/footer";
import Profile from "./components/Profile";
import Setting from "./components/Setting";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <HarryPotter />
      <TheLordOfRings />
      <JohnWick />
      {/* <Profile /> */}
      {/* <Setting /> */}
      <Footer />
    </div>
  );
}

export default App;
