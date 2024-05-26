const NavBar = () => {
    const styles = {
        position: 'fixed',
        top: 0,
        zIndex: 1000,
        background: 'linear-gradient(to bottom, rgba(10, 10, 10, 1), rgba(10, 10, 10, 0))',
        color: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15vh',
        width: '100%',
        padding: '0 5%',
    };

    const logoContainer = {
        display: 'flex',
        alignItems: 'center',
    };

    const logo = {
        filter: 'invert(100%)',
        padding: '5%',
        height: '65%',
        width: '7%',
    };

    const navLinks = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        margin: '0 20%',
        gap: '30%', // Espacio entre los enlaces
    };

    const iconStyles = {
        color: 'white',
        marginLeft: '10px',
        marginRight: '10px',
        textDecoration: 'none',
        fontSize: '1.5em',
    };

    const titulos = {
        fontFamily: 'Century Gothic, sans-serif',
        fontSize: '1.5em',
        fontWeight: 'bold',
        margin: '0 10px',
        color: 'white',
        textDecoration: 'none',
    };

    return (
        <nav style={styles}>

            <div style={logoContainer}>
               
                <a href="https://www.instagram.com/championsleague" style={iconStyles}>
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/uefachampionsleague" style={iconStyles}>
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCpcTrCXblq78GZrTUTLWeBw" style={iconStyles}>
                    <i className="fab fa-youtube"></i>
                </a>
            </div>

            <div style={navLinks}>

                <a href='index.html' style={titulos}>HOME</a>
                <a href='champions/champions.html' style={titulos}>CHAMPIONS</a>
                <a href='partidos/partidos.html' style={titulos}>PARTIDOS</a>
                <a href='futbol/futbol.html' style={titulos}>FUTBOL</a>
            </div>
        </nav>
    );
}

const VIDEO = () => {
    return (
        <main>
            <video width="100%" height="100%" autoPlay loop playsInline volume={1}>
                <source src="multimedia/championsalb.mp4" type="video/mp4" />
            </video>
        </main>
    );
}

const Footer = () => {
    const styles = {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#101010',
        color: 'white',
        textAlign: 'center',
        padding: '1em 0',
        fontFamily: 'Century Gothic, sans-serif'
    };

    return (
        <footer style={styles}>
            <p>&copy; 2024 Derechos de Autor: Diederich Solis</p>
        </footer>
    );
}

const App = () => {
    const styles = {
        backgroundColor: 'rgba(30, 30, 30, 1)',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'block',
        position: 'relative',
        margin: 0,
        padding: 0,
        paddingTop: '15vh', // Add padding to prevent content from being hidden behind the fixed navbar
    };
    return (
        <div style={styles}>
            <NavBar />
            <VIDEO />
            <Footer />
        </div>
    );
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
