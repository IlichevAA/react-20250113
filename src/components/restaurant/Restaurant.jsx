import { Menu } from "../menu/Menu";
import { Reviews } from "../review/Reviews";

export const Restaurant = ({ restaurant }) => {
  const { menu, reviews } = restaurant;

  return (
    <div>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};
