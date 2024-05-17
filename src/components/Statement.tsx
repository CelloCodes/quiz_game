import styles from '../styles/Statement.module.css'

interface StatementProps {
    value: string
}

export default function Statement(props: StatementProps) {
    return (
        <div className={styles.statement}>
            <div className={styles.text}>
                {props.value}
            </div>
        </div>
    )
}