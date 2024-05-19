import questions from "../questionBank";
import { shuffle } from '../../../functions/arrays'

export async function GET(req, res) {
    const ids = questions.map(question => question.id)
    return Response.json({ question_ids: shuffle(ids)})
}