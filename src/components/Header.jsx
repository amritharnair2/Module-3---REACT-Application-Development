import React from "react"

function Header({title,subtitle}) {
    return (
        <div className="bg-primary text-white text-center py-3 mb-4">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}

export default Header