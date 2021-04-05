import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selector';


const Directory = ({ directory }) => {
  return (
    <div className="directory-menu">
      {directory.map(({ id, ...otherPros }) => (
        <MenuItem key={id} {...otherPros} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  directory: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);
