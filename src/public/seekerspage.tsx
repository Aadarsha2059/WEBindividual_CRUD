import React from 'react';
import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';
import '../assets/css/seekerspage.css';

function SeekersPage() {
    const apiCallToGet = useQuery({
        queryKey: ['GT_DATA'],
        queryFn() {
            return axios.get('http://localhost:8080/book/getAllData');
        },
    });

    const reserveApiCall = useMutation({
        mutationKey: ['RESERVE_BOOK'],
        mutationFn(id: any) {
            let payload={
                userId:localStorage.getItem("loggedUserID"),
                bookId:id,
            }
            return axios.post(`http://localhost:8080/seeker`,payload);
        },
        onSuccess() {
            apiCallToGet.refetch();
        },
    });

    const handleReserve = (id: any) => {
        reserveApiCall.mutate(id);
    };

    const deleteReserve=(id:any)=>{
        // alert(id)

        axios.delete("http://localhost:8080/seeker/"+ id).then(res=>{
            apiCallToGet.refetch();

        })
    }

    return (
        <div className="container">
            <h1>Books Available Now</h1>
            <table id="availableBooksTable">
                <thead>
                    <tr>
                        <th>Genre</th>
                        <th>Book Name</th>
                        <th>image</th>

                        <th>Action</th>
                        <th>Reservation Status</th>
                    </tr>
                </thead>
                <tbody>
                    {apiCallToGet?.data?.data?.map((book: any) => (
                        <tr key={book.id}>
                            <td>{book.genres}</td>
                            <td>{book.booksName}</td>
                            <td><img src={`data:image/jpeg;base64, `+book.image}  width={100}/></td>

                            <td>
                                {!book.userId ? (
                                    <button onClick={() => handleReserve(book.id)}>Reserve</button>
                                ) : (
<button onClick={() => deleteReserve(book.seekerId)}>Cancel Reserve</button>                                )}
                            </td>
                            <td>{book.userId ? 'Reserved' : 'Available'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SeekersPage;
