import '../styles/ProjectDisplay.css'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import {GitHub} from '@mui/icons-material'

const ProjectDisplay = () => {
    const { id } = useParams()
    const {name, image, skills, github} = ProjectList[id]
    return <div className='project'>
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <p>Technologies used : {skills}</p>
        <a href={github} target='_blank'>
            <GitHub />
        </a>
    </div>
}

export default ProjectDisplay