import ArticleCard from 'components/ArticleCard/ArticleCard'
import { useParams } from 'react-router-dom'
import articlesArray from 'utilities/articlesArray'
import { CardGroup } from 'react-bootstrap'

type Props = {
    favorites: number[]
    toggleFavorite: (id: number) => void
}

type RoutParams = {
    categoryName: string
}

const Category = ({ favorites, toggleFavorite }: Props) => {
    const { categoryName } = useParams<RoutParams>()
    const filterArticles = articlesArray.filter(
        (article) =>
            article.category.toLowerCase() === categoryName?.toLowerCase()
    )

    return (
        <div>
            <CardGroup>
                <div className="category-text">{categoryName}</div>
                {filterArticles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                        isFavorite={favorites.includes(article.id)}
                        toggleFavorite={toggleFavorite}
                    />
                ))}
            </CardGroup>
        </div>
    )
}
export default Category
