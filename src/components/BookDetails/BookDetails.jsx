import { useLoaderData, useParams } from "react-router-dom";
import addToStoredReadList from "../Utils/addToDB";
import setWishList from "../Utils/wishList";

export default function BookDetails() {
  const { bookId } = useParams();
  const data = useLoaderData();
  const book = data.find(
    (bookDetails) => bookDetails.bookId === parseInt(bookId)
  );
  const {
    bookName,
    review,
    author,
    image,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handelMarkAsRead = (id) => {
    addToStoredReadList(id);
  };


  const handleWishList =(id)=>{
    setWishList(id);
  }

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={image}
          className=" rounded-lg shadow-2xl lg:h-[564px] max-sm:h-[364px] mb-6"
        />
        <div className="lg:p-10">
          <h1 className="lg:text-5xl font-bold">{bookName}</h1>
          <p className="py-3">By : {author}</p>
          <p>{category}</p>
          <div className=" border-t border-dashed mt-2 pt-2">
            <p>{review}</p>
            <div className="flex gap-6 items-center">
              <p>Tags :</p>
              {tags.map((tag, idx) => (
                <div key={idx}>
                  <p className=" py-1 text-green-500">{tag}</p>
                </div>
              ))}
            </div>
            <div>
              <p>Number of pages : {totalPages}</p>
              <p>Publisher : {publisher}</p>
              <p>Year of Publishing : {yearOfPublishing}</p>
              <p>Rating : {rating}</p>
            </div>
            <div className="flex gap-6 mt-3">
              <button
                onClick={() => handelMarkAsRead(bookId)}
                className="btn btn-outline btn-accent"
              >
                Mark as Read
              </button>
              <button onClick={()=>handleWishList(bookId)} className="btn btn-active btn-accent">
                Add to Wish List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
