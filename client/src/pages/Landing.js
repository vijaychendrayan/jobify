import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'
import { Link } from 'react-router-dom'

export const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1> job<span>Tracking</span>App</h1>
          <p>I'm baby la croix deep v stumptown four loko. Truffaut lomo jianbing, flannel master cleanse lo-fi photo booth ramps live-edge intelligentsia before they sold out godard bicycle rights. Live-edge semiotics</p>
          <Link to='/register' className='btn btn-hero'>Login/Register</Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}



export default Landing