import * as React from 'react';
import { Category } from '../components/category';

interface IDramasScreenProps { }

const DramasScreen: React.FunctionComponent<IDramasScreenProps> = (props) => {
  return (
    <Category category='Drama' />
  )
};

export default DramasScreen;
