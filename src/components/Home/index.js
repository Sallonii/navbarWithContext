import './index.css'

import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? 'dark-home-bg' : 'light-home-bg'
      const textColor = isDarkTheme ? 'light-text-color' : 'dark-text-color'
      return (
        <div className={`home-container ${bgColor}`}>
          {isDarkTheme ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              alt="home"
              className="home-image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              alt="home"
              className="home-image"
            />
          )}
          <h1 className={`${textColor}`}>Home</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
