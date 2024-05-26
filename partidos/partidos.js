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

const Loading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1>Loading...</h1>
        </div>
    );
};


const PostsLoader = () => {
    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null); // Estado para manejar errores

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://3.129.191.211/api/22952/posts');

                if (!response.ok) {
                    // Si la respuesta no es 2xx, considerarlo como un error
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();

                // Aquí puedes agregar validaciones adicionales sobre el formato de los datos si es necesario
                if (!Array.isArray(data)) {
                    // Suponiendo que esperas un array de posts, si no lo es, lanza un error
                    throw new Error("Formato de datos incorrecto");
                }

                setPosts(data);
            } catch (error) {
                // Manejar cualquier error que ocurra durante la fetch o el procesamiento de los datos
                console.error('Error al cargar los posts:', error);
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <h1>Error al cargar los posts</h1>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <h1>No hay posts disponibles</h1>
            </div>
        );
    }

    return (
        <>
            {posts.map(post => (
                <Card key={post.id} post={post} />
            ))}
        </>
    );
};

const Card = ({ post }) => {
    const [isColumnLayout, setIsColumnLayout] = React.useState(false);

    const cardStyles = {
        boxSizing: 'border-box',
        padding: '1%',
        margin: '5rem 0 0 0',
        transition: '0.3s',
        backgroundColor: 'rgba(0, 48, 73,0.85)',
        display: 'flex',
        borderRadius: '58px',
        alignItems: isColumnLayout ? 'center' : 'center',
        flexDirection: isColumnLayout ? 'column' : 'row', 
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

    const handleResize = () => {
        setIsColumnLayout(window.innerWidth <= 768); 
    };

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={containerStyles}>
            <div style={cardStyle1}>
                <img src={`${post.imagen_base64}`} alt={post.Equipo_local} style={imageStyles} />
            </div>
            <div style={cardStyles}>
            <div style={{ flex: '1' }}> {/* Div para alinear texto a la derecha */}
            <h2 style={TitleStyles}>{post.Fase_champions} </h2>
                <h3 style={TitleStyles}>{post.Equipo_visitante + " vs " + post.Equipo_local} </h3>
                <p style={textsStyles}>{"Goles: "+post.Goles_Visitante+" - "+post.Goles_Local}</p>
                <p style={textsStyles}>{"Fecha: "+post.Fecha_partido}</p>
                <p style={textsStyles}>{"Pais: "+post.Pais}</p>
                <p style={textsStyles}>{"Cuidad: "+post.Ciudad}</p>
            </div>
            </div>
        </div>

    );
};



Card.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        Ciudad: PropTypes.string,
        Pais: PropTypes.string,
        Nombre_jugador: PropTypes.string,
        Edad_jugador: PropTypes.number,
        Posicion_jugador: PropTypes.string,
        Equipo_local: PropTypes.string,
        Equipo_visitante: PropTypes.string,
        Goles_Local: PropTypes.number,
        Goles_Visitante: PropTypes.number,
        Fecha_partido: PropTypes.string,
        imagen_base64: PropTypes.string,
        Fase_champions: PropTypes.string,

    }),
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


const App = () => {


    const styles = {
        backgroundColor: 'White', // color de fondo
        overflow: 'hidden', // ocultar el desbordamiento del contenido
        minHeight: '100vh', // altura mínima para cubrir toda la pantalla
        display: 'block',
        position : 'relative',
        margin: 0,
        padding: 0,
        paddingTop: '15vh',
    };
    return (
        <main style={styles}>
            <NavBar />
            <React.Suspense fallback={<Loading />}>
                <PostsLoader />
            </React.Suspense>
            <Footer />
        </main>
    );
}


const root = document.getElementById('root');
ReactDOM.render(<App />, root);