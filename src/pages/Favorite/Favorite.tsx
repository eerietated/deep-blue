import ArticleCard from 'components/ArticleCard/ArticleCard'
import { Article } from 'utilities/articlesArray'
import { CardGroup } from 'react-bootstrap'

type Props = {
    favoriteArticles: Article[]
    toggleFavorite: (id: number) => void
}

const Favorite = ({ toggleFavorite, favoriteArticles }: Props) => {
    return (
        <CardGroup>
            <div className="category-text">Favorite</div>
            {favoriteArticles.map((article) => (
                <ArticleCard
                    key={article.id}
                    article={article}
                    isFavorite={true}
                    toggleFavorite={toggleFavorite}
                />
            ))}
        </CardGroup>
    )
}

export default Favorite
