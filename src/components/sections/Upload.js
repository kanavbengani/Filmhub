import React from "react";
// import sections
import classNames from "classnames";
import { Link } from "react-router-dom";

const Upload = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "upload section site-inner",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  return (
    <section
      {...props}
      style={{
        paddingTop: 75,
        paddingLeft: 100,
      }}
    >
      <div>
        <h1>Upload</h1>
      </div>
    </section>
  );
};

export default Upload;
