import '../styles/ProjectDisplay.css'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import {GitHub} from '@mui/icons-material'

const ProjectDisplay = () => {
    const { id } = useParams()
    const {name, image, skills} = ProjectList[id]
    return <div className='project'>
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <p>Skills: {skills}</p>
        <GitHub />
    </div>
}

export default ProjectDisplay