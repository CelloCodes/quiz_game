'use client'

import styles from "../styles/Result.module.css";
import Stats from "./Stats";
import Button from "./Button";

import { useSearchParams } from "next/navigation";


export default function Result() {
    const search_params = useSearchParams()
    const total = +search_params.get('total')
    const correct = +search_params.get('correct')
    const score = Math.round((correct / total) * 100)

    return (
        <div className={styles.result}>
            <h1>Results:</h1>
            <div style={{display: 'flex'}}>
                <Stats text='Questions' value={total}/>
                <Stats text='Correct Answers' value={correct}/>
                <Stats text='Score' value={score} percentage/>
            </div>
            <div style={{ marginTop: '40px' }}>
                <Button href='/' text='Try Again'/>
            </div>
        </div>
    )
}