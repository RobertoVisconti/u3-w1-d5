import MovieCarousel from "../components/MovieCarousel";
import VideoHeroSection from "../components/VideoHeroSection";

const Home = () => {
  return (
    <>
      <VideoHeroSection />
      <MovieCarousel searchQuery="Harry Potter" />
      <MovieCarousel searchQuery="Jujutsu kaisen" />
      <MovieCarousel searchQuery="One Piece" />
      <MovieCarousel searchQuery="Naruto" />
      <MovieCarousel searchQuery="Iron Man" />
      <MovieCarousel searchQuery="Pokemon" />
      <MovieCarousel searchQuery="The twilight saga" />
      <MovieCarousel searchQuery="Star Wars" />
    </>
  );
};

export default Home;
