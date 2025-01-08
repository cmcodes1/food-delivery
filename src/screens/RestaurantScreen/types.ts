type RestaurantScreenProps = {
  route: {
    params: {
      restaurantImage: string;
      restaurantName: string;
      rating: string;
      deliveryCharge: string;
      time: string;
    };
  };
};

export type {RestaurantScreenProps};
