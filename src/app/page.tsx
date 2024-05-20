import Button from "../components/Button";

export default function Home() {
    // add more personality and the possibility to change the answer time
    // in the future will add more quiz themes

    return (
        <div style={{display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
            <Button text={'Start Quiz'}
                    href={'/game?answer_time=20'}
            />
        </div>
    )
}