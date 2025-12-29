import generateContent from "../services/ai.service.js";

async function getReview(req, res) {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send("Prompt is required");
  }

  const response = await generateContent(code);
  return res.status(200).send(response);
}

export default getReview;
