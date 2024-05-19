import styles from '../styles/Button.module.css'
import Link from "next/link";

interface ButtonProps {
    href?: string
    text: string
    on_click?: (e: any) => void
}

export default function Button(props: ButtonProps) {
    function render_button() {
        return (
            <button className={styles.button}
                    onClick={props.on_click}>
                {props.text}
            </button>
        )
    }

    return props.href ? (
        <Link href={props.href}>
            {render_button()}
        </Link>
    ) : render_button()
}