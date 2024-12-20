import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "3f916b31-05ba-49a0-8af1-065ea0556443");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert(res.message);
        }
      };


  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt='theme_pattern'/>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's Talk</h1>
                <p>I am currently available to take on new Projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                        <img src={mail_icon} alt='mail_icon'/>
                        <p>intesarshawon@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={call_icon} alt='call_icon'/>
                        <p>+880 1676 331312</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={location_icon} alt='location_icon'/>
                        <p>Uttara, Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter Your Name' name='name'/>
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter Your Email' name='email'/>
                <label htmlFor=''>Write Your Message Here</label>
                <textarea name='message' rows='8' placeholder='Enter Your Message'> </textarea>
                <button className='contact-submit' type='submit'>
                    Submit Now
                </button>
            </form>
        </div>
    </div>
  )
}

export default Contact
