// import { useState } from "react";
// import "../assets/css/donorspage.css";

// function DonorsPage() {
//   const [bookImage, setBookImage] = useState(null);
//   const [bookGenre, setBookGenre] = useState("");
//   const [bookName, setBookName] = useState("");

//   const handleFileChange = (event) => {
//     setBookImage(event.target.files[0]);
//   };

//   const handleGenreChange = (event) => {
//     setBookGenre(event.target.value);
//   };

//   const handleNameChange = (event) => {
//     setBookName(event.target.value);
//   };

//   const donateBook = () => {
//     if (!bookImage || !bookGenre || !bookName) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     const reader = new FileReader();
//     reader.onload = function (event) {
//       const bookData = {
//         bookId: generateBookId(),
//         bookImage: event.target.result,
//         bookGenre: bookGenre,
//         bookName: bookName,
//       };

//       const books = JSON.parse(localStorage.getItem("donatedBooks")) || [];
//       books.push(bookData);
//       localStorage.setItem("donatedBooks", JSON.stringify(books));
//       addBookToTable(bookData);
//       resetForm();
//     };

//     reader.readAsDataURL(bookImage);
//   };

//   const generateBookId = () => {
//     const books = JSON.parse(localStorage.getItem("donatedBooks")) || [];
//     const lastBookId = books.length > 0 ? books[books.length - 1].bookId : 0;
//     return lastBookId + 1;
//   };

//   const addBookToTable = (book) => {
//     const table = document.getElementById("donatedBooksTable").getElementsByTagName("tbody")[0];
//     const newRow = table.insertRow();
//     newRow.setAttribute("data-book-id", book.bookId);

//     const cell1 = newRow.insertCell(0);
//     const cell2 = newRow.insertCell(1);
//     const cell3 = newRow.insertCell(2);
//     const cell4 = newRow.insertCell(3);
//     const cell5 = newRow.insertCell(4);

//     cell1.textContent = book.bookId;
//     if (book.bookImage.startsWith("data:image")) {
//       cell2.innerHTML = `<img src="${book.bookImage}" alt="Book Image" width="100">`;
//     } else {
//       cell2.textContent = "File Uploaded";
//     }
//     cell3.textContent = book.bookGenre;
//     cell4.textContent = book.bookName;
//     cell5.innerHTML = `
//       <button onclick="deleteBook(${book.bookId})">Delete</button>
//     `;
//   };

//   const resetForm = () => {
//     setBookImage(null);
//     setBookGenre("");
//     setBookName("");
//   };

//   const deleteBook = (bookId) => {
//     let books = JSON.parse(localStorage.getItem("donatedBooks")) || [];
//     books = books.filter((book) => book.bookId !== bookId);
//     localStorage.setItem("donatedBooks", JSON.stringify(books));
//     loadBooks();
//   };

//   const loadBooks = () => {
//     const tableBody = document.getElementById("donatedBooksTable").getElementsByTagName("tbody")[0];
//     tableBody.innerHTML = "";
//     const books = JSON.parse(localStorage.getItem("donatedBooks")) || [];
//     books.forEach((book) => {
//       addBookToTable(book);
//     });
//   };

//   // Load books on initial page load
//   window.onload = function () {
//     loadBooks();
//   };

//   return (
//     <div className="container">
//       <h1>Donate My Book</h1>
//       <form id="donateForm">
//         <label htmlFor="bookImage">Book Image / File:</label>
//         <input type="file" id="bookImage" name="bookImage" accept=".png, .pdf, .doc, .docx" onChange={handleFileChange} required />

//         <label htmlFor="bookGenre">Genre:</label>
//         <select id="bookGenre" name="bookGenre" onChange={handleGenreChange} value={bookGenre} required>
//           <option value="">Select Genre</option>
//           <option value="Fiction">Fiction</option>
//           <option value="Non-Fiction">Non-Fiction</option>
//           <option value="Science">Science</option>
//           <option value="History">History</option>
//           <option value="Biography">Biography</option>
//           <option value="Poetry">Poetry</option>
//           <option value="Religion">Religion</option>
//           <option value="Spirituality">Spirituality</option>
//         </select>

//         <label htmlFor="bookName">Book Name:</label>
//         <input type="text" id="bookName" name="bookName" value={bookName} onChange={handleNameChange} required />

//         <button type="button" id="submitBtn" onClick={donateBook}>
//           Donate Here
//         </button>
//       </form>

//       <h2>Donated Books</h2>
//       <table id="donatedBooksTable">
//         <thead>
//           <tr>
//             <th>Book ID</th>
//             <th>Book Image / File</th>
//             <th>Genre</th>
//             <th>Book Name</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>{/* Donated books will be displayed here */}</tbody>
//       </table>
//     </div>
//   );
// }

// export default DonorsPage;
