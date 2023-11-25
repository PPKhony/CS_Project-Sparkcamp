const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const port = 3000;
const date = require('date-and-time');
var cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("");
});

//Open ai part
const { Configuration, OpenAIApi } = require("openai");

//

app.post("/request", jsonParser , async (req, res) => {`
`
  const configuration = new Configuration({
    apiKey: "",
  });
  const openai = new OpenAIApi(configuration);
  const AddonMes = "summarize for easier reader";
  try {
    const now = new Date();
    const schema = {
        "type": "object",
        "properties": {
          "topic": {
            "type": "string",
            "description": "Descriptive title of the topic"
          },
          "assignDate": {
            "type": "string",
            "description": `Assignment date like in the format 'DD-MM-YYYY HH-MM'and now is ${date.format(now, 'YYYY/MM/DD HH:mm:ss')} this is set for now time`
          },
          "dueDate": {
            "type": "string",
            "description": "Due date of the assignment like in the format 'DD-MM-YYYY HH-MM'"
          },
          "location": {
            "type": "string",
            "description": "way or where to sent home work"
          },
          "description": {
            "type": "array",
            "description": "Array of strings describing the assignment details that helper learner",
            "items": {
              "type": "string",
              "type": "string",
              "type": "string"
            }
          },
          "suggestionQuestion": {
            "type": "array",
            "description": "Array of strings containing the suggested questions for this homework",
            "items": {
              "type": "string",
              "type": "string",
              "type": "string"
            }
          }
        }
    }
    console.log(date.format(now, 'YYYY/MM/DD HH:mm:ss'));
    console.log();
    const prompt = req.body.text
    console.log(prompt);
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{"role": "user" , "content": prompt + AddonMes}],
      functions: [{ name: "set_recipe", parameters: schema }],
      function_call: {name: "set_recipe"}
    }) 
    res.status(200)
    const generatedText = completion.data.choices[0].message.function_call.arguments;
    res.json(JSON.parse(generatedText))
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    res.end("error");
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
