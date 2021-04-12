import React, { useEffect } from "react";
import { Route } from 'react-router-dom';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import CollectionOverviewContainer from '../../pages/collection-overview/collection-overview.container';
import CollectionContainer from '../../components/category/collection.container';

const Shop = ({ fetchCollectionsAsync, match }) => {

  useEffect(() => {
    fetchCollectionsAsync();
  }, [fetchCollectionsAsync]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
      <Route exact path={`${match.path}/:categoryId`} component={CollectionContainer} />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(Shop);