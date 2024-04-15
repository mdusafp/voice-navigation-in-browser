import * as React from 'react';
import { Category } from '../components/category';

interface IComediesScreenProps { }

const ComediesScreen: React.FunctionComponent<IComediesScreenProps> = (props) => {
  return (
    <Category category='Comedy' />
  )
};

export default ComediesScreen;
