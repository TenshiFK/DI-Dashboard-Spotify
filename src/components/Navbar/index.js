import { Container, Image, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../../assets/imgs/Group 6.png'
import { useContext } from "react";
import { AuthContext } from "../../Contexts/auth";
import LoginButton from '../Button/index';
import { SpotifyContext } from "../../Contexts/spotify";
import Placeholder from '../../assets/imgs/placeholder.jpg';


export default function Header(){

    const { user, loading } = useContext(SpotifyContext);
    const { logout, signed } = useContext(AuthContext);

    if(loading){
        return(
        <Navbar className="bg-principal">
            <Container fluid className="py-4 p-principal">

            </Container>
        </Navbar>
        )
      }

    return(
        <Navbar collapseOnSelect expand="md" className="bg-principal">
            <Container fluid className="py-4 p-principal">
                <Navbar.Brand>
                    <Link to='/'>
                        {!signed ? <img src={Logo} alt="Logo" width={260}/> : <div></div>}
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle style={{ backgroundColor: '#1ED760' }} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    {!signed ? 
                    <LoginButton/>
                    :
                    <div className="d-flex">
                        <button className="area-user btn-green mx-3" onClick={logout} disabled>
                            <Image src={!user.display_name ? Placeholder : user.images[0]?.url} width={30} roundedCircle/>
                            <span className="px-2">
                                {user.display_name}
                            </span>
                        </button>
                        <button id="logout" className="btns btn-green" onClick={logout}>Sair</button>
                    </div>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}