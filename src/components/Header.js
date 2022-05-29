import React from "react"

function header({ image, title, description}) {
    return (
        <article className="header">
            <img src={image} alt={title} />
            <h2 className="header">
                {title}
            </h2>
            <p className="header">
                {description}
            </p>
        </article>
    );
}

export default header;