type RestaurantScreenProps = {
  route: {
    params: {
      restaurantName: string;
      rating: string;
      deliveryCharge: string;
      time: string;
    };
  };
};

export type {RestaurantScreenProps};
