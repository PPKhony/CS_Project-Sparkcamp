import PropTypes from "prop-types";
// import jsonData from "./data.json";
import { Container } from "react-bootstrap";

function SuggestionQuestion(prop) {
  const { suggestionQuestion } = prop;
  return (
    <>
      {suggestionQuestion.map((question, index) => (
        <Container className="border p-3 text-left mb-2 rounded" key={index}>
          <li style={{ textAlign: "left" }}>{question}</li>
        </Container>
      ))}
    </>
  );
}
SuggestionQuestion.propTypes = {
  suggestionQuestion: PropTypes.array
};
SuggestionQuestion.defaultProps = {
  suggestionQuestion: []
}
export default SuggestionQuestion;
