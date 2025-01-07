import {RouteProp} from '@react-navigation/native';
import {FoodItem} from '../ItemDetailsScreen/types';

type CartScreenRouteProp = RouteProp<
  {params: {foodItems: FoodItem[]}},
  'params'
>;

export type {CartScreenRouteProp};
