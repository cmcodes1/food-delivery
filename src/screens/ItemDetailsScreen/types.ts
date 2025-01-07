type ItemDetailsScreenProps = {
  route: {
    params: {
      itemName: string;
      restaurantImage: string;
      restaurantName: string;
      rating: string;
      deliveryCharge: string;
      time: string;
    };
  };
};

type FoodItem = {
  itemName: string;
  price: number;
  size: string;
  qty: number;
};

type FoodItems = FoodItem[];

type Index = React.Key | null | undefined;

export type {ItemDetailsScreenProps, FoodItem, FoodItems, Index};
