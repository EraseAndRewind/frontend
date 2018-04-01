import React, {PropTypes} from 'react'
import './style.scss'

const Article = ({ onClick, name, content, creationDate }) => {
    return (
        <div>
            { name }
        </div>
    )
}

Article.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string,
    content: PropTypes.string
}

export default Article
