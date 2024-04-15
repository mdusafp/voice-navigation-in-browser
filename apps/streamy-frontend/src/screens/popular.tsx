import * as React from 'react';
import { Category } from '../components/category';

interface IPopularScreenProps { }

const PopularScreen: React.FunctionComponent<IPopularScreenProps> = (props) => {
  return (
    <Category category='New & Popular' />
  )
};

export default PopularScreen;
