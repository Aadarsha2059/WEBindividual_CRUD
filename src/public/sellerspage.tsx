import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import video from "../assets/images/Sell goods.mp4"; 
import "../assets/css/sellerspage.css";

function SellersPage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [price, setPrice] = useState(200); // State to store price

  // Fetch listed books
  const apiCallToGet = useQuery({
    queryKey: ["GET_BOOKS_DATA"],
    queryFn() {
      return axios.get("http://localhost:8080/sellbook/user/" + localStorage.getItem("loggedUserID"));
    },
  });

  // Mutation to save new book
  const apiCallTosave = useMutation({
    mutationKey: ["SAVE_BOOK_DATA"],
    mutationFn(data) {
      const formData = new FormData();
      formData.append("image", data['image'][0]);
      formData.append("bookname", data['bookname']);
      formData.append("genre", data['genre']);
      formData.append("bookprice", data['bookprice']);
      formData.append("bookcondition", data['bookcondition']);
      formData.append("userId", localStorage.getItem("loggedUserID") || "");

      return axios.post("http://localhost:8080/sellbook", formData);
    },
  });

  const submit = (data: any) => {
    apiCallTosave.mutate(
      { ...data, price: price, userId: localStorage.getItem("loggedUserID") },
      {
        onSuccess() {
          alert("Book has been listed for sale successfully!");
          apiCallToGet.refetch();
        },
      }
    );
  };

  // Mutation to delete a book
  const deleteApiCall = useMutation({
    mutationKey: ["DELETE_BOOK_DATA"],
    mutationFn(id: any) {
      return axios.delete("http://localhost:8080/sellbook/" + id);
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
    setPrice(Number(event.target.value)); // Update price state when slider is changed
  };

  return (
    <>
      <button className="logout-button" onClick={handleLogout}>
        LOG OUT
      </button>
      <video className="sellers-page-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
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
          <select id="bookGenre" {...register("genre")} required>
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

          <label htmlFor="bookname">Book Name:</label>
          <input type="text" id="bookname" {...register("bookname")} required />

          <label htmlFor="price">Price (Rs):</label>
          <input
            type="range"
            id="price"
            value={price} // Bind value to state
            onChange={handleSliderChange} // Handle change event
            min="200"
            max="5000"
            step="20"
            required
          />
          <span>{`Price: Rs ${price}`}</span> {/* Display dynamic price below slider */}

          <label htmlFor="condition">Book Condition:</label>
          <select id="condition" {...register("condition")} required>
            <option value="">Select Condition</option>
            <option value="First Hand">First Hand</option>
            <option value="Second Hand & A bit Older">Second Hand & A bit Older</option>
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
                  {d.image && d.image.startsWith("JVBER") ? (
                    <embed
                      src={`data:application/pdf;base64,${d.image}`}
                      type="application/pdf"
                      frameBorder="0"
                      scrolling="auto"
                      height="200"
                      width="200"
                    />
                  ) : (
                    <img src={`data:image/jpeg;base64,${d.image}`} width={100} alt="Book" />
                  )}
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
