import React from 'react';
import { FilterableProductTable } from './AllTheThings';

export default class extends React.Component {
  render() {
    return (
      <FilterableProductTable products={ [{ stocked: false, name: 'shoes', price: '72.34' }] } />
    );
  }
}
