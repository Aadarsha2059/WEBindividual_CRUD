import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';
import '../assets/css/seekerspage.css';

function SeekersPage() {
    const navigate = useNavigate();
    const [dialogVisible, setDialogVisible] = useState(false);
    const [dialogData, setDialogData] = useState({
        title: '',
        items: []
    });

    const [userDetails,setUserDetails]=useState();

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

    const userDetail = useMutation({
        mutationKey: ['USER_DETAILS'],
        mutationFn(id) {
            return axios.get('http://localhost:8080/user/'+ id);
        }
    });

    const handleReserve = (id) => {
        userDetail.mutate(id,{
            onSuccess:(res)=>{
                console.log(res)
                setUserDetails(res?.data)

                showDialogForRow(res?.data)
            }
        })
        // reserveApiCall.mutate(id);
    };

    const confirmReserve=(id)=>{
         reserveApiCall.mutate(id,{
            onSuccess:(res)=>{
                closeDialog()
            }
         });
    }

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

    const showDialogForRow = (data) => {
        console.log(data)
        setDialogData({
            title: 'Confirm Your Transaction',
            items: [
                { label: 'Id', value: data.id },
                { label: 'Username', value: data?.userName },
                { label: 'Email', value: data?.email },
                { label: 'Address', value: data?.address },
            ],
        });
        setDialogVisible(true);
    };

    const showDialogForCategory = (category) => {
        let data = [];
        if (category === 'Books & Notes') {
            data = [
                { label: 'Computer Book 1', value: 'Available' },
                { label: 'Computer Book 2', value: 'Available' },
                { label: 'Computer Book 3', value: 'Available' },
                { label: 'Computer Book 4', value: 'Available' },
            ];
        } else if (category === 'Electric & Musical') {
            data = [
                { label: 'Guitar 1', value: 'New' },
                { label: 'Guitar 2', value: 'New' },
                { label: 'Guitar 3', value: 'New' },
                { label: 'Iron 1', value: 'New' },
                { label: 'Iron 2', value: 'New' },
            ];
        } else if (category === 'Stationery Products') {
            data = [
                { label: 'Study Table 1', value: 'Available' },
                { label: 'Study Table 2', value: 'Available' },
                { label: 'Calculator 1', value: 'Available' },
            ];
        }

        setDialogData({
            title: category,
            items: data,
        });
        setDialogVisible(true);
    };

    const closeDialog = () => {
        setDialogVisible(false);
    };

    return (
        <div className="page-wrapper">
            <div className="sidebar">
                <div className="logo">
                    <h2>STU THRIFT</h2>
                </div>
                <h3>Categories</h3>
                <ul>
                    <li onClick={() => showDialogForCategory('Books & Notes')}>Books & Notes</li>
                    <li onClick={() => showDialogForCategory('Electric & Musical')}>Electric & Musical</li>
                    <li onClick={() => showDialogForCategory('Stationery Products')}>Stationery Products</li>
                    <li onClick={handleLogout}>Logout</li>
                </ul>
            </div>

            <div className="main-content">
                <div className="container">
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
                                    <th>Detail</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dialogData.items.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.label}</td>
                                        <td>{item.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="dialog-actions">
                            <button className="cancel-btn" onClick={closeDialog} style={{ backgroundColor: 'red', color: 'white' }}>Cancel</button>
                            <button className="confirm-btn" onClick={() =>confirmReserve(userDetails?.id)} style={{ backgroundColor: 'blue', color: 'white' }}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SeekersPage;
