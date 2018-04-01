import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'

import Article from '../components/app/article'

class ArticlesContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.articles) return null
        const articles = this.props.articles

        return (
            <div>
                <h1> HOME </h1>
                <h2> Articles </h2>
                {
                    articles.map(article =>
                        <Article
                            key={article.id} onClick={() => {}}
                            name={article.name}
                            content={article.content}
                            creationDate={article.creationDate}
                        />
                    )
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}

ArticlesContainer.propTypes = {
    articles: PropTypes.array
}

export default connect(mapStateToProps, null)(ArticlesContainer)
