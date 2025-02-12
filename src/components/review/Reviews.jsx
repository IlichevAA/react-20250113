import { Review } from "./Review";

export const Reviews = ({ reviews }) => {
  return (
    Boolean(reviews && reviews.length > 0) && (
      <>
        <h3>Reviews</h3>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <Review review={review} />
            </li>
          ))}
        </ul>
      </>
    )
  );
};
