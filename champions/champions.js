const NavBar = () => {
    const styles = {
        position: 'fixed', // Fijar la posición de la barra de navegación
        top: 0, // Colocarla en la parte superior  
        background: 'rgba(0, 0, 0, 0.5)', // Color de fondo semi-transparente
        backdropFilter: 'blur(10px)', // Aplicar difuminado
        color: 'white', // color de texto
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0%',
        alignItems: 'center',
        height: '10vh',
        width: '100%',
        zIndex: 1000, // Asegurar que esté por encima de otros elementos
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
            <img src='../multimedia/champions.png' alt="logo" width="40" height="40" style={logo} />
            <a href='../index.html' style={titulos}>HOME</a>
            <a href='../champions/champions.html' style={titulos}>CHAMPIONS</a>
            <a href='../partidos/partidos.html' style={titulos1}>SEMIFINAL</a>
        </nav>
    );
}

    const cardStyles = {
        boxSizing: 'border-box',
        padding: '1%',
        margin: '5rem 0 0 0',
        transition: '0.3s',
        backgroundColor: 'rgba(0, 48, 73,0.85)',
        display: 'flex',
        borderRadius: '58px',
        gap: '0.5rem',
        width: '50%', // Ajusta el ancho al 50% del contenedor padre
        height: 'auto', // Ajusta el alto automáticamente al contenido
        maxWidth: '600px', // Opcional: define un ancho máximo
        maxHeight: '400px' // Opcional: define un alto máximo
    };
    const cardStyle1 = {
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '2%',
        margin: '5rem 0 0 0',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        borderRadius: '58px',
        backgroundColor: 'rgba(0, 48, 73,0.85)',
        display: 'flex',
        gap: '1rem',
        width: '50%', // Ajusta el ancho al 50% del contenedor padre
        height: 'auto', // Ajusta el alto automáticamente al contenido
        maxWidth: '600px', // Opcional: define un ancho máximo
        maxHeight: '400px', // Opcional: define un alto máximo
        justifyContent: 'center'
    };
    const containerStyles = {
        display: 'flex', // Configura el contenedor como un flexbox
        flexWrap: 'wrap', // Permite que los elementos se envuelvan si es necesario
        gap: '1rem', // Espacio entre las cards
        justifyContent: 'center', // Opcional: centra las cards horizontalmente
        alignItems: 'center', // Opcional: alinea las cards verticalmente
        marginTop: '2rem' // Espacio superior del contenedor
    };
    
    
    const TitleStyles = {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Century Gothic, sans-serif',
        flex: '1',
    };

    const textsStyles = {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Century Gothic, sans-serif',
        opacity: '0.8',
        flex: '1',
    };

    const imageStyles = {
        maxHeight: '40%',
        maxWidth: '40%',
        borderRadius: '5px',
        flex: '1',
        justifyContent: 'center',
        alignItems: 'center',
    };




const Footer = () => {
    const styles = {
        position: 'fixed', // Fijar la posición del footer
        bottom: 0, // Colocarla en la parte inferior
        background: 'rgba(0, 0, 0, 0.5)', // Color de fondo semi-transparente
        color: 'white', // color de texto
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0%',
        height: '5vh',
        width: '100%',
        zIndex: 1000, // Asegurar que esté por encima de otros elementos
    };

    return (
        <footer style={styles}>
            <p>&copy; 2024 - Todos los derechos reservados Autor: Diederich Solis</p>
        </footer>
    );
}

const VIEW = () => {
    return (
        <main>
            <img src='https://img.fcbayern.com/image/upload/t_cms-4x3-seo/v1604104556/cms/public/images/fcbayern-com/homepage/club/erfolge/champions-league/2020_header.jpg' alt="video" width="100%" height="100%" />
            <img src='https://cloudfront-us-east-2.images.arcpublishing.com/reuters/GVKRY6LADFJUDB75BOE55MDS44.jpg' alt="video" width="100%" height="100%" />
            <img src='https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/lxe9mu744i9mxuzt1b36' alt="video" width="100%" height="100%" />
            <img src='https://assets.goal.com/images/v3/blt146f2815f515a556/GettyImages-2147034939.jpg?auto=webp&format=pjpg&width=3840&quality=60' alt="video" width="100%" height="100%" />
          
       
        </main>

    );
    }

const App = () => {


    const styles = {
        backgroundColor: 'White', // color de fondo
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
            <VIEW />
            <Footer />
        </main>
    );
}


const root = document.getElementById('root');
ReactDOM.render(<App />, root);





