import MovieCarousel from "../components/MovieCarousel";
import VideoHeroSection from "../components/VideoHeroSection";

const Home = () => {
  return (
    <>
      <VideoHeroSection />
      <MovieCarousel searchQuery="Harry Potter" />
      <MovieCarousel searchQuery="Jujutsu kaisen" />
      <MovieCarousel searchQuery="Iron Man" />
      <MovieCarousel searchQuery="Marvel" />
      <MovieCarousel searchQuery="Pokemon" />
      <MovieCarousel searchQuery="The twilight saga" />
      <MovieCarousel searchQuery="Star Wars" />
    </>
  );
};

export default Home;
