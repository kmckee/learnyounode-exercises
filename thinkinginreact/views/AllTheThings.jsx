import React from 'react';
import ReactDOM from 'react';

export const ProductCategoryRow = React.createClass({
  render() {
    return (
      <tr>
        <th colSpan={2}>{this.props.category}</th>
      </tr>
    );
  },
});

export const ProductRow = React.createClass({
  render() {
    const product = this.props.product;
    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  },
});

export const ProductTable = React.createClass({
  render() {
    const { products, filterText, inStockOnly } = this.props;

    const rows = [];
    let currentCategory;
    console.log('inStockOnly', inStockOnly);
    products.filter((product) => {
      const stockCond = !inStockOnly || inStockOnly && product.stocked;
      const nameCond = product.name.toLowerCase().indexOf(filterText) !== -1;
      return stockCond && nameCond;
    }).forEach((product) => {
      if (product.category !== currentCategory) {
        currentCategory = product.category;

        rows.push((
          <ProductCategoryRow
            key={currentCategory}
            category={currentCategory}
          />
        ));
      }

      rows.push((
        <ProductRow key={product.name} product={product} />
      ));
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  },
});

export const SearchBar = React.createClass({
  render() {
    const { filterText, inStockOnly, filter } = this.props;
    return (
      <form>
        <input type="search" onChange={filter()} placeholder="Search..." value={filterText} />
        <label>
          <input type="checkbox" onChange={filter()} value={inStockOnly} />
          Only show products in stock
        </label>
      </form>
    );
  },
});

export const FilterableProductTable = React.createClass({
  getInitialState() {
    return {
      filterText: '',
      inStockOnly: false,
    };
  },
  handleChange() {
    const filterText = ReactDOM.findDOMNode(this.refs.filterText).value;
    const inStockOnly = ReactDOM.findDOMNode(this.refs.inStockOnly).checked;
    this.props.onUserInput(filterText, inStockOnly);
  },
  render() {
    const products = this.props.products;
    const { filterText, inStockOnly } = this.state;
    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          filter={this.handleChange}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    );
  },
});
