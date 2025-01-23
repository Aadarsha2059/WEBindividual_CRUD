import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'; 
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import video from "../assets/images/Sell goods.mp4";
import "../assets/css/donorspage.css";

interface BookData {
  id: number;
  genres: string;
  booksName: string;
  image: string; // This should be either a base64 string for images or PDF
  cost?: string; // Optional for seller
  type?: string; // Type for both donors and sellers
}

interface FormData {
  image: FileList;
  genres: string;
  booksName: string;
  cost?: string; // Cost input for sellers
  type?: string; // Type options for both donors and sellers
}

function DonorsPage() {
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const navigate = useNavigate(); 
  const [userType, setUserType] = useState<string>("donor");

  const apiCallToGet = useQuery<BookData[]>({
    queryKey: ["GT_DATa"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:8080/book/user/" + localStorage.getItem("loggedUserID"));
      console.log(response.data)
      return response.data;
    },
  });

  console.log(apiCallToGet)

  const apiCallTosave = useMutation({
    mutationKey: ["SAVE_BOOK_DATA"],
    mutationFn: async (data: FormData) => {
      const formData = new FormData();
      formData.append("image", data.image[0]);
      formData.append("booksName", data.booksName);
      formData.append("genres", data.genres);
      formData.append("cost", data.cost);
      formData.append("type",data.type);
      formData.append("userId", localStorage.getItem("loggedUserID") || "");
      formData.append("cost", userType === "donor" ? "0" : data.cost || "");
      if (data.type) {
        formData.append("type", data.type);
      }

      await axios.post("http://localhost:8080/book", formData);
    },
  });

  const submit = (data: FormData) => {
    apiCallTosave.mutate({ ...data, userId: localStorage.getItem("loggedUserID") }, {
      onSuccess() {
        alert(`${userType === "donor" ? "Book donated" : "Book listed for sale"} successfully!`);
        apiCallToGet.refetch();
      },
    });
  };

  const deleteApiCall = useMutation({
    mutationKey: ["DELETE_BOOK_DATA"],
    mutationFn: async (id: number) => {
      await axios.delete("http://localhost:8080/book/" + id);
    },
  });

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      deleteApiCall.mutate(id, {
        onSuccess() {
          apiCallToGet.refetch();
        },
      });
    }
  };

  const handleUserTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setUserType(value);
    if (value === "donor") {
      setValue("cost", "0");
    }
  };

  return (
    <>
      <video className="donors-page-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="container">
        <h1>{userType === "donor" ? "Donate My Book" : "Sell My Book"}</h1>

        <form onSubmit={handleSubmit(submit)} id="donateSellForm">
          <label htmlFor="userType">Choose Action:</label>
          <select
            id="userType"
            value={userType}
            onChange={handleUserTypeChange}
          >
            <option value="donor">Become a Donor</option>
            <option value="seller">Become a Seller</option>
          </select>

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

          <label htmlFor="bookType">Type:</label>
          <select id="bookType" {...register("type")} required>
            <option value="">Select Type</option>
            <option value="First Hand">First Hand</option>
            <option value="Second Hand">Second Hand</option>
            <option value="Second Hand & Proper Condition">Second Hand & Proper Condition</option>
          </select>

          {userType === "seller" ? (
            <>
              <label htmlFor="bookCost">Cost:</label>
              <input type="number" id="bookCost" {...register("cost")} required />
            </>
          ) : (
            <>
              <label htmlFor="bookCost">Cost: <span style={{ color: "green", fontWeight: "bold" }}>FREE*</span></label>
              <input
                type="number"
                id="bookCost"
                value="0"
                readOnly
              />
            </>
          )}

          <button type="submit" id="submitBtn">
            {userType === "donor" ? "Donate Here" : "List for Sale"}
          </button>
        </form>

        <h2>{userType === "donor" ? "Donated Books" : "Listed Books"}</h2>
        <table id="donatedBooksTable">
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Genre</th>
              <th>Book Name</th>
              {userType === "seller" && <th>Cost</th>}
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {apiCallToGet?.data?.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.genres}</td>
                <td>{book.booksName}</td>
                {userType === "seller" && <td>{book.cost}</td>}
                <td>{book.type}</td>
                <td>
                  <button
                    className="edit"
                    onClick={() => navigate(`/editBook/${book.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DonorsPage;
