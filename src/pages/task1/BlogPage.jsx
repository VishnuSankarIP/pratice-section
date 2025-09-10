import React from 'react'

function BlogPage({ title, date }) {
    return (
        <>
            <h1>{title}</h1>
            <p>{new Date(date).toLocaleDateString()}</p>
        </>
    )
}

export default BlogPage