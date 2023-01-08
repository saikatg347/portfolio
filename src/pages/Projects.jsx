import '../styles/Projects.css'
import ProjectItem from "../components/ProjectItem"
import {ProjectList} from '../helpers/ProjectList'

const Projects = () => {
    return <div className='projects'>
        <h1>My Personal Projects</h1>
        <div className='projectList'>
            {
                ProjectList.map((project, id) => <ProjectItem key={id} name={project.name} image={project.image} id={id}/>)
            }
        </div>
    </div>
}

export default Projects

