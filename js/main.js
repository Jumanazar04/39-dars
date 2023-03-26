const books = [ 
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, genre: 'Fiction' }, 
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, genre: 'Fiction' }, 
        { id: 3, title: '1984', author: 'George Orwell', year: 1949, genre: 'Science Fiction' }, 
        { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, genre: 'Fiction' }, 
        { id: 5, title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, genre: 'Fantasy' },
];



const row = document.querySelector('.row');

const renderedBooks = books.map((element) => {
        return `
        <div class="card col-lg-3 p-3">
                <p>Id${element.id}:</p>
                <p>Title:${element.title}</p>
                <h3>Name:${element.author}</h3>
                <span>Year:${element.year}</span>
                <span>Ganre:${element.genre}</span>
        </div>
        `
})

row.innerHTML = renderedBooks.join();


