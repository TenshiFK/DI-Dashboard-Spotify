import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Navbar";
import { useContext, useState } from "react";
import { SpotifyContext } from "../../Contexts/spotify";


export default function MaisTocados(){
    const { loading, tracksShortTerm, tracksMediumTerm, tracksLongTerm } = useContext(SpotifyContext);

    const [selectedButton, setSelectedButton] = useState('thisMonth');
    const [displayedTracks, setDisplayedTracks] = useState(tracksShortTerm);

    const handleButtonClick = (buttonName) => {
      setSelectedButton(buttonName);
      switch (buttonName) {
        case 'thisMonth':
            setDisplayedTracks(tracksShortTerm);
            break;
        case 'thisYear':
            setDisplayedTracks(tracksMediumTerm);
            break;
        case 'allPeriods':
            setDisplayedTracks(tracksLongTerm);
            break;
        default:
            setDisplayedTracks(tracksShortTerm);
            break;
    }
    };

    function formatDuration(duration_ms) {
        const minutes = Math.floor(duration_ms / 60000);
        const seconds = ((duration_ms % 60000) / 1000).toFixed(0);

        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedMinutes}:${formattedSeconds}`;
    }

    function formatArtists(artists) {
        let limitedArtists = artists.slice(0, 3).map(artist => artist.name).join(', ');

        if (artists.length > 1) {
            limitedArtists += ',...';
        }

        return limitedArtists;
    }

    if(loading){
        return(
            <Container fluid className="p-0 m-0 bg-principal">
            <Row className='m-0 w-100'>
                <Sidebar/>
                <Col className='p-0 w-100 body'>
                    <Col className='p-principal mb-5'>
                        <h2 className='titulo-dash'>Carregando Músicas...</h2>
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
                        <h2 className='titulo-dash'>As mais tocadas recentemente</h2>
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
                        {displayedTracks.map((Track, index) => {
                            const numeroMusica = String(index + 1).padStart(2, '0');
                           
                            return(
                                <Col key={Track.id} className="d-flex align-items-center area-musico mb-3">
                                    <Col className="p-0 d-flex align-items-center">
                                        <h4 className="m-0 id-artista mx-2">
                                            {numeroMusica}.
                                        </h4>
                                        <img src={Track.album.images[0].url} width={50} className="mx-3" alt="ImgMusica"/>
                                        <h4 className="m-0 titulo-artista">
                                            {Track.name}
                                        </h4>
                                    </Col>
                                    <Col className="d-flex p-0 justify-content-center">
                                        <h4 className="m-0 subtitulo-artista">
                                            {formatArtists(Track.artists)}
                                        </h4>
                                    </Col>
                                    <Col className="d-flex p-0 justify-content-end">
                                        <p className="m-0 mx-5 px-5 subtitulo-artista">{formatDuration(Track.duration_ms)}</p>
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
