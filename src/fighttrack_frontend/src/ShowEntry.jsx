import React from "react"

const ShowEntry = ({ content, category }) => {
    return (
        <>
            <p>Posted in {category}</p>
            <h2 className="my-5 is-size-5">{content}</h2>
        </>
    )
}

export default ShowEntry
