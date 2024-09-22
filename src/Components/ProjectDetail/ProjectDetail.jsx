import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useParams } from 'react-router'
import i1 from "../../assets/project_1.jpg";
import i2 from "../../assets/project_1.jpg";
import i3 from "../../assets/project_1.jpg";
import i4 from "../../assets/project_1.jpg";
import i5 from "../../assets/project_1.jpg";

const ProjectDetail = () => {

    const [isLoading,setIsLoading] = useState(false);
    const [project, setProject] = useState({});

    const details = [
      {
        id: 1,
        title: "b",
        screenshots: [i1, i2, i3, i4, i5],
        features: ["a", "b", "c", "d", "e"],
        livelink: "www.facebook.com",
        gitlink: "www.facebook.com",
      },
      {
        id: 2,
        title: "a",
        screenshots: [i1, i2, i3, i4, i5],
        features: ["a", "b", "c", "d", "f"],
        livelink: "www.facebook.com",
        gitlink: "www.facebook.com",
      },{
        id: 3,
        title: "a",
        screenshots: [i1, i2, i3, i4, i5],
        features: ["a", "b", "c", "d", "f"],
        livelink: "www.facebook.com",
        gitlink: "www.facebook.com",
      },
    ];
  

    const id = useParams();
    console.log(id.id);
    
    console.log(project);
  
    useEffect(()=>{
      setIsLoading(true);
      const projectD = details.filter(data=>data.id === parseInt(id.id))[0];
      setProject(projectD);
      setIsLoading(false);
    },[])

  
  return (
    <div>
        <Navbar/>
        {isLoading ? <h1>Loading</h1> : <div>
          <h1>{project.title}</h1>
          <img src={project.screenshots}/>
          <p>{project.features}</p>
          <p>{project.livelink}</p>
          <p>{project.gitlink}</p>
        </div> }
        <Footer/>
    </div>
  )
}

export default ProjectDetail
