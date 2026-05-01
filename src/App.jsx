import "./App.css";
import MovieCarousel from "./components/MovieCarousel";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import VideoHeroSection from "./components/VideoHeroSection";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark">
      <header className="flex-grow-1">
        <MyNavbar />
      </header>
      <main>
        <VideoHeroSection />
        <MovieCarousel searchQuery="Marvel" />
        <MovieCarousel searchQuery="Pokemon" />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
