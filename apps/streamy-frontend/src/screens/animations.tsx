import * as React from 'react';
import { Category } from '../components/category';

interface IAnimationScreenProps { }

const AnimationScreen: React.FunctionComponent<IAnimationScreenProps> = (props) => {
  return (
    <Category category='Animation' />
  )
};

export default AnimationScreen;
