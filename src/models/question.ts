import AnswerModel from "./answer";
import {shuffle} from "../functions/arrays";

export default class QuestionModel {
    #id: number
    #statement: string
    #answers: AnswerModel[]
    #answered_right: boolean

    constructor(id: number, statement: string, answers: AnswerModel[], answered_right = false) {
        this.#id = id
        this.#statement= statement
        this.#answers = answers
        this.#answered_right = answered_right
    }

    get id() {
        return this.#id
    }

    get statement() {
        return this.#statement
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

    answer_question(index: number): QuestionModel {
        const answered_right = this.answers[index]?.correct
        const answers = this.answers.map((answer, i) => {
            if ((index === i) || (answer.correct)) {
                return answer.reveal()
            }
            return answer
        })
        return new QuestionModel(this.id, this.statement, answers, answered_right)
    }

    shuffle_answers(): QuestionModel {
        let shuffled_answers = shuffle(this.answers)
        return new QuestionModel(this.id, this.statement, shuffled_answers, this.answered_right)
    }

    to_object() {
        return {
            id: this.id,
            statement: this.statement,
            answers: this.answers.map(answer => answer.to_object()),
            answered_right: this.answered_right
        }
    }

    static from_object(model: QuestionModel): QuestionModel {
        const answers = model.answers.map(answer => AnswerModel.from_object(answer))
        return new QuestionModel(model.id, model.statement, answers, model.answered_right)
    }
}
