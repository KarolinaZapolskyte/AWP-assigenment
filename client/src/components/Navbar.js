import "../css/style.css";
import { Link } from "@reach/router";

function Navbar() {

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-container">
            <a href="/" className="logo">
              <div className="logo-img">
                <p>Hidden text</p>
              </div>
              <p className="logo-text">Stack <span className="bold">Overflow</span></p>
            </a>
            <a href="https://stackoverflow.com/company" className="nav-links">About</a>
            <a href="https://stackoverflow.com/teams" className="nav-links">For team</a>
            <div className="search-bar">
              <form>
                <div className="relative">
                  <input type="text" placeholder="Search..." />
                  <svg aria-hidden="true" className="icon-search" width="18" height="18" viewBox="0 0 18 18">
                    <path d="M18 16.5l-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z"></path>
                  </svg>
                </div>
              </form>
            </div>
            <div className="nav-buttons">
              <button className="blue">
                <Link to="/ask-question">Ask Question</Link>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
