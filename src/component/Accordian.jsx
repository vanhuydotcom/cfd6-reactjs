export function Accordian({ date, title, content }) {
    return (
        <div className="accordion">
            <div className="accordion__title">
                <div className="date">{date}</div>
                <h3>{title}</h3>
            </div>
            <div className="content">
                {content}
            </div>
        </div>
    )
}