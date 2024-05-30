import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Navbar";
import LoginButton from "../../components/Button";

import Img from '../../assets/imgs/Group 11.png';
import Img2 from '../../assets/imgs/Group 5.png';

import ImgPlaylist1 from '../../assets/imgs/Rectangle 14.png';
import ImgPlaylist2 from '../../assets/imgs/Rectangle 15.png';
import ImgPlaylist3 from '../../assets/imgs/Rectangle 16.png';
import ImgPlaylist4 from '../../assets/imgs/Rectangle 17.png';
import ImgPlaylist5 from '../../assets/imgs/Rectangle 18.png';
import ImgPlaylist6 from '../../assets/imgs/Rectangle 19.png';
import ImgPlaylist7 from '../../assets/imgs/Rectangle 51.png';
import ImgPlaylist8 from '../../assets/imgs/Rectangle 56.png';


export default function Home(){    

    return(
        <Container fluid className="p-0 m-0 bg-principal body">
            <Header/>
            <Row className="m-0 p-principal py-5">
                <Col className="p-0 d-flex justify-content-start">
                    <img src={Img} alt="Img" width={650}/>
                </Col>
                <Col className="pt-5">
                    <h1 className="p-0 pt-4 w-75 titulo">
                        Acompanhe suas tendências musicais e estatísticas com uma dashboard personalizada do Spotify.
                    </h1>
                    <Row className="m-0 pt-5">
                        <Col md="auto" className="p-0">
                            <LoginButton/>
                        </Col>
                        <Col md="auto" className="px-4">
                            <a href="https://open.spotify.com/download" target="_blank" rel="noopener noreferrer"><button className="btns btn-black">Baixe o app</button></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="m-0 p-principal py-5 flex-column">
                <Col>
                    <h3 className="subtitulo pt-5 mb-5">
                        Veja sua trilha sonora pessoal no Spotify:
                    </h3>
                </Col>
                <Col className="p-0">
                    <Row className="m-0 justify-content-between">
                        <Col md={3} className="p-0 px-3 pb-3 w-auto">
                            <img src={ImgPlaylist1} width={200} className="mb-2" alt="ImgPlaylist"/>
                            <h3 className="titulo-playlist">Daily Mix 1</h3>
                            <p className="p-0 subtitulo-playlist">Post Malone, Taylor Swiftie, Katty Perry...</p>
                        </Col>
                        <Col md={3} className="p-0 px-3 pb-3 w-auto">
                            <img src={ImgPlaylist2} width={200} className="mb-2" alt="ImgPlaylist"/>
                            <h3 className="titulo-playlist">Daily Mix 2</h3>
                            <p className="p-0 subtitulo-playlist">Dua Lipa, One Direction, Maroon 5...</p>
                        </Col>
                        <Col md={3} className="p-0 px-3 pb-3 w-auto">
                            <img src={ImgPlaylist3} width={200} className="mb-2" alt="ImgPlaylist"/>
                            <h3 className="titulo-playlist">Daily Mix 3</h3>
                            <p className="p-0 subtitulo-playlist">Lorde, Charli XCX, Anna Kendrick...</p>
                        </Col>
                        <Col md={3} className="p-0 px-3 pb-3 w-auto">
                            <img src={ImgPlaylist4} width={200} className="mb-2" alt="ImgPlaylist"/>
                            <h3 className="titulo-playlist">Daily Mix 4</h3>
                            <p className="p-0 subtitulo-playlist">The Wanted, One Direction, Backstreet Boys...</p>
                        </Col>
                    </Row>
                    <Row className="m-0 mb-3 justify-content-between">
                        <Col md={3} className="p-0 px-3 pb-3 w-auto">
                            <img src={ImgPlaylist5} width={200} className="mb-2" alt="ImgPlaylist"/>
                            <h3 className="titulo-playlist">Daily Mix 5</h3>
                            <p className="p-0 subtitulo-playlist">OneRepublic, Imagine Dragons, Bruce Springs...</p>
                        </Col>
                        <Col md={3} className="p-0 px-3 pb-3 w-auto">
                            <img src={ImgPlaylist6} width={200} className="mb-2" alt="ImgPlaylist"/>
                            <h3 className="titulo-playlist">Feito para você</h3>
                            <p className="p-0 subtitulo-playlist">Bruno Mars, Calvin Harris, Post Malone e mais...</p>
                        </Col>
                        <Col md={3} className="p-0 px-3 pb-3 w-auto">
                            <img src={ImgPlaylist7} width={200} className="mb-2" alt="ImgPlaylist"/>
                            <h3 className="titulo-playlist">Descobertas da semana</h3>
                            <p className="p-0 subtitulo-playlist">Sua mixtape semanal cheia de novas descobertas...</p>
                        </Col>
                        <Col md={3} className="p-0 px-3 pb-3 w-auto">
                            <img src={ImgPlaylist8} width={200} className="mb-2" alt="ImgPlaylist"/>
                            <h3 className="titulo-playlist">Radar de Novidades</h3>
                            <p className="p-0 subtitulo-playlist">Confira os lançamentos dos artistas que você segue...</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="m-0 p-principal py-4">
                <Col className="d-flex justify-content-center">
                    <img src={Img2} alt="Img" width={650}/>
                </Col>
                <Col className="pt-5">
                    <h1 className="p-0 pt-4 w-75 titulo">
                        Controle sua experiência musical com nosso dashboard intuitivo do Spotify.
                    </h1>
                    <Row className="m-0 pt-5">
                        <Col md="auto" className="p-0">
                            <LoginButton/>
                        </Col>
                        <Col md="auto" className="px-4">
                            <a href="https://open.spotify.com/download" target="_blank" rel="noopener noreferrer"><button className="btns btn-black">Baixe o app</button></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
