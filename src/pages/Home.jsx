import '../styles/Home.css'
import { GitHub, LinkedIn, Email } from '@mui/icons-material'
import Projects from './Projects'

import {BackendSkills, FrontendSkills, Languages} from '../helpers/SkillList'


const Home = () => {
    return <div className='home'>
        <div className='about'>
            <h2>Hi, My Name is Saikat</h2>
            <div className="prompt">
                <p>Intermediate Full-stack web developer and post graduate student in Master of Computer Application program. Skilled in languages such as JavaScript, Python, C++. I am passionate about developing innovative web solutions and constantly strive to stay up-to-date with the latest industry trends. My background in computer science and passion for problem-solving, particularly in data structures and algorithms, enables me to approach projects with an unique perspective.</p>
                <p>Let's connect and build something great together!</p>
                <a href="https://www.linkedin.com/in/saikag347/" target='_blank'>
                    <LinkedIn />
                </a>
                <a href="mailto: saikat.g347@gmail.com">
                    <Email />
                </a>
                <a href='https://github.com/saikatg347' target='_blank'>
                    <GitHub />
                </a>
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h3>Languages</h3>
                    <span className='skill-container'>
                        {
                            Languages.map((s, ind) => (
                                <span key={ind} className="skill-icon">
                                    <img src={s.icon}/>
                                </span>
                            ))
                        }
                    </span>
                </li>
            </ol>
            <ol className='list'>
                <li className='item'>
                    <h3>Frontend</h3>
                    <span className='skill-container'>
                        {
                            FrontendSkills.map((s, ind) => (
                                <span key={ind} className="skill-icon">
                                    <img src={s.icon}/>
                                </span>
                            ))
                        }
                    </span>
                </li>
            </ol>
            <ol className='list'>
                <li className='item'>
                    <h3>Backend</h3>
                    <span className='skill-container'>
                        {
                            BackendSkills.map((s, ind) => (
                                <span key={ind} className="skill-icon-backend">
                                    <img src={s.icon}/>
                                </span>
                            ))
                        }
                    </span>
                </li>
            </ol>
        </div>
    </div>
}

export default Home

