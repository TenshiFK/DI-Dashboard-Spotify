import React, { useContext } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from '../../components/Sidebar/index'; 
import Header from '../../components/Navbar/index';
import CicleChart from '../../components/Charts/PieChart';
import BarCharts from '../../components/Charts/BarChart';
import LineCharts from '../../components/Charts/LineChart';
import { SpotifyContext } from '../../Contexts/spotify';

export default function Estatisticas() {
    const { loading } = useContext(SpotifyContext);

    if(loading){
        return(
        <Container fluid className="p-0 m-0 bg-principal">
            <Row className='m-0 w-100'>
                <Sidebar/>
                <Col className='p-0 w-100 body'>
                    <Col className='p-principal'>
                        <h2 className='titulo-dash'>Carregando dashboard...</h2>
                    </Col>
                </Col>
            </Row>
        </Container>
        )
      }

    return (
        <Container fluid className="p-0 m-0 bg-principal">
            <Row className='m-0 w-100'>
                <Sidebar/>
                <Col className='p-0 w-100 body'>
                    <Header/>
                    <Col className='p-principal'>
                        <h2 className='titulo-dash mb-5'>Meus gêneros mais tocados:</h2>
                        <Col className='d-flex justify-content-center mb-5 pb-3'>
                            <CicleChart/>
                        </Col>
                        <h2 className='titulo-dash'>Meus artistas ouvidos com maior popularidade:</h2>
                        <Col className='d-flex justify-content-center mb-5 pb-3 p-principal mx-5'>
                            <BarCharts/>
                        </Col>
                        <h2 className='titulo-dash'>Minhas músicas ouvidas com maior popularidade:</h2>  
                        <Col className='d-flex justify-content-center mb-5 pb-5 p-principal mx-5'>
                            <LineCharts/>
                        </Col>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}
