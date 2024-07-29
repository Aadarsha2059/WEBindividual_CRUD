import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';
import video from '../assets/images/seekerpagevideo.mp4'; 
import '../assets/css/seekerspage.css';
 // Import the CSS for the logout button

function SeekersPage() {
    const navigate = useNavigate(); // Initialize useNavigate

    const apiCallToGet = useQuery({
        queryKey: ['GT_DATA'],
        queryFn() {
            return axios.get('http://localhost:8080/book/getAllData');
        },
    });

    const reserveApiCall = useMutation({
        mutationKey: ['RESERVE_BOOK'],
        mutationFn(id: any) {
            let payload = {
                userId: localStorage.getItem("loggedUserID"),
                bookId: id,
            };
            return axios.post(`http://localhost:8080/seeker`, payload);
        },
        onSuccess() {
            apiCallToGet.refetch();
        },
    });

    const handleReserve = (id: any) => {
        reserveApiCall.mutate(id);
    };

    const deleteReserve = (id: any) => {
        if (window.confirm("Are you sure you want to cancel the reservation of this book?")) {
            axios.delete("http://localhost:8080/seeker/" + id).then(res => {
                apiCallToGet.refetch();
            });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("loggedUserID"); // Clear the user ID from local storage
        navigate('/'); // Navigate back to the home page
    };

    return (
        <>
            <button
                className="logout-button"
                onClick={handleLogout}
            >
                LOG OUT...
            </button>
            <video className="seekers-page-video" autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
            <div className="container">
                <h1>Books Available Now</h1>
                <table id="availableBooksTable">
                    <thead>
                        <tr>
                            <th>Genre</th>
                            <th>Book Name</th>
                            <th>Image</th>
                            <th>Action</th>
                            <th>Reservation Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apiCallToGet?.data?.data?.map((book: any) => (
                            <tr key={book.id}>
                                <td>{book.genre}</td>
                                <td>{book.name}</td>
                                <td><img src={`data:image/jpeg;base64, ${book.image}`} width={100} alt={book.booksName} /></td>
                                <td>
                                    {!book.userId ? (
                                        <button onClick={() => handleReserve(book.id)}>Reserve</button>
                                    ) : (
                                        <button onClick={() => deleteReserve(book.seekerId)}>Cancel Reserve</button>
                                    )}
                                </td>
                                <td>{book.userId ? 'Reserved' : 'Available'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default SeekersPage;
