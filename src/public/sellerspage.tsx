import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import video from "../assets/images/Sell goods.mp4";
import "../assets/css/sellerspage.css";

function SellersPage() {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const [price, setPrice] = useState(200); // State to store price
  const [errorMessage, setErrorMessage] = useState<string>(""); // State to store error message

  // Fetch books that the user has already listed
  const { data: books, refetch } = useQuery({
    queryKey: ["GET_BOOKS_DATA"],
    queryFn: () =>
      axios
        .get(
          `http://localhost:8080/sellbook/user/${localStorage.getItem(
            "loggedUserID"
          )}`
        )
        .then((res) => res.data),
    enabled: !!localStorage.getItem("loggedUserID"),
  });

  // Mutation to save a new book sale
  const apiCallTosave = useMutation({
    mutationKey: ["SAVE_BOOK_DATA"],
    mutationFn: (data: any) => {
      const formData = new FormData();
      formData.append("image", data.image[0]);
      formData.append("bookname", data.bookname);
      formData.append("genre", data.genre);
      formData.append("bookprice", String(price));
      formData.append("bookcondition", data.condition);
      formData.append("userId", localStorage.getItem("loggedUserID") || "");

      return axios.post("http://localhost:8080/sellbook", formData);
    },
    onSuccess: () => {
      alert("Book has been listed for sale successfully!");
      refetch();
      setErrorMessage(""); // Clear error message if successful
    },
    onError: () => {
      // Show error message if the request fails
      setErrorMessage("Books are not sold or listed. Please try again later!");
    },
  });

  const submit = (data: any) => {
    apiCallTosave.mutate(data);
  };

  // Mutation to delete a book
  const deleteApiCall = useMutation({
    mutationKey: ["DELETE_BOOK_DATA"],
    mutationFn: (id: any) => {
      return axios.delete(`http://localhost:8080/sellbook/${id}`);
    },
    onSuccess: () => {
      refetch();
    },
  });

  const handleDelete = (id: any) => {
    if (window.confirm("Are you sure you want to delete this book listing?")) {
      deleteApiCall.mutate(id);
    }
  };

  // Corrected handleLogout function
  const handleLogout = () => {
    // Clear local storage before redirecting
    localStorage.removeItem("loggedUserID");
    navigate("/"); // Redirect to the homepage or login page
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
            {...register("image", { required: true })}
            id="bookImage"
            accept=".png, .jpg, .jpeg, .pdf"
            required
          />

          <label htmlFor="bookGenre">Genre:</label>
          <select
            id="bookGenre"
            {...register("genre", { required: true })}
            required
          >
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
          <input
            type="text"
            id="bookname"
            {...register("bookname", { required: true })}
            required
          />

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
          <select
            id="condition"
            {...register("condition", { required: true })}
            required
          >
            <option value="">Select Condition</option>
            <option value="First Hand">First Hand</option>
            <option value="Second Hand & A bit Older">Second Hand & A bit Older</option>
            <option value="Second Hand & Recently Bought">Second Hand & Recently Bought</option>
          </select>

          <button type="submit">List for Sale</button>
        </form>

        {/* Error message for failed book sale */}
        {errorMessage && (
          <div style={{ color: "red", marginTop: "10px", fontWeight: "bold" }}>
            {errorMessage}
          </div>
        )}

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
            {books?.map((d: any) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.genre}</td>
                <td>{d.bookName}</td>
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
                    <img
                      src={`data:image/jpeg;base64,${d.image}`}
                      width={100}
                      alt="Book"
                    />
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
