import {NavigationProp, NavigationState} from '@react-navigation/native';
import {FoodItem} from '../screens/ItemDetailsScreen/types';

type NavigationParamList = {
  SummaryScreen: undefined;
  LoginScreen: undefined;
  HomeScreen: undefined;
  RestaurantScreen: {
    restaurantImage: string;
    restaurantName: string;
    rating: string;
    deliveryCharge: string;
    time: string;
  };
  ItemDetailsScreen: {
    itemName: string;
    restaurantImage: string;
    restaurantName: string;
    rating: string;
    deliveryCharge: string;
    time: string;
  };
  CartScreen: {
    foodItems: FoodItem[];
  };
};

export type NavigationPropType = Omit<
  NavigationProp<NavigationParamList>,
  'getState'
> & {
  getState(): NavigationState | undefined;
};
