import {
    Carousel,
    CarouselItem,
    Row,
    Col,
    CardGroup,
    Button,
} from 'react-bootstrap'
import ArticleCard from 'components/ArticleCard/ArticleCard'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import articlesArray from 'utilities/articlesArray'

type Props = {
    favorites: number[]
    toggleFavorite: (id: number) => void
}

const Home = ({ favorites, toggleFavorite }: Props) => {
    const ref = useRef(null)

    const onPrevClick = () => {
        if (ref.current) {
            ;(ref.current as any).prev()
        }
    }

    const onNextClick = () => {
        if (ref.current) {
            ;(ref.current as any).next()
        }
    }

    const latestArticle = articlesArray.slice(-3)

    const categories = ['Haunted Places', 'Urban Legends', 'Sightings']
    const getArticlesForCategory = (category: string) => {
        return articlesArray
            .filter((article) => article.category === category)
            .slice(0, 3)
    }

    return (
        <div className="home-page">
            <Row>
                <Col xs={6}>
                    <div className="latest-article">
                        <h3>Latest</h3>
                        <Carousel ref={ref} indicators={false} controls={false}>
                            {latestArticle.map((article) => (
                                <CarouselItem key={article.id}>
                                    <ArticleCard
                                        article={article}
                                        isFavorite={favorites.includes(
                                            article.id
                                        )}
                                        toggleFavorite={toggleFavorite}
                                    />
                                </CarouselItem>
                            ))}
                        </Carousel>
                        <div className="buttons-container">
                            <button
                                onClick={onPrevClick}
                                className="dark-button"
                            >
                                <i className="bi bi-caret-left-fill"></i>
                            </button>
                            <button
                                onClick={onNextClick}
                                className="dark-button"
                            >
                                <i className="bi bi-caret-right-fill"></i>
                            </button>
                        </div>
                    </div>
                </Col>
                <Col xs={6}>
                    <div className="popular-articles-section">
                        <h4>Popular Articles</h4>
                        <CardGroup>
                            {articlesArray.slice(0, 3).map((article) => (
                                <ArticleCard
                                    key={article.id}
                                    article={article}
                                    isFavorite={favorites.includes(article.id)}
                                    toggleFavorite={toggleFavorite}
                                />
                            ))}
                        </CardGroup>
                    </div>
                </Col>
            </Row>
            <Row>
                {categories.map((category) => (
                    <div key={category} className="category-section">
                        <h4>{category}</h4>
                        <Row>
                            {getArticlesForCategory(category).map((article) => (
                                <Col key={article.id} md={4}>
                                    <CardGroup>
                                        <ArticleCard
                                            article={article}
                                            isFavorite={favorites.includes(
                                                article.id
                                            )}
                                            toggleFavorite={toggleFavorite}
                                        />
                                    </CardGroup>
                                </Col>
                            ))}
                        </Row>
                        <Link to={`/category/${category}`}>
                            <Button variant="link">More</Button>
                        </Link>
                    </div>
                ))}
            </Row>
        </div>
    )
}
export default Home
