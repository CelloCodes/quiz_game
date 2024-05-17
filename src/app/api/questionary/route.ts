import questions from "../questionBank";

export async function GET(req, res) {
    return Response.json({ questionary: questions.map(question => question.id)})
}