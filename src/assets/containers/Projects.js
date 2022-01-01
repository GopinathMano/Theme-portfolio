import React from "react";
// https://react-bootstrap.github.io/components/cards/#card-columns
import { CardColumns, Card, Button } from "react-bootstrap";
import amazon from "../images/react-shopy.png";
import recipe from "../images/My-Recipies.png";
import blog from "../images/motorDairies.png";
import quizApp from "../images/quizApp.png";
import mentorApp from "../images/mentor-manger.png";
import simonGame from "../images/simonGame.png";

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
              <Card.Text>
                Technology used are <br></br>
                <strong>ReactJs -NodeJs -MongoDB -ExpressJs</strong>
              </Card.Text>

              <Card.Link
                target="_blank"
                href="https://github.com/GopinathMano/React-Shopy-Frontend"
              >
                <Button variant="dark">Source-code</Button>
              </Card.Link>
              <Card.Link
                target="_blank"
                href="https://lucid-carson-b3fd8a.netlify.app/"
              >
                <Button variant="light">Live-Website</Button>
              </Card.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={recipe} style={styles.cardImage} />
            <Card.Body>
              <Card.Title>MY RECIPIES APP</Card.Title>
              <Card.Text>
                Technology used are <br></br>
                <strong>ReactJs -NodeJs -MongoDB -ExpressJs</strong>
              </Card.Text>
              <Card.Link
                target="_blank"
                href="https://github.com/GopinathMano/React-MyRecipeApp-Frontend"
              >
                <Button variant="dark">Source-code</Button>
              </Card.Link>
              <Card.Link
                target="_blank"
                href="https://myrecipes02.netlify.app/"
              >
                <Button variant="light">Live-Website</Button>
              </Card.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={blog} style={styles.cardImage} />
            <Card.Body>
              <Card.Title>MOTORCYCLE-DIARIES</Card.Title>
              <Card.Text>
                Technology used are <br></br>
                <strong>ReactJs -NodeJs -MongoDB -ExpressJs</strong>
              </Card.Text>
              <Card.Link
                target="_blank"
                href="https://github.com/GopinathMano/mern-BikerDiary-frontend"
              >
                <Button variant="dark">Source-code</Button>
              </Card.Link>
              <Card.Link
                target="_blank"
                href="https://epic-bassi-425708.netlify.app/"
              >
                <Button variant="light">Live-Website</Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </CardColumns>
        <CardColumns>
          <Card>
            <Card.Img variant="top" src={mentorApp} style={styles.cardImage} />
            <Card.Body>
              <Card.Title>Mentor Manager</Card.Title>
              <Card.Text>
                Technology used are <br></br>
                <strong>ReactJs -NodeJs -MongoDB -ExpressJs</strong>
              </Card.Text>
              <Card.Link
                target="_blank"
                href="https://github.com/GopinathMano/mentorAssign-frontend"
              >
                <Button variant="dark">Source-code</Button>
              </Card.Link>
              <Card.Link
                target="_blank"
                href="https://muthu-assign-mentor.netlify.app/"
              >
                <Button variant="light">Live-Website</Button>
              </Card.Link>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={quizApp} style={styles.cardImage} />
            <Card.Body>
              <Card.Title>React Quiz App</Card.Title>
              <Card.Text>
                Technology used are <br></br>
                <strong>ReactJs </strong>
              </Card.Text>
              <Card.Link
                target="_blank"
                href="https://github.com/GopinathMano/react-quiz-app"
              >
                <Button variant="dark">Source-code</Button>
              </Card.Link>
              <Card.Link
                target="_blank"
                href="https://millaniorquiz.netlify.app/"
              >
                <Button variant="light">Live-Website</Button>
              </Card.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={simonGame} style={styles.cardImage} />
            <Card.Body>
              <Card.Title>Simon Game</Card.Title>
              <Card.Text>
                Technology used are <br></br>
                <strong>ReactJs </strong>
              </Card.Text>
              <Card.Link
                target="_blank"
                href="https://github.com/GopinathMano/Color-Memory-game"
              >
                <Button variant="dark">Source-code</Button>
              </Card.Link>
              <Card.Link
                target="_blank"
                href="https://elastic-beaver-5d9f85.netlify.app/"
              >
                <Button variant="light">Live-Website</Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </CardColumns>
      </div>
    </section>
  );
};

export default Projects;
