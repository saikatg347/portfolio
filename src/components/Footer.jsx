import '../styles/Footer.css'
import {Instagram, Twitter, Facebook, LinkedIn} from '@mui/icons-material'

const Footer = () => {
    return <div className="footer">
        <div className='socialMedia'>
            <a href="https://www.instagram.com/godai_3/" target='_blank'>
                <Instagram />
            </a>
            <a href="https://twitter.com/saikatg347" target='_blank'>
                <Twitter />
            </a>
            <a href="https://www.facebook.com/saikatalpha" target='_blank'>
                <Facebook />
            </a>
            <a href="https://www.linkedin.com/in/saikag347/" target='_blank'>
                <LinkedIn />
            </a>
        </div>
        <p>&copy; 2023 Saikat Das</p>
    </div>
}

export default Footer