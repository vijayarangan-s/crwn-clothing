import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../utils/Selectors/shop.selectors";
import CollectionPreview from "../Collection-Preview/Collection-Preview.Component";
import "./Collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections &&
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
