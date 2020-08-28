import React from "react";
import PropTypes from "prop-types";
import "./link.css";

function Link({...props }) {
  return (
    <a href={props.to} className={"link"}
    >
      {props.children}
    </a>
  );
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  label:PropTypes.string.isRequired,
};

export default Link;