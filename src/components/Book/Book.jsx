import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Book({ book }) {
  const {bookId, bookName, author, image, category, tags } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card card-compact bg-base-100 shadow-xl p-5">
        <figure className="bg-slate-700">
          <img
            className="lg:h-[166px] md:h-[166px]"
            src={image}
            alt={bookName}
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            {tags.map((tag, idx) => (
              <div key={idx}>
                <p className=" border rounded-xl px-2 py-1 text-green-500 bg-slate-700 ">
                  {tag}
                </p>
              </div>
            ))}
          </div>

          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>
          <div className="flex justify-between items-center border-t border-dashed mt-2 pt-2">
            <div>
              <p>{category}</p>
            </div>
            <div className="flex items-center">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
};
