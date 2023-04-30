// CSS
import { Link } from 'react-router-dom'
import style from './About.module.css'

const About = () => {
  return (
    <div className={style.about}>
        <h2>Sobre o mini <span>Blog</span></h2>
        <p>Este projeto consiste em um Blog feito com React no front-end e Firebase no back-end</p>
        <Link to='/posts/create' className='btn'>
          Criar Post
        </Link>
    </div>
  )
}

export default About