function donateBook() {
    const bookImage = document.getElementById('bookImage').files[0];
    const bookGenre = document.getElementById('bookGenre').value;
    const bookName = document.getElementById('bookName').value;

    if (!bookImage || !bookGenre || !bookName) {
        alert('Please fill in all fields.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const bookImageUrl = event.target.result;
        const bookData = {
            bookImage: bookImageUrl,
            bookGenre: bookGenre,
            bookName: bookName
        };

     
        let books = JSON.parse(localStorage.getItem('donatedBooks')) || [];
        books.push(bookData);

        
        localStorage.setItem('donatedBooks', JSON.stringify(books));

       
        addBookToTable(bookData);
    };
    reader.readAsDataURL(bookImage);
}

function addBookToTable(book) {
    const table = document.getElementById('donatedBooksTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.innerHTML = `<img src="${book.bookImage}" alt="Book Image" width="100">`;
    cell2.innerHTML = book.bookGenre;
    cell3.innerHTML = book.bookName;
}


window.onload = function() {
    const books = JSON.parse(localStorage.getItem('donatedBooks')) || [];
    books.forEach(book => addBookToTable(book));
};
