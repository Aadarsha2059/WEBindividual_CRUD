import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import '../assets/css/buyerspage.css';

function BuyersPage() {
    const navigate = useNavigate();

    // Fetch books data from the sellbook table
    const apiCallToGet = useQuery({
        queryKey: ['GET_BOOKS'],
        queryFn: () => axios.get('http://localhost:8080/sellbook/getAllBooks'),
    });

    // Handle the purchase of the book
    const purchaseApiCall = useMutation({
        mutationKey: ['BUY_BOOK'],
        mutationFn: (id: number) => {
            const payload = {
                userId: localStorage.getItem('loggedUserID'),
                bookId: id,
            };
            return axios.post('http://localhost:8080/buyer', payload);
        },
        onSuccess: () => {
            apiCallToGet.refetch();
        },
    });

    // Cart click handler
    const handleCartClick = () => {
        navigate('/cart');
    };

    return (
        <div className="page-wrapper">
            <div className="sidebar">
                <div className="logo">
                    <h2>Stu-Thrift</h2>
                </div>
                <h3>Categories</h3>
                <ul>
                    <li>Books</li>
                    <li>Electronics</li>
                    <li>Furniture</li>
                    <li>Stationery</li>
                    <li>Clothing</li>
                </ul>
            </div>

            <div className="main-content">
                <nav className="navbar">
                    <div className="navbar-left">
                        <h1 className="page-heading">BUY GOODS</h1>
                    </div>
                    <div className="navbar-right">
                        <input
                            type="text"
                            placeholder="Search"
                            className="search-input"
                        />
                        <button className="search-btn">
                            <FaSearch />
                        </button>
                        <button className="cart-icon" onClick={handleCartClick}>
                            <FaShoppingCart />
                        </button>
                    </div>
                </nav>

                <div className="books-container">
                    {apiCallToGet?.data?.data?.map((book: any) => (
                        <div className="book-card" key={book.id}>
                            <img
                                src={`data:image/jpeg;base64,${book.image}`}
                                alt={book.name}
                                className="book-image"
                            />
                            <div className="book-info">
                                <h3>{book.name}</h3>
                                <p>Genre: {book.genre}</p>
                                <p>Price: ₹{book.bookprice}</p>
                                <p>Condition: {book.bookcondition}</p>
                                <button
                                    className="buy-btn"
                                    onClick={() => purchaseApiCall.mutate(book.id)}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BuyersPage;
