import React from 'react';

import './collection-item.styles.scss';

import { withRouter } from 'react-router-dom';

const CollectionItem = ({ id, name, imageUrl, price, history, match }) => (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}>
        </div>
        <div className='collection-footer'>
            <span className='name'>
                {name}
            </span>
            <span className='price'>
                ${price}
            </span>
        </div>
    </div>
)

export default withRouter(CollectionItem);