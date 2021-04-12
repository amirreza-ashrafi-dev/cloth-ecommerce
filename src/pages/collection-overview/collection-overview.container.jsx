import { connect } from 'react-redux';
import { selectIsCollection } from '../../redux/shop/shop.selector';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import CollectionOverView from './collection-overview.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollection
});

const ColectionOverViewContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionOverView);
export default ColectionOverViewContainer;