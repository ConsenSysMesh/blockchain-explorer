import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Overview from './component';

const mapStateToProps = state => ({
  loading: state.dataStore.loading,
  searchText: state.dataStore.searchText,
  searchResults: state.dataStore.searchResults,
});

const mapDispatchToProps = dispatch => ({
  onSearch: dispatch.dataStore.onSearch,
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Overview),
);