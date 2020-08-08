import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import PropTypes from "prop-types";

// const [isActive, setIsactive] = useState(false);

// const nav = useRef(null);

// const closeMenu = () => {
//   document.body.classList.remove("off-nav-is-active");
//   nav.current && (nav.current.style.maxHeight = null);
//   setIsactive(false);
// };

const signIn = ({
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
    "hero section center-content",
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
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Sign In
            </h1>
            <p>Input Fields</p>
            <Link
              tag="a"
              to="load"
              className="button button-primary button-wide-mobile button-sm"
              wideMobile
              // onClick={closeMenu}
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default signIn;
