import '../styles/Home.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GithubIcon from '@mui/icons-material/Github'

const Home = () => {
    return <div className='home'>
        <div className='about'>
            <h2>Hi, My Name is Saikat</h2>
            <div className="prompt">
                <p>A software developer with a passion for learning and creating.</p>
                <LinkedInIcon />
                <EmailIcon />
                <GithubIcon />
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Frontend</h2>
                    <span>
                        ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
                        Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
                    </span>
                </li>
            </ol>
            <ol className='list'>
                <li className='item'>
                    <h2>Backend</h2>
                    <span>
                        NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
                        MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
                    </span>
                </li>
            </ol>
            <ol className='list'>
                <li className='item'>
                    <h2>Languages</h2>
                    <span>
                        JavaScript, Java, Python, C#, C, C++, TypeScript, Go
                    </span>
                </li>
            </ol>
        </div>
    </div>
}

export default Home

