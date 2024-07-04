window.onload = function() {
    const books = JSON.parse(localStorage.getItem('donatedBooks')) || [];
    const table = document.getElementById('availableBooksTable').getElementsByTagName('tbody')[0];

    books.forEach(book => {
        const newRow = table.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4); 

        cell1.innerHTML = `<img src="${book.bookImage}" alt="Book Image" width="100">`;
        cell2.textContent = book.bookGenre;
        cell3.textContent = book.bookName;
        cell4.innerHTML = `<button class="requestButton" data-book-id="${book.bookId}">I need this book</button>`;
        cell5.textContent = 'Available'; 
    });

    
    document.querySelectorAll('.requestButton').forEach(button => {
        button.addEventListener('click', function() {
            const bookId = this.getAttribute('data-book-id');
            confirmReservation(bookId);
        });
    });
};

function confirmReservation(bookId) {
    const table = document.getElementById('availableBooksTable');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

    for (let row of rows) {
        const rowBookId = row.querySelector('.requestButton').getAttribute('data-book-id');
        if (rowBookId == bookId) {
            if (row.getElementsByTagName('td')[4].textContent === 'Available') {
                if (confirm('Do you want to reserve this book?')) {
                    row.getElementsByTagName('td')[4].textContent = 'This book has been reserved';
                    row.querySelector('.requestButton').textContent = 'Cancel reservation';
                }
            } else if (row.getElementsByTagName('td')[4].textContent === 'This book has been reserved') {
                if (confirm('Do you want to cancel reservation of this book?')) {
                    row.getElementsByTagName('td')[4].textContent = 'Available';
                    row.querySelector('.requestButton').textContent = 'I need this book';
                }
            } else {
                alert('This book is already reserved.');
            }
            break;
        }
    }
}
