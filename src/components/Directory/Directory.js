import React, { Component } from 'react'
import MenuItem from '../Menu-item/MenuItem';
import { connect } from 'react-redux'
import {selectDirectorySections} from '../../utils/Selectors/directory.selectors'
import {createStructuredSelector} from 'reselect'
import './Directory.style.scss'

const Directory  = ({sections}) => {
    return(
        <>
        {
            sections &&
            sections.map(({id, ...propsSectionData}) => (
                <MenuItem key={id} {...propsSectionData} />
            )) 
        }
        </>
    )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps,null)(Directory)