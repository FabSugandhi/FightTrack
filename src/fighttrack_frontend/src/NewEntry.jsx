import React from 'react'
import { useParams } from 'react-router-dom'

const NewEntry = () => {
    const { cat_id } = useParams()
    
    return <h3>New Entry in category {cat_id}</h3>
}

export default NewEntry