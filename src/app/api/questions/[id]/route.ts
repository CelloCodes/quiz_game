import questions from '../../questionBank'

export async function GET(req, res) {
    // change to params later
    const url_parts = req.url.split('/')
    const selected_id = +url_parts[url_parts.length - 1]
    const selected_questions = questions.filter(question => question.id === selected_id)

    let response = {}
    let status = { status: 404 }
    if(selected_questions.length === 1) {
        response = { question: selected_questions[0].shuffle_answers().to_object() }
        status = { status: 200 }
    }

    return Response.json(response, status)
}