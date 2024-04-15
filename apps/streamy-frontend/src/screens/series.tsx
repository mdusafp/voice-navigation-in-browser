import * as React from 'react';
import { Category } from '../components/category';

interface ISeriesScreenProps { }

const SeriesScreen: React.FunctionComponent<ISeriesScreenProps> = (props) => {
  return (
    <Category category='Series' />
  )
};

export default SeriesScreen;
