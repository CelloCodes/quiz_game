import styles from '../styles/Timer.module.css'
import {CountdownCircleTimer} from "react-countdown-circle-timer";

interface TimerProps {
    duration: number
    time_over: () => void
}

function time_split(value: number) {
    return [value, value/2]
}

export default function Timer(props: TimerProps) {
    return (
        <div className={styles.timer}>
            <CountdownCircleTimer
                size={120}
                isPlaying
                duration={props.duration}
                onComplete={props.time_over}
                colors={['#00f', '#f00']}
                colorsTime={[props.duration, 0]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}