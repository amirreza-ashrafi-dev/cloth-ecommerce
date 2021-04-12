import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Collection from './collection.component';
import { selectCollectionsIsLoaded } from '../../redux/shop/shop.selector';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectCollectionsIsLoaded(state)
})

const CollectionContainer = compose(connect(mapStateToProps), WithSpinner)(Collection);
export default CollectionContainer;