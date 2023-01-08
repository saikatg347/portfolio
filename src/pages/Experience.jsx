import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'
import { School } from "@mui/icons-material"

const Experience = () => {
    return <div className='experience'>
        <VerticalTimeline lineColor='#3e497a'>
            <VerticalTimelineElement
                className='vertical-timeline-element--education'
                date='2018 - 2021'
                iconStyle={{background: '#3e497a', color: '#fff'}}
                icon={<School/>}
            >
                <h3 className='vertical-timeline-element-title'>
                    Kalyani Mahavidyalaya, Kalyani, Nadia
                </h3>
                <p>Bachelor of Computer Science</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className='vertical-timeline-element--education'
                date='2022 - 2024'
                iconStyle={{background: '#3e497a', color: '#fff'}}
                icon={<School/>}
            >
                <h3 className='vertical-timeline-element-title'>
                    Kalyani Government Engineering College, Kalyani, Nadia
                </h3>
                <p>Master of Computer Application</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
}

export default Experience

