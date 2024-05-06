import './index.css'

import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? 'dark-home-bg' : 'light-home-bg'
      const textColor = isDarkTheme ? 'light-text-color' : 'dark-text-color'
      return (
        <div className={`not-found-container ${bgColor}`}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
            className="not-found-image"
          />
          <h1 className={textColor}>Lost Your Way?</h1>
          <p className={textColor}>
            We cannot seem to find the page you are looking for.
          </p>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
