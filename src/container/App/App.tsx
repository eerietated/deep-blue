import Header from '../Header/Header'
import Footer from 'container/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from 'pages/Home/Home'
import Category from 'pages/Category/Category'
import About from 'pages/About/About'
import Favorite from 'pages/Favorite/Favorite'
import ArticlePage from 'pages/ArticlePage/ArticlePage'
import { useState } from 'react'
import articlesArray from 'utilities/articlesArray'

type Props = {}

const App = (props: Props) => {
    const [favorites, setFavorites] = useState<number[]>([])

    const toggleFavorite = (id: number) => {
        if (favorites.includes(id)) {
            setFavorites((prevState) =>
                prevState.filter((prevState) => prevState !== id)
            )
        } else {
            setFavorites((prevState) => [...prevState, id])
        }
    }

    return (
        <>
            <Header />
            <div className="pages">
                <Container>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home
                                    favorites={favorites}
                                    toggleFavorite={toggleFavorite}
                                />
                            }
                        />
                        <Route
                            path="/category/:categoryName"
                            element={
                                <Category
                                    favorites={favorites}
                                    toggleFavorite={toggleFavorite}
                                />
                            }
                        />
                        <Route path="/about" element={<About />} />
                        <Route
                            path="/favorite"
                            element={
                                <Favorite
                                    favoriteArticles={articlesArray.filter(
                                        (article) =>
                                            favorites.includes(article.id)
                                    )}
                                    toggleFavorite={toggleFavorite}
                                />
                            }
                        />
                        <Route path="/article/:id" element={<ArticlePage />} />
                    </Routes>
                </Container>
            </div>
            <Footer favorites={favorites} toggleFavorite={toggleFavorite} />
        </>
    )
}

export default App
