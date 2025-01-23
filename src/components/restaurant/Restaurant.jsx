import { DishCounter } from "../dish_counter/DishCounter";

export const Restaurant = ({ restaurant }) => {
  const { menu, reviews } = restaurant;

  return (
    <div>
      {Boolean(menu.length != 0) && (
        <>
          <h3>Menu</h3>
          <ul>
            {menu.map((menuItem) => (
              <li key={menuItem.id}>
                {menuItem.name} <DishCounter />
              </li>
            ))}
          </ul>
        </>
      )}
      {Boolean(reviews.length != 0) && (
        <>
          <h3>Reviews</h3>
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>{review.text}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
