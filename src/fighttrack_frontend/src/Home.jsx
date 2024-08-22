import React from "react"
import { Link } from "react-router-dom"

const Home = ({ entries }) => {
    return (
        <>
            <h2 className="my-5 is-size-5">Entries</h2>
            <ul>
                {entries.map((entry) => (
                    <li>
                        <Link to={`/entry/${entry._id}`}>{entry.content}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Home
