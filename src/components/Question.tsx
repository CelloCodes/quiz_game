'use client'

import QuestionModel from "../models/question";
import styles from '../styles/Question.module.css'
import Statement from "./Statement";
import Answer from "./Answer";
import {on} from "next/dist/client/components/react-dev-overlay/pages/bus";
import {Bonheur_Royale} from "next/dist/compiled/@next/font/dist/google";

const letters = [
    { value: 'A', color: 'lightcoral' },
    { value: 'B', color: 'lightskyblue' },
    { value: 'C', color: 'lightgreen' },
    { value: 'D', color: 'lightgrey' },
]

interface QuestionProps {
    question: QuestionModel
    on_response: (index: number) => void
}

export default function Question(props) {
    const question = props.question

    function render_answers () {
        return question.answers.map((answer, i) => {
            return <Answer key={i} value={answer} index={i} letter={letters[i].value}
                           letter_background_color={letters[i].color}
                           on_response={props.on_response} />
        })
    }

    return (
        <div className={styles.question}>
            <Statement value={question.statement} />
            {render_answers()}
        </div>
    )
}