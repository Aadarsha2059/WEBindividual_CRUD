import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';
import '../assets/css/seekerspage.css';

function SeekersPage() {
    const navigate = useNavigate();
    const [dialogVisible, setDialogVisible] = useState(false);
    const [dialogData, setDialogData] = useState({ title: '', items: [] });
    const [filterCategory, setFilterCategory] = useState('');

    const apiCallToGet = useQuery({
        queryKey: ['GT_DATA'],
        queryFn() {
            return axios.get('http://localhost:8080/book/getAllData');
        },
    });

    const reserveApiCall = useMutation({
        mutationKey: ['RESERVE_BOOK'],
        mutationFn(id) {
            let payload = {
                userId: localStorage.getItem("loggedUserID"),
                bookId: id,
            };
            return axios.post('http://localhost:8080/seeker', payload);
        },
        onSuccess() {
            apiCallToGet.refetch();
        },
    });

    const handleReserve = (id) => {
        reserveApiCall.mutate(id);
    };

    const deleteReserve = (id) => {
        if (window.confirm("Are you sure you want to cancel the reservation of this book?")) {
            axios.delete(`http://localhost:8080/seeker/${id}`).then(() => {
                apiCallToGet.refetch();
            });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("loggedUserID");
        navigate('/');
    };

    const showDialog = (category) => {
        let data = [];
        if (category === 'Books & Notes') {
            data = [
                { name: 'Data Science', quantity: 5 },
                { name: 'DSA Computing Engineer', quantity: 3 },
            ];
        } else if (category === 'Electric & Musical') {
            data = [
                { name: 'Electric Guitar', quantity: 2 },
                { name: 'Keyboard', quantity: 4 },
            ];
        } else if (category === 'Stationery Products') {
            data = [
                { name: 'Notebooks', quantity: 10 },
                { name: 'Pens', quantity: 20 },
            ];
        }

        setDialogData({ title: category, items: data });
        setDialogVisible(true);
    };

    const closeDialog = () => {
        setDialogVisible(false);
    };

    const handleFilterChange = (event) => {
        setFilterCategory(event.target.value);
        // Logic to filter the books based on the selection can be added here
    };

    return (
        <div className="page-wrapper">
            <div className="sidebar">
                <div className="logo">
                    <h2>STU THRIFT</h2>
                </div>
                <h3>Categories</h3>
                <ul>
                    <li onClick={() => showDialog('Books & Notes')}>Books & Notes</li>
                    <li onClick={() => showDialog('Electric & Musical')}>Electric & Musical</li>
                    <li onClick={() => showDialog('Stationery Products')}>Stationery Products</li>
                    <li onClick={handleLogout}>Logout</li>
                </ul>
            </div>

            <div className="main-content">
                <div className="container">
                    <div className="dropdown-container" style={{ textAlign: 'right' }}>
                        <select className="filter-dropdown" onChange={handleFilterChange}>
                            <option value="">YOU WANT??</option>
                            <option value="free">I want free books</option>
                            <option value="buy">I want to buy books</option>
                        </select>
                    </div>

                    <h1>Books Available Now</h1>
                    <table id="availableBooksTable">
                        <thead>
                            <tr>
                                <th>Genre</th>
                                <th>Book Name</th>
                                <th>Cost</th>
                                <th>Type</th>

                                <th>Image</th>
                                <th>Action</th>
                                <th>Reservation Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {apiCallToGet?.data?.data?.map((book) => (
                                <tr key={book.id}>
                                    <td>{book.genre}</td>
                                    <td>{book.name}</td>
                                    <td>{book.cost}</td>
                                    <td>{book.type}</td>

                                    <td><img src={`data:image/jpeg;base64,${book.image}`} width={100} alt={book.name} /></td>
                                    <td>
                                        {!book.userId ? (
                                            <button onClick={() => handleReserve(book.id)}>Reserve</button>
                                        ) : (
                                            <button onClick={() => deleteReserve(book.seekerId)}>Cancel Reserve</button>
                                        )}
                                    </td>
                                    <td>{!book.userId ? 'Available' : 'Reserved'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {dialogVisible && (
                <div className="dialog-overlay">
                    <div className="dialog-box">
                        <h2>{dialogData.title}</h2>
                        <table className="dialog-table">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dialogData.items.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button onClick={closeDialog} className="close-btn">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SeekersPage;
