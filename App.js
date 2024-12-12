import Logo from './Logo.png';
import Image1 from './Image1.png';
import Image2 from './Image2.png';
import Lightingdesignicon from './Lightingdesigicon.png';
import Interiordesignicon from './Interiordesignicon.png';
import Outdoordesignicon from './Outdoordesignicon.png';
import Maskgroup1 from './Maskgroup.png';
import Line4 from './Line4.png';
import Maskgroup2 from './Maskgroup(1).png';
import Line6 from './Line6.png';
import Group25 from './Group25.png';
import Group26 from './Group26.png';
import line6 from './Line6.png';
import Group27 from './Group27.png';
import Maskgroup3 from './Maskgroup(4).png';
import abi from './abi.png';
import Maskgroup4 from './Maskgroup(2).png';
import Maskgroup5 from './Maskgroup(3).png';
import Logo2 from './Logo2.png';
import Facebook from './Facebook.png';
import X from './X.png';
import Instagram from './Instagram.png';
import Linkdin from './Linkdin.png';
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
      const [showScrollToTop, setShowScrollToTop] = useState(false);
      const [isImageVisible, setIsImageVisible] = useState(true);
      const [buttonText, setButtonText] = useState('-');
    
      const scrollToTopBtnRef = useRef(null);
      const button1Ref = useRef(null);
      const button2Ref = useRef(null);
      const image1Ref = useRef(null);
      const image2Ref = useRef(null);
      const lorem1Ref = useRef(null);
      const lorem2Ref = useRef(null);
    
      useEffect(() => {
        const scrollFunction = () => {
          if (window.scrollY > 20) {
            setShowScrollToTop(true);
          } else {
            setShowScrollToTop(false);
          }
        };
    
        window.addEventListener('scroll', scrollFunction);
        return () => window.removeEventListener('scroll', scrollFunction);
      }, []);
    

      const [swapped, setSwapped] = useState(false);
      const [animationDuration, setAnimationDuration] = useState('0.2s'); 
      const boxARef = useRef(null);
      const boxBRef = useRef(null);
    
      const swap = (direction) => {
        const boxA = boxARef.current; 
        const boxB = boxBRef.current; 
        if (boxA && boxB) {           
          if (direction === 'right') {
            boxA.style.transition = `transform ${animationDuration}`; 
            boxB.style.transition = `transform ${animationDuration}`; 
            
           
            boxA.style.transform = !swapped ? 'translateX(480px)' : 'translateX(0)'; 
            boxB.style.transform = !swapped ? 'translateX(-480px)' : 'translateX(0)';
    
          } else if (direction === 'left') { 
            boxA.style.transition = `transform ${animationDuration}`; 
            boxB.style.transition = `transform ${animationDuration}`; 
            
           
            boxA.style.transform = swapped ? 'translateX(0)' : 'translateX(480px)';
            boxB.style.transform = swapped ? 'translateX(0)' : 'translateX(-480px)';
          }
    
         
          setSwapped(!swapped);
        }
    };
      
    
      const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      };
    
      const topFunction = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
      const toggleContent = (buttonRef, imageRef, loremRef) => {
        if (buttonRef.current && imageRef.current && loremRef.current) {
          if (buttonRef.current.textContent === '+') {
            buttonRef.current.textContent = '-';
            imageRef.current.classList.add('hidden');
          } else {
            buttonRef.current.textContent = '+';
            imageRef.current.classList.remove('hidden');
          }
          loremRef.current.classList.toggle('hidden');
        }
      };
    
      useEffect(() => {
        toggleContent(button2Ref, image2Ref, lorem2Ref);
  }, []);
     return (
        <>
            <header>
                <div className="logo">
                    <img src={Logo} alt="" /></div>
                <div id="myDiv"></div>
                <nav>
                    <ul>
                        <li className="lin"><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </nav>
                
                 <button className="signup-btn"> <a href="#">Sign Up</a> </button>
                 
            </header>
            <div className="new-div">
                <h1>Interior Design</h1>
                <img src={Image1} alt="" className="new-img" />
                <div className="neww" />
                <img src={Image2} alt="" className="new" />
                <button className="btn"  onClick={scrollToBottom}>↓</button>  
                {showScrollToTop && <button onClick={topFunction} id="scrollToTopBtn" ref={scrollToTopBtnRef}>&uarr;</button>}
                <p className="step">Step into a world where the art of Interior Design is meticulously
                    crafted to bring together timeless elegance and cutting-edge
                    modern Innovation, Allowing you to transform your living spaces
                    into the epitome of luxury and sophistication</p>
                <button className="new-button">Start Project</button>
                <div className="un">
                    <div>
                        <p className="amj">400+</p>
                        <p className="benas">Project Complete</p>
                    </div>
                    <div>
                        <p className="nasi">600+</p>
                        <p className="basi">Satisfied Clients</p>
                    </div>
                    <div>
                        <p className="besy">100+</p>
                        <p className="anie">Unique Styles</p>
                    </div>
                </div>
                </div>
            <div className="analog">
                <div className="jun" />
                <p>Our Services</p>
            </div><div className="li-in-ou-div">
                <div className="div">
                    <img src={Lightingdesignicon} alt="" className="sdf" />
                    <h1 className="li">Lighting Design</h1>
                    <p className="ac">Achieve the perfect balance of
                        ambient, task, and accent lighting
                        for a functional atmosphere</p>
                </div>
                <div className="mango">
                    <img src={Interiordesignicon} alt="" className="sd" />
                    <h1 className="de">Interior Design</h1>
                    <p className="in">Interior Design
                        From concept to completion, we
                        oversee every detail to bring your
                        vision to life efficiently</p>
                </div>
                <div className="marine">
                    <img src={Outdoordesignicon} alt="" />
                    <h1 className="ou">Outdoor Design</h1>
                    <p className="cel">Celebrate the changing seasons
                        with our seasonal outdoor decor
                        services</p>
                </div>
            </div><div className="h1falan">
                <img src={Maskgroup1} alt="" className="anor" />
                <div>
                    <h1 className="mem">Designing Your Dream With Brilliance</h1>
                    <p className="azasa">Elevate your spaces with bespoke interior designs that reflect
                        your unique style and aspirations, crafted with precision and
                        brilliance for an unforgettable living experience</p>
                </div>
                <div className="fl">
                    <p className="anb">Living Room Interior Design</p>
                    <button className="mana" id="toggleButton1" ref={button1Ref} onClick={() => toggleContent(button1Ref, image1Ref, lorem1Ref)}>+</button>
      {isImageVisible && <img id="image1" ref={image1Ref} src={Line4} alt="" className="bim" />}
      <p id="lorem1" className="scrollable hidden" ref={lorem1Ref}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fuga reiciendis odio molestiae non sequi vitae, deleniti pariatur porro expedita animi, magnam vel aliquam ea nobis voluptates itaque. Quasi, iste?
            Nam alias incidunt nulla impedit velit ducimus? Cum modi quod itaque doloremque placeat iure. Nobis exercitationem illo quisquam magni, recusandae molestiae minus eius accusamus qui et itaque, laborum impedit modi.</p>

      <p className="anb2">Commercial Office Room Interior Design</p>
      
      <button className="ono" id="toggleButton2" ref={button2Ref} onClick={() => toggleContent(button2Ref, image2Ref, lorem2Ref)}>+</button>
      <p id="lorem2" className="scrollable hidden" ref={lorem2Ref}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusantium vero quam totam quos iusto hic tenetur voluptas tempora. Maxime, consequuntur deleniti? Reiciendis repellat quisquam blanditiis, eos commodi ipsum recusandae!
            Placeat, saepe ex. Corporis saepe sint, quidem voluptatem velit tenetur, ipsa hic veniam at cupiditate sequi. Omnis pariatur officiis ex est corporis laudantium, adipisci maiores voluptatem magnam dolor, vero autem!</p>

      <img id="image2" src={Line4} alt="" className="bim2" ref={image2Ref} />

                </div>
                <div>
                    <button className="bom">Learn More</button>
                </div>
            </div><div className="oniki">
                <div>
                    <img src={Maskgroup2} alt="" className="orman1" />
                </div>
                <div className="home">
                    <img src={Group25} alt="" className="orman2" />
                    <img src={Group26} alt="" className="orman3" />
                    <img src={Line6} alt="" className="orman4" />
                    <img src={Group27} alt="" className="orman5" />
                    <img src={line6} alt="" className="orman6" />
                </div>
                <div className="nono">
                    <div className="nami">
                        <h1 className="min">Designing Your Dream in Three Simple Steps</h1>
                        <p className="man">Start Project</p>
                        <p className="namp">Embark on your design adventure by initiating
                            your project. Share your vision and set the stage
                            for a bespoke design experience</p>
                    </div>
                    <div className="nami2">
                        <p className="bin">Craft</p>
                        <p className="cmi">Collaborate closely to achieve design excellence
                            refining your vision and crafting brilliance into
                            every aspect of your space</p>
                    </div>
                    <div>
                        <p className="vinem">Execute</p>
                        <p className="gun">Witness your vision becoming a reality as we
                            execute the design plan with precision. Celebrate
                            the joy of your newly transformed space</p>
                    </div>
                </div>
            </div><div className="qolma">
                <div>
                    <img src={Maskgroup3} alt="" className="olpa" />
                </div>
                <div>
                    <h1 className="qolma-h1">What Our Customers
                        Say About Us</h1>
                </div>
                <div ref={boxARef} className="black1" id="boxA">
                    <div className="ano">
                        <img src={abi} alt="" />
                    </div>
                    <p className="opna">Working with your design team was an
                        absolute pleasure. The attention to detail
                        and creativity exceeded my expectations.
                        Thank you for making my home beautiful!</p>
                    <div className="displ">
                        <div>
                            <img src={Maskgroup4} alt="" className="voam" />
                        </div>
                        <p className="marg">Sophie Carter</p>
                        <p className="cit">New York, USA</p>
                    </div>
                </div>
                <div ref={boxBRef} className="black2" id="boxB">
                    <div className="root">
                        <img src={abi} alt="" />
                    </div>
                    <p className="cmds">Exceptional service! From the initial
                        consultation to the final reveal, your team
                        demonstrated professionalism and a keen
                        eye for design. Highly recommend!</p>
                    <div className="boma1">
                        <img src={Maskgroup5} alt="" className="boma2" />
                    </div>
                    <div className="romiz">
                        <p className="marg2">James Bennett</p>
                        <p className="cit2">Toronto, Canada</p>
                    </div>
                    <div className="buttons">
                        <button className="dom" onClick={() => swap('left')}>←</button>
                        <button className="dom2" onClick={() => swap('right')}>→</button>
                        
                    </div>
                </div>

            </div><div className="the-end">
                <h1>Subscribe to Our Newsletter for Design Insights</h1>
                <p className="wasd">Be the first to discover trends, inspirations, and special offers as
                    we bring the world of design directly to your inbox</p>
                <div className="subscription-form">
                    <input className="email" placeholder="Enter your email address" />
                    <button>Subscribe</button>
                </div>
                <footer>
                    <div className="container">
                        <div className="footer-section">
                            <img src={Logo2} alt="" />
                            <p className="vona">VivaDecor your premier destination for luxury and modern interior design</p>
                            <div className="social-icons">
                                <a className="aba" href="https://www.facebook.com/"><img src={Facebook} alt="Facebook" /></a>
                                <a className="aba" href="https://x.com/home?lang=tr"><img src={X} alt="X" /></a>
                                <a className="aba" href="https://www.instagram.com/"><img src={Instagram} alt="Instagram" /></a>
                                <a className="aba" href="https://tr.linkedin.com/"><img src={Linkdin} alt="LinkedIn" /></a>
                            </div>
                        </div>
                        <div className="footer-section">
                            <h3>Our Services</h3>
                            <ul>
                                <a className="aba" href="#"><li>Interior design</li></a>
                                <a className="aba" href="#"><li>Outdoor design</li></a>
                                <a className="aba" href="#"><li>Lightning design</li></a>
                                <a className="aba" href="#"><li>Office design</li></a>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>Our Services</h3>
                            <ul>
                                <a className="aba" href="#"><li>Reviews</li></a>
                                <a className="aba" href="#"><li>Careers</li></a>
                                <a className="aba" href="#"><li>Pricing</li></a>
                                <a className="aba" href="#"><li>Press inquiries</li></a>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>Our Services</h3>
                            <p className="avan1">info@vivadecor.com</p>
                            <p className="avan2">Design Avenue Cityville, CA 90210 United States</p>
                        </div>
                    </div>
                </footer>
            </div>
            
            </>
    );
}

export default App;