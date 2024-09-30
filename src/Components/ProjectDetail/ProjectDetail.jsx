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
        title: "React Cripto Dashboard",
        // screenshots: [dasboard, transactions, support, signup, signin, forgotpassword],
        projectdetails: "This is a responsive crypto dashboard app created by React where I implemented authentication. There is a signin page, a signup page, along with a dashboard with transactions and support system. A user can sign in or sign out from the dashboard. Here I use Chakra UI as well.",
        features: ["React", "Chakra UI", "JS", "CSS"],
        livelink: "www.facebook.com",
        gitlink: "www.facebook.com",
      },
      {
        id: 2,
        title: "Dice Games (React)",
        // screenshots: [dashboard, playNow, playingGame, showRules],
        projectdetails: "its a Dice Game made with React. First user have to click play game to open the game. Then user have to select a number and roll the dice. If the number matches, user will get two point. If it doesn't then two points will be decreased. User can check total win or total lose in this game. Also user can check the rules and reset the game.",
        features: ["React", "JS", "CSS"],
        livelink: "www.facebook.com",
        gitlink: "www.facebook.com",
      },{
        id: 3,
        title: "React Foody Zone",
        // screenshots: [foodyzone, breakfast, lunch, dinner, searchoption],
        projectdetails: "A food related responsive webpage where all the data comes from backend. Here I use Api calling function. Here A user can search food from the list.",
        features: ["React", "Styled components", "JS"],
        livelink: "www.facebook.com",
        gitlink: "www.facebook.com",
      },{
        id: 4,
        title: "E-Commerce (JS)",
        // screenshots: [mainWebsite, shopPage, shoppingPage, blogPage, aboutPage, contactPage],
        projectdetails: "This is a reponsive e-commerce site where a customer can buy products, add to cart, read some blogs, know about the site and can contact with the organization.",
        features: ["JS", "CSS", "html"],
        livelink: "www.facebook.com",
        gitlink: "www.facebook.com",
      },{
        id: 5,
        title: "Amazon Clone",
        // screenshots: [mainWebsite],
        projectdetails: "This is a clone of the Amazon website. Its very simple. Only CSS and html are used here.",
        features: ["CSS", "html"],
        livelink: "www.facebook.com",
        gitlink: "www.facebook.com",
      },{
        id: 6,
        title: "Sliding Album (JS)",
        // screenshots: [slidingimage],
        projectdetails: "a sliding album created by JS and css where user can see the photos on a sliding album.",
        features: ["JS", "CSS"],
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
          <p>{project.projectdetails}</p>
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
