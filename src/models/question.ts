import AnswerModel from "./answer";

export default class QuestionModel {
    #id: number
    #question: string
    #answers: AnswerModel[]
    #answered_right: boolean

    constructor(id: number, question: string, answers: AnswerModel[], answered_right = false) {
        this.#id = id
        this.#question = question
        this.#answers = answers
        this.#answered_right = answered_right
    }

    get id() {
        return this.#id
    }

    get question() {
        return this.#question
    }

    get answers() {
        return this.#answers
    }

    get answered_right() {
        return this.#answered_right
    }

    get answered() {
        for (let answer of this.#answers) {
            if (answer.revealed) return true
        }

        return false
    }

    to_object() {
        return {
            id: this.id,
            question: this.question,
            answers: this.answers.map(answer => answer.to_object()),
            answered_right: this.answered_right
        }
    }
}
