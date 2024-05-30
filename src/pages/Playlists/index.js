import { Col, Container, Row } from "react-bootstrap";
import Sidebar from '../../components/Sidebar/index'; 
import Header from '../../components/Navbar/index';

import { useContext } from "react";
import { SpotifyContext } from "../../Contexts/spotify";


export default function Playlists(){

    const { playlists, loading } = useContext(SpotifyContext);

    if(loading){
        return(
            <Container fluid className="p-0 m-0 bg-principal">
            <Row className='m-0 w-100'>
                <Sidebar/>
                <Col className='p-0 w-100 body'>
                    <Col className='p-principal mb-5'>
                        <h2 className='titulo-dash'>Carregando Playlists...</h2>
                    </Col>
                </Col>
            </Row>
        </Container>
        )
      }

    return(
        <Container fluid className="p-0 m-0 bg-principal">
            <Row className='m-0 w-100'>
                <Sidebar/>
                <Col className='p-0 w-100 body'>
                    <Header/>
                    <Col className='p-principal mb-5'>
                        <h2 className='titulo-dash'>Minhas Playlists:</h2> 
                    </Col>
                    <Row className="m-0 p-principal justify-content-between">
                        {playlists.map((Playlist, index) => {
                            return(
                                <Col key={index} md={3} className="p-0 px-3 pb-3 w-auto">
                                    <img src={Playlist.images[0].url} width={200} className="mb-2" alt="ImgPlaylist"/>
                                    <h3 className="titulo-playlist">{Playlist.name}</h3>
                                    <p className="p-0 subtitulo-playlist">{Playlist.owner.display_name}</p>
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
