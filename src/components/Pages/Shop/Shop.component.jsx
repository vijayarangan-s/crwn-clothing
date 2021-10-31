import React , {Component} from 'react'
import CollectionOverview from '../../Collection-overview/Collection-overview'

const ShopPage = ({collections}) => {
        return(
            <div className="shop-page">
              <CollectionOverview/>
            </div>
        )
}

export default ShopPage