import { useParams, Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import articlesArray, {
    Article,
    getArticleObject,
} from 'utilities/articlesArray'

type Props = {}

type articlesObjectType = {
    [id: number]: Article
}

const ArticlePage = (props: Props) => {
    const { id } = useParams()
    const articlesObject: articlesObjectType = getArticleObject(articlesArray)
    const currentArticle = articlesObject[parseInt(id!)]

    const relatedArticles = articlesArray.filter(
        (article) =>
            article.category === currentArticle.category &&
            article.id !== currentArticle.id
    )

    return (
        <div className="article-container">
            <Row>
                <Col xs={9}>
                    <Row>
                        <Col>
                            <div className="article-img">
                                <img
                                    src={articlesObject[parseInt(id!)].image}
                                    alt={articlesObject[parseInt(id!)].subTitle}
                                />
                                <div className="article-name">
                                    <div className="article-subtitle">
                                        {articlesObject[parseInt(id!)].subTitle}
                                    </div>

                                    <div className="article-title">
                                        {articlesObject[parseInt(id!)].title}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="article-info">
                        <Col>
                            <div className="article-subtitle">
                                {articlesObject[parseInt(id!)].subTitle}
                            </div>
                        </Col>
                        <Col>
                            <div className="article-author">
                                by {articlesObject[parseInt(id!)].author}
                            </div>
                        </Col>
                        <Col>
                            <div className="article-date">
                                Date: {articlesObject[parseInt(id!)].date}
                            </div>
                        </Col>
                    </Row>
                    <Row className="article-introduce">
                        <h4 className="article-introduction-heading">
                            {articlesObject[parseInt(id!)].introductionHead}
                        </h4>
                        <p className="article-content-introduction">
                            {articlesObject[parseInt(id!)].introduction}
                        </p>
                    </Row>
                    <hr />
                    <Row className="article-content">
                        <div className="article-content-main">
                            <p>{articlesObject[parseInt(id!)].paragraph1}</p>
                            <p>{articlesObject[parseInt(id!)].paragraph2}</p>
                            <p>{articlesObject[parseInt(id!)].paragraph3}</p>
                        </div>
                    </Row>
                    <hr />
                    <Row className="article-conclusion">
                        <h4 className="article-conclusion-heading">
                            {articlesObject[parseInt(id!)].conclusionHead}
                        </h4>
                        <p className="article-content-conclusion">
                            {articlesObject[parseInt(id!)].conclusion}
                        </p>
                    </Row>
                </Col>
                <Col xs={3}>
                    <div className="article-aside">
                        <h4>Related Articles</h4>
                        <ul>
                            {relatedArticles.map((article) => (
                                <li key={article.id}>
                                    <Link to={`/article/${article.id}`}>
                                        {article.title} {article.subTitle}
                                    </Link>
                                    <div>by {article.author}</div>
                                    <div>Date: {article.date}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default ArticlePage
