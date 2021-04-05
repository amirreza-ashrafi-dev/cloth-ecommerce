import React from 'react';
import CollectionPreview from "../../components/collection-preview/collection-preview";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSelectionForPreview } from '../../redux/shop/shop.selector';
import './collection-overview.styles.scss';

const Collectionoverview = ({ shopData }) => (
    <div className='collections-overview'>
        {shopData.map(({ id, ...otherCollections }) => (
            <CollectionPreview key={id} {...otherCollections} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    shopData: selectSelectionForPreview
})

export default connect(mapStateToProps)(Collectionoverview);