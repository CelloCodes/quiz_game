import styles from '../styles/Questionary.module.css'
import QuestionModel from "../models/question";
import Question from "./Question";
import Button from "./Button";

interface QuestionaryProps {
    question: QuestionModel
    last_question: boolean
    time_to_answer: number
    on_answer: (question: QuestionModel) => void
    advance: () => void
}

export default function Questionary(props: QuestionaryProps) {
    function on_response(index: number) {
        if (!props.question.answered) {
            props.on_answer(props.question.answer_question(index))
        }
    }

    return (
        <div className={styles.questionary}>
            {props.question ?
                <Question question={props.question}
                          time_to_answer={props.time_to_answer}
                          on_response={on_response}
                          time_over={() => on_response(-1)}
                />
                          : false
            }
            <div style={{ marginTop: '40px' }}>
                <Button on_click={props.advance}
                        text={props.last_question ? 'Finish' : 'Next'}/>
            </div>
        </div>
    )
}