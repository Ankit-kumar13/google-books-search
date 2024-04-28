const Book = (props) => {
    const { authors, key, title, subtitle, thumbnail, previewLink, publisher, id, publishedDate, listPrice, offerPrice } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (thumbnail) {
    hero = thumbnail;
  }
  return (
    <div className="book-card-wrapper">
        <a to={`/books/${id}`} className="">
            <img className="product-image" src={thumbnail} alt={title} />
        </a>

        <div className="product-card-body">
            {/* <h1>{title}</h1>
            <span>{subtitle}</span>
            <h2>{`${authors[0]} — ${publisher}`}</h2>
            <a href={previewLink} target="_blank"> Preview Link</a> */}


            <a href={previewLink} target="_blank">
              <div className="product-card-content">
                <div className="product-title mb-3">
                  {title}
                </div>
                <div className="product-desc mb-3">
                  {subtitle}
                </div>
                <div className="product-author">
                  {authors[0]}
                </div>
              </div>
            </a>

            <a href={previewLink} target="_blank">
              <div className="product-footer">
                <div>{publishedDate}</div>
                <div className="cart-price">
                  <span className="price">{listPrice}</span>
                  <span className="offer-price">{offerPrice}</span>
                </div>
              </div>

              <div className="add-to-cart-parent">
                <div className="cart-parent">
                  <button className="cart-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            </a>
        </div>
 
    </div>
  );
};

export default Book;