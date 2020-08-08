import React, { useState, useRef, Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { size } from "lodash";

const load = ({
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
    "hero section left-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );
  return (
    <section {...props} className={outerClasses}>
      <div
        style={{
          width: "100%",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              style={{ width: "10%" }}
              src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Ricky Bengani</h1>

              <hr />

              <p>
                Film | Photo | Final Cut Pro X | Adobe Premiere Pro | Adobe
                After Effects
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    </section>
    // <div>
    //   <h1>Load</h1>
    //   <p>Loading..</p>
    // </div>
  );
};

export default load;
