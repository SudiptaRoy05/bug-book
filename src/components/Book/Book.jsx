import PropTypes from "prop-types";

export default function Book({ book }) {
  const { bookName, author, image, rating, category, tags } = book;
  return (
    <div className="card card-compact bg-base-100 shadow-xl p-5">
      <figure>
        <img className="lg:h-[300px] md:h-[300px]" src={image} alt={bookName} />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          {tags.map((tag, idx) => (
            <div key={idx}>
             <p className=" border rounded-xl px-2 py-1 text-green-500 ">{tag}</p>
            </div>
          ))}
        </div>

        <h2 className="card-title">{bookName}</h2>
        <p>By : {author}</p>
        <div className="flex justify-between items-center mt-0">
          <div>
            <p>{category}</p>
          </div>
          <div>
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
};
