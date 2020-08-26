import React from 'react';
import { Link } from 'react-router-dom';
import ServicesList from './ServicesList';
import Counter from './Counter';
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Home(){
    return(
<>
        <section class="home" style={{background:"#ececec",display:"flex",alignItems:"center"}}>
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="home_banner_content"> 
                        <h1>A <span>full-service creative</span> <br /> digital agency</h1>
                        <p>Boost your social media &amp; digital marketing strategies with <br />beautiful designs, superior content, and engaging experiences.</p>
                        <div className="work_button">Watch Video</div>
                    </div>
                </div>
                <div className="col-md-5">
                    <img src={require('../../img/coffee-cup.gif')} alt=""/>
                </div>
            </div>
        </div>
        </section>
        <section className="home_about">
            <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="home_banner_content"> 
                                <h1 className="mb-3"> <span>Who</span> we are</h1>
                                <p>Digital Latte is a full-service creative digital agency with core expertise in Digital, Design & Development. We emerged from our love for a good cuppa coffee and everything digital.
                                    Ever since we've made sure to never run out of coffee or fresh ideas.</p>
                                <p className="mt-2">A team of creative young souls who are passionate about their work and fuelled by our drive to come up with extraordinary ideas,
                                    we innovate to brew beyond the ordinary and have the courage to execute these innovative ideas...</p>
                                <a href="javascript:void(0)">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 pr-0 pl-0 mt-4">
                                    <img src={require('../../img/who-we-are-1.png')} alt=""/>
                                </div>
                                <div className="col-md-6 pr-0 pl-0">
                                    <img src={require('../../img/who-we-are-2.png')} alt=""/>
                                </div>
                            </div>   
                        </div>
                    </div>
            </div>
        </section>
        <section className="our_expertise">
            <div className="container">
                <h1 className="mb-3"> <span>Our</span> expertise</h1>
                <p>We combine data insights with design thinking to build strategies and experiences that <br/>
                    transform businesses.</p>
                <img src={require('../../img/text-gif.gif')} alt="" className="mt-4" />
                <div className="services_box">
                    <ServicesList />
                  
                </div>
            </div>
        </section>
        <section className="home_counter">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-12 mx-auto">
                        <img src={require('../../img/coffee_icon.png')} alt=""/>
                        <h2>COFFEE CUPS</h2>
                        <Counter range={8925} steps={25}/>                  
                         </div>
                    <div className="col-md-3 col-12 mx-auto mid-w3l-stat">
                    <img src={require('../../img/projects_icon.png')} alt=""/>
                    <h2>PROJECTS</h2>
                        <Counter range={350} steps={5}/>                  
                    </div>
                    <div className="col-md-3 col-12 mx-auto mid-w3l-stat">
                    <img src={require('../../img/working_days_icon.png')} alt=""/>
                    <h2>WORKING DAYS</h2>
                    <Counter range={2750} steps={10}/>                  
                    </div>
                    <div className="col-md-3 col-12 mx-auto mid-w3l-stat">
                    <img src={require('../../img/clients_icon.png')} alt=""/>
                    <h2>CLIENTS</h2>
                    <Counter range={160} steps={2}/>                  
                    </div>
                </div>
            </div>
        </section>
        <section className="home_casestudies">
            <div className="container">
                   <div className="casestudies_left">
                       <div className="leftbox">
                            <img src={require('../../img/case_study1.jpg')} alt=""/>
                            <div className="overlay">
                                    <h4>ABC OF KABADDI</h4>
                                    <p>Increase fan loyalty and engagement</p>
                                    <a href="#">Read More</a>
                            </div>
                       </div>
                       <h3>Check out more digital marketing case studies</h3>
                       <button type="button" class="case_button"><a href="#">View More</a></button>
                    </div>
                    <div className="casestudies_right">
                        <h1> <span>Case</span> studies</h1>
                        <div className="case_studyimg">
                        <img src={require('../../img/case_study2.jpg')} alt=""/>
                        <div className="overlay">
                        <h4>Connecting Through <br/> Design</h4>
                        <p>To create a visual identity...</p>
                        <a href="#">Read More</a>
                        </div>
                        </div>
                    </div>  
            </div>
        </section>
        <section className="say_hello">
            <div className="container">
                <div className="row">
                <div className="col-md-6 col-12">
                    <h1>Let's Talk <br/>
                    <Typed
                strings={[
                    'Digital',
                    'Strategy',
                    'Bussiness',
                    'Creative',
                    'Ideas'        
                ]}
                    typeSpeed={70}
                    backSpeed={50}
                    loop
                     >
                </Typed>
                    </h1>
                    <div>
                    <h5>Let's discuss your project at <a href="mailto:ideas@digitallatte.in"> <span>ideas@digitallatte.in</span><span>ideas@digitallatte.in</span></a> </h5>
                    <ul class="social_media">
              <li><a href="#" target="_blank" title="="><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
              <li><a href="#" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
           </ul>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="row contact_form">
                  <div className="col-sm-12 contact-form">
                    <label><i className="fa fa-user"></i></label>
                    <input type="text" name="name" id="fname" placeholder="Name*" required="" autoComplete="off"/>
                  </div>
                  <div className="col-md-6 contact-form">
                    <label><i className="fa fa-phone"></i></label>
                    <input type="text" name="contact" pattern="^(\+\d{1,3}[- ]?)?\d{10}$" onkeypress=" return restrictCharacters(this, event);" maxlength="10" id="contact" placeholder="Contact*" class="contact-width" required="" autoComplete="off"/>
                  </div>
                  <div className="col-md-6 contact-form">
                    <label><i className="fa fa-envelope-o"></i></label>
                    <input type="email" name="email" id="emailid" placeholder="Email*" required="" autoComplete="off"/>
                  </div>
                  <div className="col-md-12 contact-form">
                    <label><i className="fa fa-comments"></i></label>
                     <input type="text" name="message" id="message" placeholder="Message*" required="" autoComplete="off"/>
                  </div>

                  <div className="send-button w3layouts">
                    <input type="submit" value="Send Message" id="btnSubmit" name="btnSubmit" onclick="saveForm();" />
                  </div>
                </div>
                </div>
                </div>
            </div>
        </section>
        <footer>
            <div className="row">
                <div className="col-md-2">
                <img src={require('../../img/footer_logo.png')} alt=""/>
                </div>
                <div className="col-md-10">
                <div className="footer_navigations">
      <ul>
        <li><a href="https://digitallatte.in/our-expertise/Digital-Services"> Digital Marketing Services</a></li>
        <li><a href="https://digitallatte.in/our-expertise/Design-Services" className="scroll">Design Services</a></li>
        <li><a href="https://digitallatte.in/our-expertise/Web-Development-Services" className="scroll">Web Development Services</a></li>
        <li><a href="https://digitallatte.in/our-expertise/digital-marketing-services/Social-Media-Marketing" className="scroll">Social Media Marketing </a></li>
        <li><a href="https://digitallatte.in/our-expertise/digital-marketing-services/Search-Engine-Optimization-SEO" className="scroll">Search Engine Optimization</a></li>
      </ul>
    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <p>Copyright <span class="year">2020</span>. Digital Latte - <a href="https://digitallatte.in/index">Best Digital Agency Mumbai, India</a>. All rights are reserved. <a href="https://digitallatte.in/privacy-policy">Privacy Policy</a> </p>
                    </div>
                </div>
            </div>
        </footer>
</>
    )
}
export default Home;