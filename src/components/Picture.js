import React from "react"

const Picture = ({title, date, url, explanation, copyright}) => {
    return (
        <div>
            <h2>{title}<br></br>{date}</h2>
            <img src={url} alt = "NASA picture of the day" />
            <p>{explanation}</p>
            <p>{copyright}</p>
        </div>
    )
}

export default Picture