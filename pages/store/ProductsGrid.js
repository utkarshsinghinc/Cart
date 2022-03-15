import React from 'react';

import ProductItem from './ProductItem';
import { useProducts } from '../../hooks/useProducts';

const ProductsGrid = () => {

    const { products } = useProducts()

    return ( 
        <div>
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        {products.length} Products
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <input type="text" name="" placeholder="Search product" className="form-control" id=""/>
                    </div>
                </div>
            </div>
            <div >

                {
                    products.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }

            </div>
            <div>

            </div>
        </div>
     );
}
 
export default ProductsGrid;