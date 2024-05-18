'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Question from "../components/Question";
import QuestionModel from "../models/question";
import AnswerModel from "../models/answer";
import {useState} from "react";

const question_dummy = new QuestionModel(0, 'Question...', [
    AnswerModel.wrong('Option 1'),
    AnswerModel.wrong('Option 3'),
    AnswerModel.wrong('Option 3'),
    AnswerModel.right('Option 4')
])

export default function Home() {
    const [question, set_question] = useState(question_dummy)

    function on_response(index: number) {
        set_question(question.answer_question(index))
    }

    function time_over() {
        if (!question.answered){
            set_question(question.answer_question(-1))
        }
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'}}>
            <Question question={question} on_response={on_response} time_over={time_over} />
        </div>
    );
}