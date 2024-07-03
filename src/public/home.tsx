import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/home.css';

import logo from '../assets/images/logo.png';
import tablePng from '../assets/images/table.png';
import aboutImg from '../assets/images/about.png';
import book1 from '../assets/images/book_1.jpg';
import book2 from '../assets/images/book_2.jpg';
import book3 from '../assets/images/book_3.jpg';
import book4 from '../assets/images/book_4.jpg';
import book5 from '../assets/images/book_5.jpg';
import book6 from '../assets/images/book_6.jpg';
import book7 from '../assets/images/book_7.png';
import book8 from '../assets/images/book_8.png';
import book9 from '../assets/images/book_9.jpg';
import book10 from '../assets/images/book_10.png';
import book11 from '../assets/images/book_11.jpg';
import book12 from '../assets/images/book_12.png';
import book13 from '../assets/images/book_13.png';
import book14 from '../assets/images/book_14.png';
import book15 from '../assets/images/book_15.png';
import nirajan from '../assets/images/nirajan.png';
import chirayu from '../assets/images/chirayu.png';
import suraj from '../assets/images/suraj.png';
import anuj from '../assets/images/anuj.png';

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
                        <li onClick={() => navigate("/login")}><a>Login as a Donor</a></li>
                        <li onClick={()=>navigate("/loginseeker")}><a>Login as a Seeker</a></li>
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
                        <h1>WELCOME TO<br /><span>BOOK DONORS NEPAL</span></h1>
                        <p>
                            Reading books is a magical journey that expands our minds.
                            Through books, we can explore distant lands and touch the human soul.
                            Reading cultivates empathy, allowing us to understand others on a deeper level.
                        </p>
                        <a href="#" className="main_btn">Learn More</a>
                    </div>
                    <div className="main_img">
                        <img src={tablePng} alt="Table with books" />
                    </div>
                </div>
            </section>

            <section className="services">
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
            </section>

            <section className="about">
                <div className="about_image">
                    <img src={aboutImg} alt="About Us" />
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
            </section>

            <section className="featured_books">
                <h1>Featured Books</h1>
                <div className="featured_book_box">
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book1} alt="Book 1" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Book Title</h2>
                            <p className="donor">Donor: Bishnu Budhathoki</p>
                            <div className="categories">Thriller</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book2} alt="Book 2" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Book Title</h2>
                            <p className="donor">Donor: Sujal Basnet</p>
                            <div className="categories">Horror</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book3} alt="Book 3" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Book Title</h2>
                            <p className="donor">Donor: Anuj Singh</p>
                            <div className="categories">Romance</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book4} alt="Book 4" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Book Title</h2>
                            <p className="donor">Donor: Ishan Shrestha</p>
                            <div className="categories">Romance</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book5} alt="Book 5" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Book Title</h2>
                            <p className="donor">Donor: Roshan Lamichhane</p>
                            <div className="categories">Fiction</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book6} alt="Book 6" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Book Title</h2>
                            <p className="donor">Donor: Chirayu Baij</p>
                            <div className="categories">Biography</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book7} alt="Book 7" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Book Title</h2>
                            <p className="donor">Donor: Suraj Tamang</p>
                            <div className="categories">Thriller</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book8} alt="Book 8" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Book Title</h2>
                            <p className="donor">Donor: Rishan Shrestha</p>
                            <div className="categories">Romance</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book9} alt="Book 9" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Book Title</h2>
                            <p className="donor">Donor: Dipesh Bohora</p>
                            <div className="categories">Thriller</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book10} alt="Book 10" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Book Title</h2>
                            <p className="donor">Donor: Ishwor Paudel</p>
                            <div className="categories">Romance</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book11} alt="Book 11" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Book Title</h2>
                            <p className="donor">Donor: Sandesh Sharma</p>
                            <div className="categories">Horror</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book12} alt="Book 12" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Book Title</h2>
                            <p className="donor">Donor: Nabin Yadav</p>
                            <div className="categories">Romance</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book13} alt="Book 13" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Book Title</h2>
                            <p className="donor">Donor: Ankit Shrestha</p>
                            <div className="categories">Romance</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book14} alt="Book 14" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Book Title</h2>
                            <p className="donor">Donor: Aayush Kafle</p>
                            <div className="categories">Science</div>
                        </div>
                    </div>
                    <div className="featured_book_card">
                        <div className="featured_book_img">
                            <img src={book15} alt="Book 15" />
                        </div>
                        <div className="featured_book_tag">
                            <h2>Book Title</h2>
                            <p className="donor">Donor: Rahul Poddar</p>
                            <div className="categories">Poetry</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="review">
                <h1>Client Reviews</h1>
                <div className="review_box">
                    <div className="review_card">
                        <div className="review_image">
                            <img src={nirajan} alt="Reviewer 1" />
                        </div>
                        <div className="review_tag">
                            <h2>Client Review</h2>
                            <p className="client">Client: Nirajan Bhattarai</p>
                            <p className="details">
                                It's my great privilege to thank the donor and Book Donors Nepal.
                                Great effort by Aadarsha to connect donors and seekers within Nepal.
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
                                It's my great privilege to thank the donor and Book Donors Nepal.
                                I got a book for my study which helped me a lot. I appreciate your service.
                            </p>
                        </div>
                    </div>
                    <div className="review_card">
                        <div className="review_image">
                            <img src={anuj} alt="Reviewer 3" />
                        </div>
                        <div className="review_tag">
                            <h2>Client Review</h2>
                            <p className="client">Client: Anuj Singh</p>
                            <p className="details">
                                It's my great privilege to thank the donor and Book Donors Nepal.
                                It will be best for readers and will promote reading culture.Hats off to developer.
                            </p>
                        </div>
                    </div>
                    <div className="review_card">
                        <div className="review_image">
                            <img src={suraj} alt="Reviewer 4" />
                        </div>
                        <div className="review_tag">
                            <h2>Client Review</h2>
                            <p className="client">Client: Suraj Tamang</p>
                            <p className="details">
                                This website helped me to find and study novels during my summer vacations.
                                Awesome effort by my friend Aadarsha.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <h1>Book Donors Nepal 2024</h1>
                <p>
                   BOOK DONORS NEPAL 2024...BE CONNECTED WITH US FOR UPDATES!!!!
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

                <p className="end">All rights on<span><i className="fa-solid fa-face-grin"></i> Aadarsha Babu Dhakal</span></p>
            </footer>
        </>
    );
}

export default Home;
