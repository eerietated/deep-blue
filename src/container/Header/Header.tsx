import { Container, Navbar } from 'react-bootstrap'
import './Header.scss'
import Menu from 'components/Menu/Menu'
import Head from 'components/Head/Head'

type Props = {}
const Header = (props: Props) => {
    return (
        <>
            {['lg'].map((expand) => (
                <Navbar collapseOnSelect key={expand} expand={expand}>
                    <Container>
                        <Head></Head>
                        <div className="nav-line">
                            <div className="split"></div>
                            <div className="sub-text">
                                Unveiling the Supernatural
                            </div>
                            <div className="split"></div>
                        </div>
                        <Menu></Menu>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}
export default Header
