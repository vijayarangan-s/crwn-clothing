import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { fetchCollectionsStart } from "../../../redux/actions/shop/shop.actions";
// import { fetchCollectionsStart } from "../../../redux/saga/shop.saga";
// import { selectIsCollectionLoaded } from "../../../utils/Selectors/shop.selectors";
import CollectionOverviewContainer from "../../Collection-overview/Collection-overview.container";
import { CollectionPageContainer } from "../Collection/Collection.container";



class ShopPage extends Component {

  UNSAFE_componentWillMount(){

  }

  componentDidMount() {
    const { fetchCollectionsStart } = this.props
    fetchCollectionsStart()
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component = {CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
