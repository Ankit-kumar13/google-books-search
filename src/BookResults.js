import Book from "./Book"

const BookResults = ({books}) => {
    return (
        <div className="results-wrapper">
        {
            !books.length ? (<h1>No books Found</h1>) : (books.map(book => (
            
            <Book 
                authors={book.volumeInfo.authors}
                id={book.id}
                key={book.id}
                title={book.volumeInfo.title}
                subtitle={book.volumeInfo.subtitle}
                thumbnail={book?.volumeInfo?.imageLinks?.smallThumbnail && book.volumeInfo.imageLinks.smallThumbnail}
                previewLink={book.volumeInfo.previewLink}
                publisher={book.volumeInfo.publisher}
                publishedDate={book.volumeInfo.publishedDate}
                listPrice={book?.saleInfo?.listPrice?.amount && book.saleInfo.listPrice.amount}
                offerPrice = {book?.saleInfo?.retailPrice?.amount && book.saleInfo.retailPrice.amount}
            />
            )))
        }
    </div>
    )
}

export default BookResults;