import styles from '../styles/Stats.module.css'

interface StatsProps {
    value: any
    text: string
    background_color?: string
    color?: string
    percentage?: boolean
}

export default function Stats(props: StatsProps) {
   return (
       <div className={styles.stats}>
           <div className={styles.value}
                style={{
                    backgroundColor: props.background_color ?? '#FDD60F',
                    color: props.color ?? '#333'
                }}>{props.percentage ? `${props.value}%` : props.value}
           </div>
           <div className={styles.text}>
               {props.text}
           </div>
       </div>
   )
}