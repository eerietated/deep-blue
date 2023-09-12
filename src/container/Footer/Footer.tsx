import { Container, Form, Button, Row, Col, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Footer.scss'

type Props = {
    favorites: number[]
    toggleFavorite: (id: number) => void
}

const Footer = ({ favorites, toggleFavorite }: Props) => {
    return (
        <footer>
            <Container>
                <div className="footer-body">
                    <Row className="footer-content">
                        <Col xs={4}>
                            <div className="footer-logo">DEEP BLUE</div>
                            <Form>
                                <Form.Group
                                    controlId="formBasic"
                                    className="form-group"
                                >
                                    <Form.Label>
                                        Read the eariest news!
                                    </Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                </Form.Group>
                                <Button type="submit" className="dark-button">
                                    Subscribe
                                </Button>
                            </Form>
                        </Col>
                        <Col>
                            <div className="footer-links footer-categories">
                                <h4>Categories</h4>
                                <Nav.Link
                                    to="/category/Haunted Places"
                                    as={NavLink}
                                >
                                    Haunted Places
                                </Nav.Link>
                                <Nav.Link
                                    to="/category/Urban Legends"
                                    as={NavLink}
                                >
                                    Urban Legends
                                </Nav.Link>
                                <Nav.Link to="/category/Sightings" as={NavLink}>
                                    Sightings
                                </Nav.Link>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-links quick-links">
                                <h4>Quick Links</h4>
                                <Nav.Link to="/" as={NavLink}>
                                    Home
                                </Nav.Link>
                                <Nav.Link to="/about" as={NavLink}>
                                    About Us
                                </Nav.Link>
                                <Nav.Link to="/favorite" as={NavLink}>
                                    Favorite
                                </Nav.Link>
                                <div className="footer-icons">
                                    <a href="/">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                    <a href="/">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                    <a href="/">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                    <a href="/">
                                        <i className="bi bi-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="copyright">
                                <i className="bi bi-c-circle"></i>
                                2023 DEEP BLUE. All rights reserved.
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </footer>
    )
}
export default Footer
