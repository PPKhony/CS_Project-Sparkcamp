import PropTypes from "prop-types";
// import jsonData from "./data.json";

function Summary(props) {
  const {
    topic,
    assignDate,
    dueDate,
    location,
    description,
  } = props;
  return (
    <div>
      <div
        style={{ fontWeight: "bold", alignContent: "center", display: "flex" }}
      >
        {" "}
        <div className="material-symbols-outlined">topic</div> Topic :
      </div>
      <p>{topic}</p>
      <div
        style={{ fontWeight: "bold", alignContent: "center", display: "flex" }}
      >
        <span className="material-symbols-outlined">calendar_month</span>Assign
        Date :
      </div>
      <p>{assignDate}</p>
      <div
        style={{ fontWeight: "bold", alignContent: "center", display: "flex" }}
      >
        <span className="material-symbols-outlined">schedule</span>
        Due Date :
      </div>
      <p>{dueDate}</p>
      <div
        style={{ fontWeight: "bold", alignContent: "center", display: "flex" }}
      >
        Location :
      </div>
      <p>{location}</p>
      <p
        style={{ fontWeight: "bold", alignContent: "center", display: "flex" }}
      >
        Description :
      </p>
      <ul>
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>

  );
}

Summary.propTypes = {
  topic: PropTypes.string,
  assignDate: PropTypes.string,
  dueDate: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.array,
  suggestionQuestion: PropTypes.array,
};
Summary.defaultProps = {
  topic: "null",
  assignDate: "null",
  dueDate: "null",
  location: "null",
  description: [],
  suggestionQuestion: [],
}
export default Summary;
