import { Col, Container } from "react-bootstrap";
import Logo from '../../assets/imgs/Group 7.png';
import { Link } from "react-router-dom";

export default function Sidebar(){

    return(
        <Container fluid className="p-0 m-0 sidebar">
            <Col className="d-flex justify-content-center pt-4 pb-5">
                <img src={Logo} alt="logo" width={220}/>
            </Col>
            <Col>
                <Link to='/dashboard'><button className="w-100 btns-sidebar d-flex">Estatisticas</button></Link>
            </Col>
            <Col>
                <Link to='/dashboard/playlists'><button className="w-100 btns-sidebar d-flex">Minhas Playlists</button></Link>
            </Col>
            <Col>
                <Link to='/dashboard/artistas'><button className="w-100 btns-sidebar d-flex">Top Artistas</button></Link>
            </Col>
            <Col>
                <Link to='/dashboard/mais-tocados'><button className="w-100 btns-sidebar d-flex">Mais tocados</button></Link>
            </Col>
        </Container>
    )
}