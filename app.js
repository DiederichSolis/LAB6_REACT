const NavBar = () => {
    const styles = {
        position: 'fixed', // Fijar la posición de la barra de navegación
        top: 0, // Colocarla en la parte superior
        zIndex: 1000, // Asegurar que esté por encima de otros elementos
        background: 'linear-gradient(to bottom, rgba(10, 10, 10, 1), rgba(10, 10, 10, 0))', // color de fondo
        color: 'black', // color de texto
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0%',
        alignItems: 'center',
        height: '15vh',
        width: '100%',
    };

    const logo = {
        filter: 'invert(100%)',
        padding: '5%',
        height: '65%',
        width: '7%',
    };

    const titulos = {
        fontFamily: 'Century Gothic, sans-serif',
        fontSize: '1.5em', 
        fontWeight: 'bold',
        margin: '0',
        padding: '9%',
        color: 'white',
        textDecoration: 'none', 
    };

    const titulos1 = {
        fontFamily: 'Century Gothic, sans-serif',
        fontSize: '1.5em', 
        fontWeight: 'bold',
        margin: '0',
        padding: '15%',
        color: 'white',
        textDecoration: 'none', 
    };
    
    return (
        <nav style={styles}>
            <img src='multimedia/champions.png' alt="logo" width="40" height="40" style={logo} />
            <a href='index.html' style={titulos}>HOME</a>
            <a href='champions/champions.html' style={titulos}>CHAMPIONS</a>
            <a href='partidos/partidos.html' style={titulos1}>SEMIFINAL</a>
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

const App = () => {
    const styles = {
        backgroundColor: 'rgba(30, 30, 30, 1)', // color de fondo
        overflow: 'hidden', // ocultar el desbordamiento del contenido
        minHeight: '100vh', // altura mínima para cubrir toda la pantalla
        display: 'block',
        position : 'relative',
        margin: 0,
        padding: 0,
    };
    return (
        <main style={styles}>
            <NavBar />
            <VIDEO />
        </main>
    );
}


const root = document.getElementById('root');
ReactDOM.render(<App />, root);