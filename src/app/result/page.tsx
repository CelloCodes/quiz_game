import { Suspense } from 'react'
import Result from "../../components/Result";

export default function result() {

    return (
        <Suspense fallback={(
            <></>
        )}>
            <Result />
        </Suspense>
    )
}