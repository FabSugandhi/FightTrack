import React, { useState } from "react"
import { Link } from "react-router-dom"

const CategorySelection = ({ categories }) => {
    return (
        <>
            <h3>Please select a category:</h3>
            <ul>
                {categories.map((cat) => (
                    <li>
                        <Link to={`/entry/new/${cat._id}`}>{cat.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CategorySelection
