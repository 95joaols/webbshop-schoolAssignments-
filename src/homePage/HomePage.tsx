import React from 'react';
import { Product } from '../entity/Product';
import { ProductComponent } from './ProductComponent';

 const temp: Product = {
    Id: 0,
    Name: "Temp Product",
    price: 9,
    description:"null",
    imageUrl:"https://via.placeholder.com/144x120"
  }

interface props {
  onClick: (product: Product,nr: number) => void;
}
export default class HomePage extends React.Component<props>{
    render() {
        return  <><ProductComponent product={temp} onClick={this.props.onClick} /></>

    }
}