import React from "react";
// import sections
import classNames from "classnames";
import { Link } from "react-router-dom";

const Add = ({
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
    "add section site-inner",
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
        <h1>Add a Repository</h1>
        <form>
          <input
            type="text"
            id="repo"
            name="repo"
            placeholder="Repository Name"
          />
          <div style={{ height: 10 }}></div>
          <textarea
            class="longInput"
            cols="40"
            rows="7"
            placeholder="Repository Description"
          ></textarea>
        </form>
        <div style={{ height: 25 }}></div>
        <Link
          tag="a"
          to="/load"
          className="button button-primary button-wide-mobile button-sm"
        >
          Add
        </Link>
      </div>
    </section>
  );
};

export default Add;
