const { useState, useEffect } = React;

const NavBar = () => {
    const styles = {
        position: 'fixed',
        top: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '10vh',
        width: '100%',
        zIndex: 1000,
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

    const iconStyles = {
        color: 'white',
        marginLeft: '10px',
        marginRight: '10px',
        textDecoration: 'none',
        fontSize: '1.5em',
    };

    const navLinks = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
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
                <img src='../multimedia/champions.png' alt="logo" width="40" height="40" style={logo} />
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
                <a href='../index.html' style={titulos}>HOME</a>
                <a href='../champions/champions.html' style={titulos}>CHAMPIONS</a>
                <a href='../partidos/partidos.html' style={titulos}>SEMIFINAL</a>
            </div>
        </nav>
    );
};

const Footer = () => {
    const styles = {
        position: 'fixed',
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '5vh',
        width: '100%',
        zIndex: 1000,
    };

    return (
        <footer style={styles}>
            <p>&copy; 2024 - Todos los derechos reservados Autor: Diederich Solis</p>
        </footer>
    );
};

const fetchData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "23d612ab5f12c6e3d5a4c0b644ae8ad9");
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        const response = await fetch("https://v3.football.api-sports.io/standings?league=2&season=2023", requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result.response[0].league.standings[0];
    } catch (error) {
        console.log('Error:', error);
        return [];
    }
};

const Standings = () => {
    const [standings, setStandings] = useState([]);

    useEffect(() => {
        const getStandings = async () => {
            const data = await fetchData();
            setStandings(data);
        };

        getStandings();
    }, []);

    const cardStyles = {
        maxWidth: '600px',
        margin: 'auto', // Centrar horizontalmente
        marginTop: '20px', // Espacio arriba de la card
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
    };

    const titleStyles = {
        textAlign: 'center',
        fontSize: '1.5em',
        fontWeight: 'bold',
        marginBottom: '20px',
    };

    return (
        <div style={cardStyles}>
             <h1 style={titleStyles}>tables</h1>
            <h1 style={titleStyles}>Champions League</h1>
            <h1 style={titleStyles}>Season 2023</h1>
            {standings.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Team</th>
                            <th>Points</th>
                            <th>Goals Diff</th>
                            <th>Form</th>
                        </tr>
                    </thead>
                    <tbody>
                        {standings.map((team) => (
                            <tr key={team.team.id}>
                                <td>{team.rank}</td>
                                <td>
                                    <img src={team.team.logo} alt={team.team.name} width="20" />
                                    {team.team.name}
                                </td>
                                <td>{team.points}</td>
                                <td>{team.goalsDiff}</td>
                                <td>{team.form}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};


const App = () => {
    const styles = {
        backgroundColor: 'white',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'block',
        position: 'relative',
        margin: 0,
        padding: 0,
    };

    return (
        <main style={styles}>
            <NavBar />
            <Standings />
            <Footer />
        </main>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
