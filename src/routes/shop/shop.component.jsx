import { useContext } from 'react';

import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';

import './shop.styles.scss';

const Shop = () => {

    const {products} = useContext(ProductsContext);

    return (
        <div className="products-container">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )

    /*
    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }

    render() {
        const { match } = this.props;
        
        return (
                <div className="shop-page">
                    <Route 
                        exact path={`${match.path}`} 
                        component={CollectionsOverviewContainer} 
                    />
                    <Route 
                        path={`${match.path}/:collectionId`} 
                        component={CollectionPageContainer} 
                    />
                </div>
        );
    }
    */
}

export default Shop;