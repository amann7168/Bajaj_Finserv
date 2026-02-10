const mathService = require("../services/mathService");
const aiService = require("../services/aiService");

exports.handlePost = async (req, res) => {
  try {
    const body = req.body;

    // get first key
    const key = Object.keys(body)[0];

    if (!key) {
      return res.status(400).send(JSON.stringify({
        is_success: false,
        message: "No key provided"
      }));
    }

    let result;

    // -------- MATH --------
    if (key === "fibonacci") {
      result = mathService.fibonacci(body[key]);
    }

    else if (key === "prime") {
      result = mathService.prime(body[key]);
    }

    else if (key === "lcm") {
      result = mathService.lcm(body[key]);
    }

    else if (key === "hcf") {
      result = mathService.hcf(body[key]);
    }

    // -------- AI --------
    else if (key === "AI") {
      result = await aiService.askAI(body[key]);
    }

    // -------- INVALID --------
    else {
      return res.status(400).send(JSON.stringify({
        is_success: false,
        message: "Invalid key"
      }));
    }

    // -------- FINAL RESPONSE (ONE LINE) --------
    const response = {
      is_success: true,
      official_email:
        process.env.OFFICIAL_EMAIL ||
        "amandeep0021.be23@chitkara.edu.in",
      data: result
    };

    res.setHeader("Content-Type", "application/json");
    return res.send(JSON.stringify(response));

  } catch (error) {
    return res.status(500).send(JSON.stringify({
      is_success: false,
      message: "Server error"
    }));
  }
};
