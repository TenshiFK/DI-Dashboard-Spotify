import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Estatisticas from "../pages/Estatisticas";
import MaisTocados from "../pages/MaisTocados";
import Playlists from "../pages/Playlists";
import Artistas from "../pages/Artistas";
import Private from "./Private";

export default function RoutesApp(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Private><Estatisticas/></Private>}/>
                <Route path="/dashboard/artistas" element={<Private><Artistas/></Private>}/>
                <Route path="/dashboard/mais-tocados" element={<Private><MaisTocados/></Private>}/>
                <Route path="/dashboard/playlists" element={<Private><Playlists/></Private>}/>
            </Routes>
        </BrowserRouter>
    )
}