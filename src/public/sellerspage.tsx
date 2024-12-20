import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import "../assets/css/sellerspage.css";

function SellersPage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [price, setPrice] = useState(200);  // State to store price

  const apiCallToGet = useQuery({
    queryKey: ["GET_BOOKS_DATA"],
    queryFn() {
      return axios.get("http://localhost:8080/book/user/" + localStorage.getItem("loggedUserID"));
    },
  });

  const apiCallTosave = useMutation({
    mutationKey: ["SAVE_BOOK_DATA"],
    mutationFn(data) {
      const formData = new FormData();
      formData.append("image", data['image'][0]);
      formData.append("booksName", data['booksName']);
      formData.append("genres", data['genres']);
      formData.append("price", data['price']);
      formData.append("condition", data['condition']);
      formData.append("userId", localStorage.getItem("loggedUserID") || "");

      return axios.post("http://localhost:8080/book", formData);
    },
  });

  const submit = (data: any) => {
    apiCallTosave.mutate({ ...data, price: price, userId: localStorage.getItem("loggedUserID") }, {
      onSuccess() {
        alert("Book has been listed for sale successfully!");
        apiCallToGet.refetch();
      }
    });
  };

  const deleteApiCall = useMutation({
    mutationKey: ["DELETE_BOOK_DATA"],
    mutationFn(id: any) {
      return axios.delete("http://localhost:8080/book/" + id);
    },
  });

  const handleDelete = (id: any) => {
    if (window.confirm("Are you sure you want to delete this book listing?")) {
      deleteApiCall.mutate(id, {
        onSuccess() {
          apiCallToGet.refetch();
        },
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedUserID");
    navigate('/');
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));  // Update price state when slider is changed
  };

  return (
    <>
      <button className="logout-button" onClick={handleLogout}>
        LOG OUT
      </button>
      <div className="container">
        <h1>Sell Your Book</h1>
        <form onSubmit={handleSubmit(submit)} id="sellBookForm">
          <label htmlFor="bookImage">Book Image / File:</label>
          <input
            type="file"
            {...register("image")}
            id="bookImage"
            accept=".png, .jpg, .jpeg, .pdf"
            required
          />

          <label htmlFor="bookGenre">Genre:</label>
          <select id="bookGenre" {...register("genres")} required>
            <option value="">Select Genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
            <option value="Biography">Biography</option>
            <option value="Poetry">Poetry</option>
            <option value="Religion">Religion</option>
            <option value="Spirituality">Spirituality</option>
          </select>

          <label htmlFor="bookName">Book Name:</label>
          <input type="text" id="bookName" {...register("booksName")} required />

          <label htmlFor="price">Price (Rs):</label>
          <input
            type="range"
            id="price"
            value={price}  // Bind value to state
            onChange={handleSliderChange}  // Handle change event
            min="200"
            max="5000"
            step="20"
            required
          />
          <span>{`Price: Rs ${price}`}</span>  {/* Display dynamic price below slider */}

          <label htmlFor="condition">Book Condition:</label>
          <select id="condition" {...register("condition")} required>
            <option value="">Select Condition</option>
            <option value="First Hand">First Hand</option>
            <option value="Second Hand">Second Hand & A bit Older</option>
            <option value="Second Hand & Recently Bought">Second Hand & Recently Bought</option>
          </select>

          <button type="submit">List for Sale</button>
        </form>

        <h2>Your Listed Books</h2>
        <table>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Genre</th>
              <th>Book Name</th>
              <th>Price</th>
              <th>Condition</th>
              <th>File</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {apiCallToGet?.data?.data?.map((d: any) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.genres}</td>
                <td>{d.booksName}</td>
                <td>{d.price}</td>
                <td>{d.condition}</td>
                <td>
                  <img src={`data:image/jpeg;base64,${d.image}`} width={100} alt="Book" />
                </td>
                <td>
                  <button onClick={() => handleDelete(d.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SellersPage;
