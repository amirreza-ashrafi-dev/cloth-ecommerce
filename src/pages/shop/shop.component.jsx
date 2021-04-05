import React from "react";
import { Route } from 'react-router-dom';
import CollectionOverview from '../collection-overview/collection-overview.component'
import Collection from '../../components/category/collection.component';

const Shop = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route exact path={`${match.path}/:categoryId`} component={Collection} />
  </div>
);



export default Shop;