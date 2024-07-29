import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import video from "../assets/images/finaldonor.mp4"; 
import "../assets/css/donorspage.css";

function DonorsPage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate(); // Initialize useNavigate

  const apiCallToGet = useQuery({
    queryKey: ["GT_DATa"],
    queryFn() {
      return axios.get("http://localhost:8080/book/user/" + localStorage.getItem("loggedUserID"));
    },
  });

  console.log(apiCallToGet?.data?.data);

  const apiCallTosave = useMutation({
    mutationKey: ["SAVE_BOOK_DATA"],
    mutationFn(data) {
      console.log(data['image'][0]);
      const formData = new FormData();
      formData.append("image", data['image'][0]);
      formData.append("booksName", data['booksName']);
      formData.append("genres", data['genres']);
      formData.append("userId", localStorage.getItem("loggedUserID") || "");

      return axios.post("http://localhost:8080/book", formData);
    },
  });

  const submit = (data: any) => {
    console.log({ ...data, userId: localStorage.getItem("loggedUserID") });
    apiCallTosave.mutate({ ...data, userId: localStorage.getItem("loggedUserID") }, {
      onSuccess(res) {
        alert("Book has been donated successfully!"); // Alert message added here
        apiCallToGet.refetch();
      }
    });
    axios.post("http://localhost:8080/book", { ...data, userId: localStorage.getItem("loggedUserID") }).then(res => {
      console.log(res);
      alert(res?.data?.message);
    });
  };

  const deleteApiCall = useMutation({
    mutationKey: ["DELETE_BOOK_DATA"],
    mutationFn(id: any) {
      return axios.delete("http://localhost:8080/book/" + id);
    },
  });

  const handleDelete = (id: any) => {
    if (window.confirm("Are you sure you want to delete this donated book?")) {
      deleteApiCall.mutate(id, {
        onSuccess() {
          apiCallToGet.refetch();
        },
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedUserID"); // Clear the user ID from local storage
    navigate('/'); // Navigate back to the home page
  };

  return (
    <>
      <button className="logout-button" onClick={handleLogout}>
        LOG OUT
      </button>
      <video className="donors-page-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="container">
        <h1>Donate My Book</h1>
        <form onSubmit={handleSubmit(submit)} id="donatehtmlForm">
          <label htmlFor="bookImage">Book Image / File:</label>
          <input
            type="file"
            {...register("image")}
            id="bookImage"
            accept=".png, .jpg, .jpeg, .pdf, .doc, .docx"
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

          <button type="submit" id="submitBtn">Donate Here</button>
        </form>

        <h2>Donated Books</h2>
        <table id="donatedBooksTable">
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Genre</th>
              <th>Book Name</th>
              <th>File</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {apiCallToGet?.data?.data?.map((d: any) => {
              const isPdf = d.image && d.image.startsWith("JVBER");
              return (
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.genres}</td>
                  <td>{d.booksName}</td>
                  <td>
                    {isPdf ? (
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
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DonorsPage;
