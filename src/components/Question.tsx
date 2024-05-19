'use client'

import QuestionModel from "../models/question";
import styles from '../styles/Question.module.css'
import Statement from "./Statement";
import Answer from "./Answer";
import {on} from "next/dist/client/components/react-dev-overlay/pages/bus";
import {Bonheur_Royale} from "next/dist/compiled/@next/font/dist/google";
import Timer from "./Timer";

const letters = [
    { value: 'A', color: 'lightcoral' },
    { value: 'B', color: 'lightskyblue' },
    { value: 'C', color: 'lightgreen' },
    { value: 'D', color: 'lightgrey' },
]

interface QuestionProps {
    question: QuestionModel
    on_response: (index: number) => void
    time_to_answer?: number
    time_over: () => void
}

export default function Question(props: QuestionProps) {
    const question = props.question
    const time_to_answer = props.time_to_answer ? props.time_to_answer : 10

    function render_answers () {
        return question.answers.map((answer, i) => {
            return <Answer key={`${question.id}-${i}`}
                           value={answer}
                           index={i}
                           letter={letters[i].value}
                           letter_background_color={letters[i].color}
                           on_response={props.on_response} />
        })
    }

    return (
        <div className={styles.question}>
            <Statement value={question.statement} />
            <Timer key={question.id}
                   duration={time_to_answer}
                   time_over={props.time_over}/>
            {render_answers()}
        </div>
    )
}