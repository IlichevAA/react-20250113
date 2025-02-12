import { DishCounter } from "../dish_counter/DishCounter";
import { MenuItem } from "./MenuItem";

export const Menu = ({ menu }) => {
  return (
    Boolean(menu && menu.length > 0) && (
      <>
        <h3>Menu</h3>
        <ul>
          {menu.map((menuItem) => (
            <li key={menuItem.id}>
              <MenuItem menuItem={menuItem} /> <DishCounter />
            </li>
          ))}
        </ul>
      </>
    )
  );
};
