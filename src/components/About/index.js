import './index.css'

import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? 'dark-home-bg' : 'light-home-bg'
      const textColor = isDarkTheme ? 'light-text-color' : 'dark-text-color'
      return (
        <>
          <Navbar />
          <div className={`about-container ${bgColor}`}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="about-image"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="about-image"
              />
            )}
            <h1 className={`${textColor}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
