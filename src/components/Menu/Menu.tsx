import { Nav, Navbar, Offcanvas, NavDropdown, Dropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <Navbar.Toggle
                aria-controls={'offcanvasNavbar-expand'}
            ></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Offcanvas
                    id={'offcanvasNavbar-expand'}
                    aria-labelledby={'offcanvasNavbarLabel-expand'}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={'offcanvasNavbarLabel-expand'}>
                            DEEP BLUE
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="me-auto">
                            <Nav.Link to="/" as={NavLink}>
                                Home
                            </Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                >
                                    Category
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <NavDropdown.Item>
                                        <Nav.Link
                                            to="/category/Haunted Places"
                                            as={NavLink}
                                            className="dropdown-link"
                                        >
                                            Haunted Places
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Nav.Link
                                            to="/category/Urban Legends"
                                            as={NavLink}
                                            className="dropdown-link"
                                        >
                                            Urban Legends
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Nav.Link
                                            to="/category/Sightings"
                                            as={NavLink}
                                            className="dropdown-link"
                                        >
                                            Sightings
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Nav.Link to="/about" as={NavLink}>
                                About Us
                            </Nav.Link>
                            <Nav.Link to="/favorite" as={NavLink}>
                                Favorite
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar.Collapse>
        </>
    )
}
export default Menu
