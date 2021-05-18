import React from "react";
import "./Ham-menu.css";

class Navbar extends React.Component {
    state = {
        width: 0,
        displayMenu: undefined,
    };

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth });
    };

    handleMenu = () => {
        this.setState({ displayMenu: !this.state.displayMenu });
    };

    displayFullMenu = () => {
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
    };

    displayBurgerMenu = () => {
        return (
            <React.Fragment>
                <div className="navbar-logo-container">
                    <img className="navbar-logo" src="logo.png" alt="logo" />
                    <div className="navbar-app-name">Lowympact</div>
                </div>
                <div className="burger-icon" onClick={this.handleMenu}>
                    <div id="nav-icon3" className={this.state.displayMenu ? "open" : ""}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div
                    className={
                        this.state.displayMenu === undefined
                            ? "hidden"
                            : this.state.displayMenu
                            ? "sliding-menu-container menu-visible"
                            : "sliding-menu-container menu-hidden"
                    }
                >
                    <div className="sliding-menu-items">
                        <button>Le projet</button>
                        <button>L'équipe</button>
                        <button className="button-blue">Installer</button>
                    </div>
                    <div className="sliding-menu-logo">
                        <img className="navbar-logo" src="logo.png" alt="logo" />
                        <div className="navbar-app-name">Lowympact</div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    render = () => {
        if (this.state.width < 900) {
            return <React.Fragment>{this.displayBurgerMenu()}</React.Fragment>;
        } else {
            return <React.Fragment>{this.displayFullMenu()}</React.Fragment>;
        }
    };
}

export default Navbar;
