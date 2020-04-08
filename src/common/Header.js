import React, { useState } from 'react';

const Header = (props) => {
    const [title] = useState(props.title);
    const [subheading] = useState(props.subheading)
    return (
        <header>
            <h1> { title } </h1>
            <h2> { subheading } </h2>
        </header>
    )
}

export default Header
