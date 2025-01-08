/* eslint-disable no-control-regex */

import {FoodItems, Index} from '../screens/ItemDetailsScreen/types';

const emailRegex: RegExp =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const handleQty = (
  foodItems: FoodItems,
  index: Index,
  change: 'increment' | 'decrement',
) => {
  return foodItems.map((foodItem, i) =>
    i === index
      ? {
          ...foodItem,
          qty:
            foodItem.qty === 1
              ? change === 'decrement'
                ? 1
                : foodItem.qty + 1
              : change === 'decrement'
              ? foodItem.qty - 1
              : foodItem.qty + 1,
        }
      : foodItem,
  );
};

const getTotalPrice = (updatedFoodItems: FoodItems) => {
  return updatedFoodItems.reduce(
    (acc, val) => acc + Number(val.price) * Number(val.qty),
    0,
  );
};

const getImageSource = (foodImage: string) => {
  switch (foodImage) {
    case 'allFood':
      return require('../assets/images/allFood.jpg');
    case 'hotDog':
      return require('../assets/images/hotDog.jpg');
    case 'burger':
      return require('../assets/images/burger.jpg');
    case 'restaurant1':
      return require('../assets/images/restaurant1.png');
    case 'restaurant2':
      return require('../assets/images/restaurant2.png');
    default:
      break;
  }
};

export {emailRegex, handleQty, getTotalPrice, getImageSource};
