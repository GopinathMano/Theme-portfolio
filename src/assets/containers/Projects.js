import React from "react";
// https://react-bootstrap.github.io/components/cards/#card-columns
import { CardColumns, Card, Button } from "react-bootstrap";
import amazon from "../images/react-shopy.png";
import recipe from "../images/My-Recipies.png";
import blog from "../images/motorDairies.png";

const Projects = ({ theme }) => {
  const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center align-items-center text-center`;

  const styles = {
    card: {
      backgroundColor: "#B7E0F2",
      borderRadius: 55,
      padding: "3rem",
    },
    cardImage: {
      objectFit: "cover",
      borderRadius: 25,
      height: "60vh",
    },
  };
  return (
    <section id="projects" className={newTheme}>
      <div className="container">
        <h2>My Projects</h2>
        <hr />
        <CardColumns>
          <Card>
            <Card.Img variant="top" src={amazon} style={styles.cardImage} />
            <Card.Body>
              <Card.Title>Amazon Clone</Card.Title>
              <Card.Link href="https://lucid-carson-b3fd8a.netlify.app/">
                <Button variant="primary">Live-Website</Button>
              </Card.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={recipe} style={styles.cardImage} />
            <Card.Body>
              <Card.Title>MY RECIPIES APP</Card.Title>
              <Card.Link href="https://myrecipes02.netlify.app/">
                <Button variant="primary">Live-Website</Button>
              </Card.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={blog} style={styles.cardImage} />
            <Card.Body>
              <Card.Title>MOTORCYCLE-DIARIES</Card.Title>
              <Card.Link href="https://epic-bassi-425708.netlify.app/">
                <Button variant="primary">Live-Website</Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </CardColumns>
      </div>
    </section>
  );
};

export default Projects;
