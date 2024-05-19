'use client'

import QuestionModel from "../models/question";
import {useEffect, useState} from "react";
import Questionary from "../components/Questionary";
import  { useRouter } from 'next/navigation'

const BASE_URL =  'http://localhost:3000/api'

export default function Home() {
    const router = useRouter()

    const [question, set_question] = useState<QuestionModel>()
    const [question_ids, set_question_ids] = useState<number[]>([])
    const [correct_answers, set_correct_answers] = useState<number>(0)

    async function load_question_ids() {
        const resp = await fetch(`${BASE_URL}/questionary`)
        const { question_ids } = await resp.json()
        set_question_ids(question_ids)
    }

    async function load_question(question_id: number) {
        const resp = await fetch(`${BASE_URL}/questions/${question_id}`)
        const { question: question_obj } = await resp.json()
        set_question(QuestionModel.from_object(question_obj))
    }

    useEffect(() => {
        load_question_ids()
    }, [])

    useEffect(() => {
        question_ids.length > 0 && load_question(question_ids[0])
    }, [question_ids])

    function answered_question(question: QuestionModel) {
        set_question(question)
        question.answered_right && set_correct_answers(correct_answers + 1)
    }

    function get_next_question_id() {
        if (question) {
            return question_ids[question_ids.indexOf(question.id) +1]
        }
    }

    function next_question(id: number) {
        load_question(id)
    }

    function finish_quiz() {
        const path = '/result'
        const params = new URLSearchParams({
            total: question_ids.length.toString(),
            correct: correct_answers.toString()
        }).toString()

        router.push(`${path}?${params}`)
    }

    function advance() {
        const next_question_id = get_next_question_id()
        next_question_id ? next_question(next_question_id) : finish_quiz()
    }

    return (
        <Questionary question={question}
                     last_question={get_next_question_id() === undefined}
                     on_answer={answered_question}
                     advance={advance}
        />
    )
}