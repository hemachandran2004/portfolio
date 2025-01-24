// Projects.js
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/she-wallet.jpg";
import projImg2 from "../assets/img/phistrap.png";
import projImg3 from "../assets/img/train.jpg";
import projImg4 from "../assets/img/homies.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import "./Projects.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
        {
            title: "Homies",
            description: "Homies is a streamlined Flutter app for household management. It features a login system for uploading cleaning details with photos, tracks petrol expenses, and includes a notification page for user messages. Built with Flutter and Firebase.",
            imgUrl: projImg4,
            link: "https://www.figma.com/design/TQ6EKQCf3DptTqSbWrRgrl/homies?node-id=0-1&p=f&t=tBJJF7fOedpzpQDr-0s"
        },
        {
            title: "Train App",
            description: "Transforming mobility with our Figma design project: A seamless replication of the \"Where is My Train\" mobile application. This design showcases real-time train tracking, schedule insights, and user-friendly navigation. Experience the power of intuitive design, focused on enhancing travel convenience and accessibility. Perfect for commuters, this project highlights innovation in transportation design, making travel smarter and stress-free.",
            imgUrl: projImg3,
            link: "https://www.figma.com/design/ZZYa3IHUCTNkbvSfQR9rTg/Train-app?node-id=0-1&p=f&t=8VPxHw2jdhDG16Ho-0"
        },
        {
            title: "She-wallet",
            description: "A mobile application to digitalize the Cooperative Society, which is run by the government to empower women.",
            imgUrl: projImg1,
            link: "https://www.figma.com/design/zyOY1srJuPc6ofXqbDVDh9/she_wallet?node-id=0-1&p=f&t=JRnk2I97lEVgBAwj-0"
        }
    ];

    const cursorStyle = {
        position: "absolute",
        width: "20px",
        height: "20px",
        backgroundColor: "transparent",
        border: "2px solid #4caf50",
        borderRadius: "50%",
        zIndex: "9999",
        pointerEvents: "none",
        transition: "border-color 0.3s ease",
    };

    const handleMouseMove = (e) => {
        const cursor = document.getElementById("custom-cursor");
        cursor.style.top = e.pageY + "px";
        cursor.style.left = e.pageX + "px";
    };

    return (
        <section className="project" id="projects" onMouseMove={handleMouseMove}>
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <div className="d-flex justify-content-center">
                                        <h2 className="skill-heading">Projects</h2>
                                    </div>
                                    <p>The following projects showcase my skills and experience. Each project includes a brief description, links to demos, and code repositories, demonstrating my ability to tackle complex challenges and manage projects effectively.</p>
                                    <Row className="mt-4">
                                        {projects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <div id="custom-cursor" style={cursorStyle}></div>
            <img className="background-image-right" src={colorSharp2} alt="Background" />
        </section>
    );
};
