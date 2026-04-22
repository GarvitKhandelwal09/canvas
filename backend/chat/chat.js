export const chatWithResume = async (req, res) => {
  const { message, userId } = req.body;

  const file = await File.findOne({ userId });

  const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

  const prompt = `
This is the user's resume summary:
${file.content}

Now answer:
${message}
`;

  const result = await model.generateContent(prompt);

  res.json({
    reply: result.response.text()
  });
};