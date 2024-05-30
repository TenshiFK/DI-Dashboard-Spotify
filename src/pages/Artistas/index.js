import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Navbar";
import { useContext, useState } from "react";
import { SpotifyContext } from "../../Contexts/spotify";


export default function Artistas(){

    const { artistsShortTerm, artistsMediumTerm, artistsLongTerm, loading } = useContext(SpotifyContext);
    const [selectedButton, setSelectedButton] = useState('thisMonth');
    const [displayedArtists, setDisplayedArtists] = useState(artistsShortTerm);

    const handleButtonClick = (buttonName) => {
      setSelectedButton(buttonName);
      switch (buttonName) {
        case 'thisMonth':
            setDisplayedArtists(artistsShortTerm);
            break;
        case 'thisYear':
            setDisplayedArtists(artistsMediumTerm);
            break;
        case 'allPeriods':
            setDisplayedArtists(artistsLongTerm);
            break;
        default:
            setDisplayedArtists(artistsShortTerm);
            break;
    }
    };

    if(loading){
        return(
            <Container fluid className="p-0 m-0 bg-principal">
            <Row className='m-0 w-100'>
                <Sidebar/>
                <Col className='p-0 w-100 body'>
                    <Col className='p-principal mb-5'>
                        <h2 className='titulo-dash'>Carregando Artistas...</h2>
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
                        <h2 className='titulo-dash'>Principais Artistas</h2>
                    </Col>
                    <Col className="p-principal d-flex mb-5">
                        <button 
                        className={`btn-artistas ${selectedButton === 'thisMonth'? 'selected' : ''}`} 
                        onClick={() => handleButtonClick('thisMonth')}
                        >
                            Este Mês
                        </button>
                        <button 
                        className={`btn-artistas mx-3 ${selectedButton === 'thisYear'? 'selected' : ''}`} 
                        onClick={() => handleButtonClick('thisYear')}
                        >
                            Este Ano
                        </button>
                        <button 
                        className={`btn-artistas ${selectedButton === 'allPeriods'? 'selected' : ''}`} 
                        onClick={() => handleButtonClick('allPeriods')}
                        >
                            Todos os Períodos
                        </button>
                    </Col>
                    <Col className="p-principal mb-5">
                        {displayedArtists.map((Artista, index) => {
                            const numeroArtista = String(index + 1).padStart(2, '0');

                            return(
                                <Col key={Artista.id} className="d-flex align-items-center area-musico mb-3">
                                    <Col className="p-0 d-flex align-items-center">
                                        <h4 className="m-0 id-artista mx-2">
                                        {numeroArtista}.
                                        </h4>
                                        <img src={Artista.images[0].url} width={50} className="mx-3" alt="ImgArtista"/>
                                        <h4 className="m-0 titulo-artista">
                                            {Artista.name}
                                        </h4>
                                    </Col>
                                    <Col className="d-flex p-0 justify-content-end">
                                        <p className="m-0 mx-5 px-5 subtitulo-artista text-capitalize">{Artista.genres[0]}</p>
                                    </Col>
                                </Col>
                            )
                        })}
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}
