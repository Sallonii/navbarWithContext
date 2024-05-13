import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const changeThemeButton = () => {
        toggleTheme()
      }
      const bgColor = isDarkTheme ? 'dark-bg' : 'light-bg'
      const textColor = isDarkTheme ? 'light-text-color' : 'dark-text-color'
      return (
        <div className={`header-container ${bgColor}`}>
          <Link to="/">
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="theme"
                className="logo"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="theme"
                className="logo"
              />
            )}
          </Link>
          <ul className="tab-container">
            <Link to="/" className="nav-item">
              <li className={`li ${textColor}`}>Home</li>
            </Link>
            <Link to="/about" className="nav-item">
              <li className={`li ${textColor}`}>About</li>
            </Link>
          </ul>
          {isDarkTheme ? (
            <button type="button" className="theme-button" data-testid="theme">
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="website logo"
                className="theme"
                onClick={changeThemeButton}
              />
            </button>
          ) : (
            <button type="button" className="theme-button" data-testid="theme">
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="website logo"
                className="theme"
                onClick={changeThemeButton}
              />
            </button>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
