import {
  Button,
  FloatingLabel,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import axios from "axios";
import "./CSS_Content.css";
import { useEffect, useState } from "react";
import Summary from "./Sub-Summary";
import SuggestionQuestion from "./Sub-SuggestionQuestion";

function Content() {
  const [input, setInput] = useState("");
  const [jsonValue, setJsonValue] = useState({});
  const [topic, setTopic] = useState(""); // Update the destructured state variables
  const [assignDate, setAssignDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState([]);
  const [suggestionQuestion, setSuggestionQuestion] = useState([]);
  const [isLoading, setisLoading] = useState("");
  
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  
  const handleSaveClick = () => {
    setisLoading("isLoading...")
    axios
      .post("http://localhost:3000/request", { text: input })
      .then((res) => {
        console.log(res.data);
        setJsonValue(res.data);
        setTopic(res.data.topic);
        setAssignDate(res.data.assignDate);
        setDueDate(res.data.dueDate);
        setLocation(res.data.location);
        setDescription(res.data.description);
        setSuggestionQuestion(res.data.suggestionQuestion);
        setisLoading("")
      })
      .catch((err) => {
        console.error("Error saving homework data:", err);
        // Handle the error here
      });
  };

  return (
    <Container className="content">
      <Row xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
        <Col>
          <h1
            style={{
              fontWeight: "bold",
              textAlign: "left",
              marginBottom: "1rem",
            }}
          >
            Home
          </h1>
          <h4 style={{ fontWeight: "bold", textAlign: "left" }}>
            Jot down your homework
          </h4>
          <FloatingLabel controlId="floatingTextarea2" label="Your homework">
            <Form.Control
              as="textarea"
              value={input}
              onChange={handleInputChange}
              placeholder="Leave a comment here"
              style={{ height: "200px" }}
              className="mb-2"
            />
          </FloatingLabel>
          <Button
            onClick={handleSaveClick}
            className="d-flex  flex-row-reverse mb-3"
          >
            Save
          </Button>
          <p style={{textAlign: "left"}}>
            {isLoading}
          </p>
        </Col>
        <Col className="mt-4">
          <h4 style={{ fontWeight: "bold", textAlign: "left" }}>Summary</h4>
          <Container
            className="border rounded p-3"
            style={{ textAlign: "left" }}
          >
           <Summary
              topic={topic}
              assignDate={assignDate}
              dueDate={dueDate}
              location={location}
              description={description}
              suggestionQuestion={suggestionQuestion}
            />
            <a href={`https://www.google.com/search?q=${topic}`}>
              หาข้อมูลเพิ่มเติม (Google)
            </a>
            
          </Container>
          <h4
            style={{
              fontWeight: "bold",
              textAlign: "left",
              marginTop: "1rem",
              display: "flex",
            }}
          >
            {" "}
            <span className="material-symbols-outlined">lightbulb</span>{" "}
            SuggestionQuestion
          </h4>
          <SuggestionQuestion suggestionQuestion={suggestionQuestion} />
        </Col>
      </Row>
    </Container>
  );
}

export default Content;
