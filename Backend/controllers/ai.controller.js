import generateContent from "../services/ai.service.js";

async function getResponse(req, res) {
  const prompt = req.query.prompt;

  if (!prompt) {
    return res.status(400).json({ message: "Please provide valid prompt" });
  }

  const response = await generateContent(prompt);
  return res.status(200).send(response);
}

export default getResponse;
