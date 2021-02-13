const request = require("request");

const response = async () => {
  try {
    const data = await request.get("http://localhost:500/");
    const d = await data.json;
    console.log(d);
  } catch (e) {
    console.log(e);
  }
};

response();
