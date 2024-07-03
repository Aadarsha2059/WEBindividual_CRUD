import { useNavigate } from "react-router-dom";
import "../assets/css/home.css"

import logo from '../assets/images/logo.png';
import tablePng from '../assets/images/table.png';

function Home(){

    const navigate= useNavigate();
    
    return (<>

    <section>

        <nav>

            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>

            <ul>
                <li><a href="Home">Home</a></li>
                <li onClick={()=>navigate("/login")}><a>Login as a Donor</a></li>
                <li><a href="loginseeker.html">Login as a Seeker</a></li>
                <li><a href="suggestionindex.html">Drop your suggestions</a></li>
                <li><a href="contact.html">Contact</a></li> 
            </ul>

            <div className="social_icon">
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-heart"></i>
            </div>

        </nav>

        <div className="main">

            <div className="main_tag">
                <h1>WELCOME TO<br/><span>BOOK DONORS NEPAL</span></h1>

                <p>
                    Reading books is a magical journey that expands our minds.
                    Through books, we can explore distant lands and touch the human soul.
                    Reading cultivates empathy, allowing us to understand others on deeper level.
                </p>
                <a href="#" className="main_btn">Learn More</a>

            </div>

            <div className="main_img">
                <img src={tablePng} alt="Table with books"/>
            </div>

        </div>

    </section>

    
    <div className="services">

        <div className="services_box">

            <div className="services_card">
                <i className="fa-solid fa-truck-fast"></i>
                <h3>Fast Delivery</h3>
                <p>
                    Books will be transported to the seeker's location via best modes of transportation.
                </p>
            </div>

            <div className="services_card">
                <i className="fa-solid fa-headset"></i>
                <h3>24 x 7 Services</h3>
                <p>
                    Donors can donate books any time they wish.
                    Seekers will receive books during day time only.
                </p>
            </div>

            <div className="services_card">
                <i className="fa-solid fa-tag"></i>
                <h3>Best Deal</h3>
                <p>
                    We will try our best to become a good mediator
                    between seeker and donor. 
                </p>
            </div>

            <div className="services_card">
                <i className="fa-solid fa-lock"></i>
                <h3>Secure Payment</h3>
                <p>
                    Seekers must pay the transportation charge.
                </p>
            </div>

        </div>

    </div>

   
    <div className="about">

        <div className="about_image">
            <img src="image/about.png" alt="About Us" />
        </div>
        <div className="about_tag">
            <h1>About Us</h1>
            <p>
                We are launching a book donation initiative aimed at connecting
                generous donors with eager book seekers across Nepal.
                Our website serves as a bridge, making it easy for donors to contribute their
                used books and for seekers to find the literary treasures they need
                within Nepal!!
            </p>
            
        </div>

    </div>

   

     <div className="featured_boks">

        <h1>Featured Books</h1>

        <div className="featured_book_box">

            <div className="featured_book_card">

                <div className="featurde_book_img">
                    <img src="image/book_1.jpg" />
                </div>

                <div className="featurde_book_tag">
                    <h2>Featured Books</h2>
                    <p className="donor">Donor= Bishnu Budhathoki</p>
                    <div className="categories">Thriller</div>
                   
                </div>               

            </div>

            <div className="featured_book_card">

                <div className="featurde_book_img">
                    <img src="image/book_2.jpg" />
                </div>

                <div className="featurde_book_tag">
                    <h2>Featured Books</h2>
                    <p className="donor">Donor=Sujal Basnet</p>
                    <div className="categories">Horror</div>
                    
                </div>               

            </div>

            <div className="featured_book_card">

                <div className="featurde_book_img">
                    <img src="image/book_3.jpg" />
                </div>

                <div className="featurde_book_tag">
                    <h2>Featured Books</h2>
                    <p className="donor">Donor=Anuj Singh</p>
                    <div className="categories">Romance</div>
                    
                </div>               

            </div>

            <div className="featured_book_card">

                <div className="featurde_book_img">
                    <img src="image/book_4.jpg" />
                </div>

                <div className="featurde_book_tag">
                    <h2>Featured Books</h2>
                    <p className="donor">Donor=Ishan Shrestha</p>
                    <div className="categories"> Romance</div>
                   
                </div>               

            </div>

            <div className="featured_book_card">

                <div className="featurde_book_img">
                    <img src="image/book_5.jpg" />
                </div>

                <div className="featurde_book_tag">
                    <h2>Featured Books</h2>
                    <p className="donor">Donor=Roshan Lamichhane</p>
                    <div className="categories">Fiction</div>
                    
                </div>               

            </div>
            
            <div className="featured_book_card">

                <div className="featurde_book_img">
                    <img src="image/book_6.jpg" />
                </div>

                <div className="featurde_book_tag">
                    <h2>Featured Books</h2>
                    <p className="donor">Donor=Chirayu Baij</p>
                    <div className="categories">Biography</div>
                    
                </div>               

            </div>

            <div className="featured_book_card">

                <div className="featurde_book_img">
                    <img src="image/book_7.png" />
                </div>

                <div className="featurde_book_tag">
                    <h2>Featured Books</h2>
                    <p className="donor">Donor= Suraj Tamang</p>
                    <div className="categories">Thriller</div>
                    
                   
                </div>               

            </div>

            <div className="featured_book_card">

                <div className="featurde_book_img">
                    <img src="image/book_8.png" />
                </div>

                <div className="featurde_book_tag">
                    <h2>Featured Books</h2>
                    <p className="donor">Donor= Rishan Shrestha</p>
                    <div className="categories"> Romance</div>
                   
                </div>               

            </div>

            <div className="featured_book_card">

                <div className="featurde_book_img">
                    <img src="image/book_9.jpg" />
                </div>

                <div className="featurde_book_tag">
                    <h2>Featured Books</h2>
                    <p className="donor">Donor= Dipesh Bohora</p>
                    <div className="categories">Thriller</div>
                    
                </div>               

            </div>

            <div className="featured_book_card">

                <div className="featurde_book_img">
                    <img src="image/book_10.png" />
                </div>

                <div className="featurde_book_tag">
                    <h2>Featured Books</h2>
                    <p className="donor">Donor= Uttam Sapkota</p>
                    <div className="categories">Love story</div>
                    
                </div>               

            </div>

            <div className="featured_book_card">

                <div className="featurde_book_img">
                    <img src="image/book_11.jpg" />
                </div>

                <div className="featurde_book_tag">
                    <h2>Featured Books</h2>
                    <p className="donor">Donor= Parash Mainali</p>
                    <div className="categories">Thriller</div>
                  
                </div>               

            </div>

            <div className="featured_book_card">

                <div className="featurde_book_img">
                    <img src="image/book_12.png" />
                </div>

                <div className="featurde_book_tag">
                    <h2>Featured Books</h2>
                    <p className="donor">Donor=Sangit Pokhrel</p>
                    <div className="categories">Biography</div>
                    
                </div>               

            </div>

            <div className="featured_book_card">

                <div className="featurde_book_img">
                    <img src="image/book_13.png" />
                </div>

                <div className="featurde_book_tag">
                    <h2>Featured Books</h2>
                    <p className="donor">Donor= Subash Kandel</p>
                    <div className="categories">Romance</div>
                    
                </div>               

            </div>

            <div className="featured_book_card">

                <div className="featurde_book_img">
                    <img src="image/book_14.png " />
                </div>

                <div className="featurde_book_tag">
                    <h2>Featured Books</h2>
                    <p className="donor">Donor= Aadarsha Babu Dhakal</p>
                    <div className="categories">Politics</div>
                   
                </div>               

            </div>

            <div className="featured_book_card">

                <div className="featurde_book_img">
                    <img src="image/book_15.png" />
                </div>

                <div className="featurde_book_tag">
                    <h2>Featured Books</h2>
                    <p className="donor">Donor= Adamya Neupane</p>
                    <div className="categories">Geopolitics</div>
                
                </div>               

            </div>

            

        </div>

    </div>




     <div className="reviews">
        <h1>Reviews</h1>

        <div className="review_box">

            <div className="review_card">
                <i className="fa-solid fa-quote-right"></i>
                <div className="card_top">
                    <img src="image/review_1.png" />
                </div>
                <div className="card">
                    <h2>Suraj Tamang</h2>
                    <p>"Aadarsha has developed a fantastic website that connects donors
                       and seekers in Nepal.This initiative by him will promote a culture of reading."
                    </p>
                    <div className="review_icon">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                </div>
            </div>

            <div className="review_card">
                <i className="fa-solid fa-quote-right"></i>
                <div className="card_top">
                    <img src="image/review_2.png" />
                </div>
                <div className="card">
                    <h2>Bishnu Budhathoki</h2>
                    <p>"The website developed by Mr Dhakal bridges the gap between those who
                        have books to give and those in need of them.This website makes books 
                        more accessible to users."
                    </p>
                    <div className="review_icon">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                </div>
            </div>

            <div className="review_card">
                <i className="fa-solid fa-quote-right"></i>
                <div className="card_top">
                    <img src="image/review_3.png" />
                </div>
                <div className="card">
                    <h2>Anuj Singh</h2>
                    <p>"The masterpiece creation by my friend Aadarsha.This web is a gem for 
                        book enthusiats in Nepal.This website will be the most visited website 
                        by the passionate readers from Nepal."
                    </p>
                    <div className="review_icon">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                </div>
            </div>

            <div className="review_card">
                <i className="fa-solid fa-quote-right"></i>
                <div className="card_top">
                    <img src="image/review_4.png" />
                </div>
                <div className="card">
                    <h2>Sujal Basnet</h2>
                    <p>"Book donors website is a shining example of using technology for social good.
                        This system is easy to use and straight forward."
                    </p>
                    <div className="review_icon">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                </div>
            </div>

        </div>

    </div>


  

     <footer>
        <div className="footer_main">

            <div className="tag">
                <img src="image/logo.png"/>
                <p>
                    "I wish my small effort to develop this website
                    will be worthy for them who wish to study 
                    and achieve their goals"- Dhakal Aadarsha Babu
                </p>

            </div>

            <div className="tag">
                <h1>Quick Link</h1>
                <a href="#">Home</a>
 
                <a href="#">Login as a donor</a>
                <a href="#">Contact</a>
                <a href="#">Login as a Seeker</a>
                <a href="#">Drop your suggestions</a>
                
            </div>


            <div className="tag">
                <h1>Follow Us</h1>
                <div className="social_link">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                </div>
                
            </div>

            <div className="tag">
                <h1>Newsletter</h1>
                <div className="search_bar">
                    <input type="text" placeholder="You email id here" />
                    <button type="submit">Subscribe</button>
                </div>                
            </div>            
            
        </div>

        <p className="end">All rights on<span><i className="fa-solid fa-face-grin"></i> Aadarsha Babu Dhakal</span></p>

</footer>

    </>)
}

export default Home;