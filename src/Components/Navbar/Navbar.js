function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar-logo-container">
                <img className="navbar-logo" src="logo.png" alt="logo" />
                <div className="navbar-app-name">Lowympact</div>
            </div>
            <div className="navbar-link-container">
                <button>Le projet</button>
                <button>L'équipe</button>
                <button className="button-blue">Installer</button>
            </div>
        </div>
    );
}

export default Navbar;
