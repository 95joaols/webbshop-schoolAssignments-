import React from 'react';
import { Product } from '../../entity/Product';
import { ProductList } from '../../components/ProductList';

 const temp: Product[] = [{
    Id: 0,
    Name: "Temp Product",
    price: 9,
    description:"null",
    imageUrl:"https://via.placeholder.com/144x120"
  },{
    Id: 1,
    Name: "Tbvncct",
    price: 476,
    description:"null",
    imageUrl:"https://via.placeholder.com/144x120"
  }]

interface props {
  onAddToCart: (product: Product,nr: number) => void;
}
export default class HomePage extends React.Component<props>{
    render() {
        return  <><ProductList products={temp} onAddToCart={this.props.onAddToCart} /></>

    }
}