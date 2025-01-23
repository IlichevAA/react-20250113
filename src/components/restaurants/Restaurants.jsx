import { restaurants } from "../../../materials/mock";
import { Restaurant } from "../restaurant/Restaurant";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export const Restaurants = () => {
  const tabName = restaurants.map((restaurant) => {
    return <Tab key={restaurant.id}>{restaurant.name}</Tab>;
  });

  const tabContent = restaurants.map((restaurant) => {
    return (
      <TabPanel key={restaurant.id}>
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      </TabPanel>
    );
  });

  return (
    <>
      <h1>Restaurants</h1>
      <Tabs>
        <TabList>{tabName}</TabList>
        {tabContent}
      </Tabs>
    </>
  );
};
