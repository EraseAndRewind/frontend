import {
    GET_ARTICLES,
} from './types'

const getArticles = (payload) => {
    return {
        type: GET_ARTICLES,
        payload
    }
}

export {
    getArticles
}