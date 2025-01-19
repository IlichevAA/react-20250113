import { createRoot } from "react-dom/client";
import { restaurants } from '../materials/mock.js';

const rootEl = document.getElementById("root");

const reactRoot = createRoot(rootEl);

reactRoot.render(
 <div>
  {restaurants.map((restaurant) => (
    <div key={restaurant.id}>
      <h1>{restaurant.name}</h1>
      <h3>Menu</h3>
      <ul>
        {restaurant.menu.map((menuItem) => (
          <li key={menuItem.id}>{menuItem.name}</li>
        ))}
      </ul>
      <h3>Reviews</h3>
      <ul>
        {restaurant.reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
    </div>
  ))}
  </div>
);
