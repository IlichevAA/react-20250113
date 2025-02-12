import { useState } from "react";
import { restaurants } from "../../../materials/mock";
import { Restaurant } from "./Restaurant";
import { Tab } from "../tab/Tab";

export const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants && restaurants.length > 0 ? restaurants[0].id : null
  );

  const activeRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId
  );

  const handleSetActiveRestaurantId = (id) => {
    if (activeRestaurantId == id) {
      return;
    }

    setActiveRestaurantId(id);
  };

  return (
    <>
      <h1>Restaurants</h1>
      {restaurants.map(({ id, name }) => (
        <Tab
          key={id}
          title={name}
          onClick={() => handleSetActiveRestaurantId(id)}
          isActive={id == activeRestaurantId}
        />
      ))}
      {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
    </>
  );
};
