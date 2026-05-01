import { useEffect, useRef, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { PlayFill, InfoCircle } from "react-bootstrap-icons";

// per aggiungere il video come nella mia W2, mi sono dovuto andare a leggere come funzionavano gli useEffect etc

const VideoHeroSection = () => {
  const videoRef = useRef(null);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.pause();
        setShowImage(true);
        console.log("Switch eseguito!");
      }
    }, 16000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="vh-100 w-100 position-relative overflow-hidden mb-3 bg-black">
      {/* Video */}
      <video
        ref={videoRef}
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        style={{ zIndex: 0 }}
        autoPlay
        muted
        playsInline
      >
        <source src="/prova vs code.mp4" type="video/mp4" />
      </video>

      <img
        src="/rika.png"
        alt="rika-img"
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        style={{
          transition: "opacity 1.5s ease-in-out",
          opacity: showImage ? 1 : 0,
          zIndex: 1,
        }}
      />

      {/* Overlay Contenuto */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
        style={{ zIndex: 2 }}
      >
        <Container fluid className="ps-5">
          <Card className="bg-transparent border-0 w-50">
            <Card.Img src="/Jujutsu_Kaisen_logo.svg" className="w-75 mb-3" />
            <Card.Body className="px-0 text-white">
              <Card.Text
                className="fs-5"
                style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 1)" }}
              >
                A student at a sorcerer's school to break a curse in the prequel
                to the "Jujutsu Kaisen" series, which The guardian calls "a
                masterful coming-of-age story."
              </Card.Text>
              <div className="mt-4">
                <Button variant="light" className="fw-bold px-4 me-2">
                  <PlayFill size={25} /> Play
                </Button>
                <Button variant="secondary" className="fw-bold px-4">
                  <InfoCircle size={20} className="me-2" /> More Info
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default VideoHeroSection;
