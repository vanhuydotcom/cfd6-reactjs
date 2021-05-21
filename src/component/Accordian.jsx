import { useEffect, useRef } from "react"
import $ from 'jquery'
export function Accordian({ index, title, content, active, clickAccdian }) {
    let ref = useRef()
    useEffect(() => {
        if (active) {
            $(ref.current).slideDown(200)
        } else {
            $(ref.current).slideUp(200)
        }
    }, [active])
    return (
        <div className="accordion" onClick={clickAccdian}>
            <div className="accordion__title">
                <div className="date">Ngày {index}</div>
                <h3>{title}</h3>
            </div>
            <div ref={ref} className="content">
                {content}
            </div>
        </div>
    )
}