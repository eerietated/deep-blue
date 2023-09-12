import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Article } from 'utilities/articlesArray'
import './ArticleCard.scss'

type Props = {
    article: Article
    isFavorite: boolean
    toggleFavorite: (id: number) => void
}

const ArticleCard = ({ article, isFavorite, toggleFavorite }: Props) => {
    return (
        <Card>
            <div className="card-img-container">
                <Card.Img
                    variant="top"
                    src={article.image}
                    alt={article.subTitle}
                />
                <Button onClick={() => toggleFavorite(article.id)}>
                    <i
                        className={
                            isFavorite
                                ? 'bi bi-bookmark-fill'
                                : 'bi bi-bookmark'
                        }
                    ></i>
                </Button>
                <div className="category">{article.category}</div>
            </div>
            <div className="card-container">
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Subtitle>{article.subTitle}</Card.Subtitle>
                    <Card.Text>{article.description}</Card.Text>
                </Card.Body>

                <Card.Footer>
                    <Link className="card-link" to={`/article/${article.id}`}>
                        Read
                    </Link>
                </Card.Footer>
            </div>
        </Card>
    )
}

export default ArticleCard
