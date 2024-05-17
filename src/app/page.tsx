'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Question from "../components/Question";
import QuestionModel from "../models/question";
import AnswerModel from "../models/answer";

export default function Home() {
    function on_response(index: number) {
        console.log(index)
    }

    const question = new QuestionModel(0, 'Question...', [
        AnswerModel.wrong('Option 1'),
        AnswerModel.wrong('Option 3'),
        AnswerModel.wrong('Option 3'),
        AnswerModel.right('Option 4')
    ])
    return (
        <Question question={question} on_response={on_response}/>
    );
}