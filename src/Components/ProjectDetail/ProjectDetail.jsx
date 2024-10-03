import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useParams } from 'react-router'
import './projectDetail.css';
import { Link } from 'react-router-dom';
import dashboard from "../../assets/ReactCryptoDashboard/dashboard.jpg";
import transactions from "../../assets/ReactCryptoDashboard/transactions.jpg";
import support from "../../assets/ReactCryptoDashboard/support.jpg";
import signup from "../../assets/ReactCryptoDashboard/signup.jpg";
import signin from "../../assets/ReactCryptoDashboard/signin.jpg";
import forgotpassword from "../../assets/ReactCryptoDashboard/forgotpassword.jpg";

const ProjectDetail = () => {

    const [isLoading,setIsLoading] = useState(false);
    const [project, setProject] = useState({});

    const details = [
      {
        id: 1,
        title: "React Cripto Dashboard",
        screenshots: [dashboard, transactions, support, signup, signin, forgotpassword],
        projectdetails: "This is a responsive crypto dashboard app created by React where I implemented authentication. There is a signin page, a signup page, along with a dashboard with transactions and support system. A user can sign in or sign out from the dashboard. Here I use Chakra UI as well.",
        features: ["1.React", " ", "2.Chakra UI", " ", "3.JS", " ", "4.CSS"],
        livelink: "www.facebook.com",
        gitlink: "www.facebook.com",
      },
      {
        id: 2,
        title: "Dice Games (React)",
        // screenshots: [dashboard, playNow, playingGame, showRules],
        projectdetails: "its a Dice Game made with React. First user have to click play game to open the game. Then user have to select a number and roll the dice. If the number matches, user will get two point. If it doesn't then two points will be decreased. User can check total win or total lose in this game. Also user can check the rules and reset the game.",
        features: ["1.React", " ", "2.JS", " ", "3.CSS"],
        livelink: "www.facebook.com",
        gitlink: "www.facebook.com",
      },{
        id: 3,
        title: "React Foody Zone",
        // screenshots: [foodyzone, breakfast, lunch, dinner, searchoption],
        projectdetails: "A food related responsive webpage where all the data comes from backend. Here I use Api calling function. Here A user can search food from the list.",
        features: ["1.React", " ", "2.Styled components", " ", "3.JS"],
        livelink: "www.facebook.com",
        gitlink: "www.facebook.com",
      },{
        id: 4,
        title: "E-Commerce (JS)",
        // screenshots: [mainWebsite, shopPage, shoppingPage, blogPage, aboutPage, contactPage],
        projectdetails: "This is a reponsive e-commerce site where a customer can buy products, add to cart, read some blogs, know about the site and can contact with the organization.",
        features: ["1.JS", " ", "2.CSS", " ", "3.html"],
        livelink: "www.facebook.com",
        gitlink: "www.facebook.com",
      },{
        id: 5,
        title: "Amazon Clone",
        // screenshots: [mainWebsite],
        projectdetails: "This is a clone of the Amazon website. Its very simple. Only CSS and html are used here.",
        features: ["1.CSS", " ", "2.html"],
        livelink: "www.facebook.com",
        gitlink: "www.facebook.com",
      },{
        id: 6,
        title: "Sliding Album (JS)",
        // screenshots: [slidingimage],
        projectdetails: "a sliding album created by JS and css where user can see the photos on a sliding album.",
        features: ["1.JS", " ", "2.CSS"],
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
      window.scrollTo(0,0);
    },[])
    
    
  
  return (
    <div>
        <Navbar/>
        {isLoading ? <h1>Loading</h1> : <div className='projectDetail'>
          <h1>{project.title}</h1>
          <p>{project.projectdetails}</p>
          {/* <img src={project.screenshots[0]}/> */}
          <div className=''>
              {
                project.screenshots?.length > 0 && project.screenshots.map((tic,id)=><img src={tic} key={id} alt='screenshots'/>)
              }
          </div>
          <p className='features'>Features- {project.features}</p>
          <p>Livelink- {project.livelink}</p>
          <p>Gitlink- {project.gitlink}</p>
        </div> }
        <Footer/>
    </div>
  )
}

export default ProjectDetail
