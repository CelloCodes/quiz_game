'use client'

import styles from '../styles/Answer.module.css'
import AnswerModel from "../models/answer";

interface AnswerProps {
    value: AnswerModel
    index: number
    letter: string
    letter_background_color: string
    on_response: (index: number) => void
}

export default function Answer(props: AnswerProps) {
    const answer = props.value
    return (
        <div className={styles.answer} onClick={() => props.on_response(props.index)}>
            <div className={styles.content}>
                <div className={styles.front}>
                    <div className={styles.letter} style={{ backgroundColor: props.letter_background_color}}>
                        {props.letter}
                    </div>
                    <div className={styles.value}>
                        {answer.value}
                    </div>
                </div>
                <div className={styles.back}></div>
            </div>
        </div>
    )
}