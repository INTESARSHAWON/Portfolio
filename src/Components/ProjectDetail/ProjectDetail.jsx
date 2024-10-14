import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import { useLocation, useParams } from 'react-router'
import './ProjectDetail.css';
import { Link } from 'react-router-dom';
import dashboard from "../../assets/ReactCryptoDashboard/dashboard.jpg";
import transactions from "../../assets/ReactCryptoDashboard/transactions.jpg";
import support from "../../assets/ReactCryptoDashboard/support.jpg";
import signup from "../../assets/ReactCryptoDashboard/signup.jpg";
import signin from "../../assets/ReactCryptoDashboard/signin.jpg";
import forgotpassword from "../../assets/ReactCryptoDashboard/forgotpassword.jpg";
import dashboard2 from "../../assets/DiceGames/dashboard2.jpg";
import playNow from "../../assets/DiceGames/playNow.jpg";
import playingGame from "../../assets/DiceGames/playingGame.jpg";
import showRules from "../../assets/DiceGames/showRules.jpg";
import foodyzone from "../../assets/FoodyZone/foodyzone.jpg";
import breakfast from "../../assets/FoodyZone/breakfast.jpg";
import lunch from "../../assets/FoodyZone/lunch.jpg";
import dinner from "../../assets/FoodyZone/dinner.jpg";
import searchoption from "../../assets/FoodyZone/searchoption.jpg";
import mainWebsite from "../../assets/ECommerce/mainWebsite.jpg";
import shopPage from "../../assets/ECommerce/shopPage.jpg";
import shoppingPage from "../../assets/ECommerce/shoppingPage.jpg";
import blogPage from "../../assets/ECommerce/blogPage.jpg";
import aboutPage from "../../assets/ECommerce/aboutPage.jpg";
import contactPage from "../../assets/ECommerce/contactPage.jpg";
import mainWebsite2 from "../../assets/AmazonClone/mainWebsite2.jpg";
import slidingalbum from "../../assets/SlidingAlbum/slidingalbum.jpg";
import slidingalbum2 from "../../assets/SlidingAlbum/slidingalbum2.jpg";
import dlp1 from "../../assets/DoubleLandingPage/dlp1.jpg";
import dlp2 from "../../assets/DoubleLandingPage/dlp2.jpg";
import dlp3 from "../../assets/DoubleLandingPage/dlp3.jpg";
import bise1 from "../../assets/BackgroundImageScrollEffect/bise1.jpg";
import bise2 from "../../assets/BackgroundImageScrollEffect/bise2.jpg";
import mp1 from "../../assets/MousePosition/mp1.jpg";
import mp2 from "../../assets/MousePosition/mp2.jpg";
import ps from "../../assets/ProfileStatictics/ps.jpg";
import ctny from "../../assets/CountdownToNewYear/ctny.jpg";
import pt from "../../assets/PomodoroTimer/pt.jpg";
import dc from "../../assets/DigitalClock/dc.jpg";
import mc from "../../assets/MiniCalender/mc.jpg";


import { FaGithub } from "react-icons/fa";
import StickyButton from '../StickyButton/StickyButton';

const ProjectDetail = () => {

    const [isLoading,setIsLoading] = useState(false);
    const [project, setProject] = useState({});

    const details = [
      {
        id: 1,
        title: "React Auth Cripto Dashboard",
        screenshots: [dashboard, transactions, support, signup, signin, forgotpassword],
        projectdetails: "This is a responsive crypto dashboard app created by React where I implemented authentication. There is a signin page, a signup page, along with a dashboard with transactions and support system. A user can sign in or sign out from the dashboard. Here I use Chakra UI as well.",
        technologyUsed: ["React", ", ", "Chakra UI", ", ", "JS", ", ", "CSS", ", ", "html"],
        livelink: "https://www.facebook.com/",
        gitlink: "https://github.com/INTESARSHAWON/Auth-Crypto-Dashboard-using-React-Chakra-UI",
      },
      {
        id: 2,
        title: "Dice Games (React)",
        screenshots: [dashboard2, playNow, playingGame, showRules],
        projectdetails: "its a Dice Game made with React. First user have to click play game to open the game. Then user have to select a number and roll the dice. If the number matches, user will get two point. If it doesn't then two points will be decreased. User can check total win or total lose in this game. Also user can check the rules and reset the game.",
        technologyUsed: ["React", ", ", "JS", ", ", "CSS", ", ", "html"],
        livelink: "https://ddiceggame.netlify.app/",
        gitlink: "https://github.com/INTESARSHAWON/Dice-Game-using-react",
      },{
        id: 3,
        title: "React Foody Zone",
        screenshots: [foodyzone, breakfast, lunch, dinner, searchoption],
        projectdetails: "A food related responsive webpage where all the data comes from backend. Here I use Api calling function. Here A user can search food from the list.",
        technologyUsed: ["React", ", ", "Styled components", ", ", "JS", ", ", "CSS", ", ", "html"],
        livelink: "www.facebook.com",
        gitlink: "https://github.com/INTESARSHAWON/Foody-Zone-Using-React",
      },{
        id: 4,
        title: "E-Commerce (JS)",
        screenshots: [mainWebsite, shopPage, shoppingPage, blogPage, aboutPage, contactPage],
        projectdetails: "This is a reponsive e-commerce site where a customer can buy products, add to cart, read some blogs, know about the site and can contact with the organization.",
        technologyUsed: ["JS", ", ", "CSS", ", ", "html"],
        livelink: "https://ccaraecommerce.netlify.app/",
        gitlink: "www.facebook.com",
      },{
        id: 5,
        title: "Amazon Clone",
        screenshots: [mainWebsite2],
        projectdetails: "This is a clone of the Amazon website. Its very simple. Only CSS and html are used here.",
        technologyUsed: ["CSS", ", ", "html"],
        livelink: "https://aamazoncclone.netlify.app/",
        gitlink: "https://github.com/INTESARSHAWON/Amazon-Clone",
      },{
        id: 6,
        title: "Sliding Album (JS)",
        screenshots: [slidingalbum, slidingalbum2],
        projectdetails: "a sliding album created by JS and css where user can see the photos on a sliding album.",
        technologyUsed: ["JS", ", ", "CSS", ", ", "html"],
        livelink: "https://sslidingalbum.netlify.app/",
        gitlink: "https://github.com/INTESARSHAWON/Sliding-Album",
      },{
        id: 11,
        title: "Double Landing Page (JS)",
        screenshots: [dlp1, dlp2, dlp3],
        projectdetails: "a sliding album created by JS and css where user can see the photos on a sliding album.",
        technologyUsed: ["JS", ", ", "CSS", ", ", "html"],
        livelink: "https://ddoublellandingppage.netlify.app/",
        gitlink: " ",
      },{
        id: 12,
        title: "Backgound Image Scroll Effect (JS)",
        screenshots: [bise1, bise2],
        projectdetails: "a sliding album created by JS and css where user can see the photos on a sliding album.",
        technologyUsed: ["JS", ", ", "CSS", ", ", "html"],
        livelink: "https://bbise.netlify.app/",
        gitlink: " ",
      },{
        id: 13,
        title: "Mouse Position (JS)",
        screenshots: [mp1, mp2],
        projectdetails: "a sliding album created by JS and css where user can see the photos on a sliding album.",
        technologyUsed: ["JS", ", ", "CSS", ", ", "html"],
        livelink: "https://mmouseposition.netlify.app/",
        gitlink: " ",
      },{
        id: 16,
        title: "Profile Statictics (JS)",
        screenshots: [ps],
        projectdetails: "a sliding album created by JS and css where user can see the photos on a sliding album.",
        technologyUsed: ["JS", ", ", "CSS", ", ", "html"],
        livelink: "https://pprofilestatistics.netlify.app/",
        gitlink: " ",
      },{
        id: 17,
        title: "Countdown To New Year (JS)",
        screenshots: [ctny],
        projectdetails: "a sliding album created by JS and css where user can see the photos on a sliding album.",
        technologyUsed: ["JS", ", ", "CSS", ", ", "html"],
        livelink: "https://cctny.netlify.app/",
        gitlink: " ",
      },{
        id: 18,
        title: "Pomodoro Timer (JS)",
        screenshots: [pt],
        projectdetails: "a sliding album created by JS and css where user can see the photos on a sliding album.",
        technologyUsed: ["JS", ", ", "CSS", ", ", "html"],
        livelink: "https://ppomodorotimer.netlify.app/",
        gitlink: " ",
      },{
        id: 19,
        title: "Digital Clock (JS)",
        screenshots: [dc],
        projectdetails: "a sliding album created by JS and css where user can see the photos on a sliding album.",
        technologyUsed: ["JS", ", ", "CSS", ", ", "html"],
        livelink: "https://ddigitalclock.netlify.app/",
        gitlink: " ",
      },{
        id: 20,
        title: "Mini Calendar (JS)",
        screenshots: [mc],
        projectdetails: "a sliding album created by JS and css where user can see the photos on a sliding album.",
        technologyUsed: ["JS", ", ", "CSS", ", ", "html"],
        livelink: "https://mminicalendar.netlify.app/",
        gitlink: " ",
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
    <div className=''>
        <StickyButton/>
        {isLoading ? <h1>Loading</h1> : <div className='projectDetail'>
          <h1>{project.title}</h1>
          <p>{project.projectdetails}</p>
          {/* <img src={project.screenshots[0]}/> */}
          <div className='myworkImage'>
              {
                project.screenshots?.length > 0 && project.screenshots.map((tic,id)=><img src={tic} key={id} alt='screenshots'/>)
              }
          </div>
          <div className='myworkFeatures'>
              <p>Technology Used- {project.technologyUsed}</p>
          </div>
          <div className='project-details-bottom'>
              <p><Link className='livelink' to={project.livelink} target='_blank'>Explore It Live...</Link> </p>
              <p><Link className='gitlink' to={project.gitlink} target='_blank'> <FaGithub/> See it in Github</Link> </p>
          </div>
        </div> }
        <Footer/>
    </div>
  )
}

export default ProjectDetail
