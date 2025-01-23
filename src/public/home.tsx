import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/home.css';
import logo from '../assets/images/logo.png';
import tablePng from '../assets/images/table.png';
import aboutImg from '../assets/images/about.png';
import karnaliblues from '../assets/images/karnaliblues.png';
import book2 from '../assets/images/ProductOne.jpeg';
import book3 from '../assets/images/ProductTwo.jpeg';
import book4 from '../assets/images/ProductThree.jpeg';
import book5 from '../assets/images/ProductFour.jpeg';
import book6 from '../assets/images/ProductSix.jpeg';
import pagalbasti from '../assets/images/keyboard.png';
import book8 from '../assets/images/bottle.png';
import book9 from '../assets/images/civil engineering books.png';
import book10 from '../assets/images/Study Chair.png';
import book11 from '../assets/images/Mouse.png';
import devkotapoems from '../assets/images/software books.png';
import doshichasma from '../assets/images/pharmacy.png';
import bhagwatgeeta from '../assets/images/bhagwatgeeta.png';
import sumnima from '../assets/images/sumnina.png';
import bisnu from '../assets/images/bisnhu.png.jpeg';
import ritesh from '../assets/images/ritesh.png';
import gaurva from '../assets/images/gaurav.png';
import uttam from '../assets/images/uttam.png';
import chirayu from '../assets/images/chirayu.png';
import suraj from '../assets/images/suraj.png';
import anuj from '../assets/images/anuj.png';
import chatbott from '../assets/images/mychatbott.png';

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <section className="home">
                <nav>
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li onClick={() => navigate("/login")}><a>Login as    SELLER</a></li>
                        <li onClick={()=>navigate("/loginseeker")}><a>Login as BUYER</a></li>
                    
                        
            
                        <li onClick={()=>navigate("/contact")}><a>CONTACT</a></li>
            
                       
                        <li onClick={()=>navigate("/teamsection")}><a>Our Team</a></li>

                        <li onClick={()=>navigate("/kathmanducity")}><a>KATHMANDU</a></li>

                        <li onClick={()=>navigate("/softwarica")}><a>PARTNERS</a></li>


                       


                        

             

                        

                        
                        

                       
                        

                        
                        

                        

                        
                        

                        
                        

                        
               
                    
                    </ul>
                    <div className="social_icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <i className="fa-solid fa-heart"></i>
                    </div>
                </nav>

                <div className="main">
                    <div className="main_tag">
                        <h1>WELCOME TO<br /><span>"STU- THRIFT" </span></h1>
                        <p>
                          To facilitate buy & sell or donate & seek goods related 
                          to students at affordable prices....
                          "Empowering Students, One Swap at a Time!"
                        </p>
                        <a href="#" className="main_btn">Learn More</a>
                    </div>
                    <div className="main_img">
                        <img src={tablePng} alt="Table with books" />
                    </div>
                    <div>
              {/* Your other home page content */}
             <img
          src={chatbott}
         alt="Chatbot Icon"
         className="chatbot-icon"
         onClick={() =>navigate('/chatbott')} // Add functionality for opening chatbot
            />
               </div>
                </div>
            </section>

            <section className="services">
                <div className="services_box">
                    <div className="services_card">
                        <i className="fa-solid fa-truck-fast"></i>
                        <h3>Fast Delivery</h3>
                        <p>
                            Goods will be transported to the seeker's location via best modes of transportation.
                        </p>
                    </div>
                    <div className="services_card">
                        <i className="fa-solid fa-headset"></i>
                        <h3>24 x 7 Services</h3>
                        <p>
                            Donors can donate goods any time they wish.
                            Seekers will receive goods during day time only.
                        </p>
                    </div>
                    <div className="services_card">
                        <i className="fa-solid fa-tag"></i>
                        <h3>Best Deal</h3>
                        <p>
                            We will try our best to become a good mediator
                            between seeker and donor or buyer and seller.
                        </p>
                    </div>
                    <div className="services_card">
                        <i className="fa-solid fa-lock"></i>
                        <h3>Secure Payment</h3>
                        <p>
                            Seekers must pay the transportation charge of delivery 
                            and the minimum cost of the good.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about">
                <div className="about_image">
                    <img src={aboutImg} alt="About Us" />
                </div>
                <div className="about_tag">
                    <h1>About Us</h1>
                    <p>
                    We are excited to launch Stu-Thrift, an innovative designed to connect
                    generous contributors with eager students across Nepal or any specific city.
                    Our platform serves as a bridge, enabling users to donate, sell or seek a variety of 
                    goods at minimal cost..
                    With Stu-Thrift, student can access free donate items or purchase affordable resources,
                    making education and student life more accessible for everyone .
                    </p>
                </div>
            </section>

            <section className="featured_books">
                <h1>Featured PRODUCTS</h1>
                <div className="featured_book_box">
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={karnaliblues} alt="Book 1" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Product</h2>
                            <p className="donor">Seller: Bishnu Budhathoki</p>
                            <div className="categories">BOOK</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book2} alt="Book 2" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Product</h2>
                            <p className="donor">Donor: Sujal Basnet</p>
                            <div className="categories">CALCULATOR</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book3} alt="Book 3" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Product</h2>
                            <p className="donor">Donor: Anuj Singh</p>
                            <div className="categories">GUITAR</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book4} alt="Book 4" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Product</h2>
                            <p className="donor">Seller: Ishan Shrestha</p>
                            <div className="categories">STUDY TABLE</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book5} alt="Book 5" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Product</h2>
                            <p className="donor">Seller: Roshan Lamichhane</p>
                            <div className="categories">STUDY LAMP</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book6} alt="Book 6" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Product</h2>
                            <p className="donor">Seller: Chirayu Baij</p>
                            <div className="categories">SPEAKER</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={pagalbasti} alt="Book 7" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Product</h2>
                            <p className="donor">Seller: Suraj Tamang</p>
                            <div className="categories">KEYBOARD</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book8} alt="Book 8" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Product</h2>
                            <p className="donor">Donor: Rishan Shrestha</p>
                            <div className="categories">THERMOS BOTTLE</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book9} alt="Book 9" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Product</h2>
                            <p className="donor">Seller: Dipesh Bohora</p>
                            <div className="categories">CHAIR</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book10} alt="Book 10" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Product</h2>
                            <p className="donor">Donor: Chirayu Baij</p>
                            <div className="categories">CHAIR</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book11} alt="Book 11" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Product</h2>
                            <p className="donor">Donor: Aayush Rasaili</p>
                            <div className="categories">MOUSE</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={devkotapoems} alt="Book 12" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Product</h2>
                            <p className="donor">Donor: Raj Karki</p>
                            <div className="categories">BOOK</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={doshichasma} alt="Book 13" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Product</h2>
                            <p className="donor">Donor: Aayash Dwa</p>
                            <div className="categories">BOOK</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={bhagwatgeeta} alt="Book 14" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Product</h2>
                            <p className="donor">Donor: Aayush Kafle</p>
                            <div className="categories">BOOK</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={sumnima} alt="Book 15" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Product</h2>
                            <p className="donor">Donor: Rahul Poddar</p>
                            <div className="categories">BOOK</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="review">
                <h1>Client Reviews</h1>
                <div className="review_box">
                    <div className="review_card">
                        <div className="review_image">
                            <img src={ritesh} alt="Reviewer 1" />
                        </div>
                        <div className="review_tag">
                            <h2>Client Review</h2>
                            <p className="client">Client: Ritesh Das.</p>
                            <p className="details">
                                It's my great privilege to thank the donor and stuthrift.
                                Great effort by team members to connect donors and seekers within Nepal.
                                We got the opportunity to sell second hand books and notes for juniors at minimum cost.
                                 
                            </p>
                        </div>
                    </div>
                    <div className="review_card">
                        <div className="review_image">
                            <img src={chirayu} alt="Reviewer 2" />
                        </div>
                        <div className="review_tag">
                            <h2>Client Review</h2>
                            <p className="client">Client: Chirayu Baij</p>
                            <p className="details">
                                Innovative work by the developer in the field of education and students.
                                I got a book  and other notes for my study which helped me a lot. I appreciate your service.
                            </p>
                        </div>
                    </div>
                    <div className="review_card">
                        <div className="review_image">
                            <img src={uttam} alt="Reviewer 3" />
                        </div>
                        <div className="review_tag">
                            <h2>Client Review</h2>
                            <p className="client">Client: Uttam Sapkota</p>
                            <p className="details">
                                Surely, in future this website will be the most visited site by students.
                                It will be best as student will be financially active selling the products.
                            </p>
                        </div>
                    </div>
                    <div className="review_card">
                        <div className="review_image">
                            <img src={gaurva} alt="Reviewer 4" />
                        </div>
                        <div className="review_tag">
                            <h2>Client Review</h2>
                            <p className="client">Client: Gaurav Koirala</p>
                            <p className="details">
                                This website helped me to find and study novels during my summer vacations.
                                Awesome effort by my friend Aadarsha and his team..!!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        
            

            <footer>
                <h1>STU-THRIFT...</h1>
                <p>
                "STU-THRIFT" 2024...BE CONNECTED WITH US FOR UPDATES!!!!
                </p>
                <div className="input_box">
                    <input type="email" placeholder="Enter your email" />
                    <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="footer_social_icon">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>

                <p className="end">All rights on<span><i className="fa-solid fa-face-grin"></i> Enterprise Group Project Team Aadarsha</span></p>
            </footer>
        </>
    );
}

export default Home;