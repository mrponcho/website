import React from "react";
import Grow from "@material-ui/core/Grow";

export default props =>
  props.children.map((child, i) => (
    <Grow timeout={(i + 1) * 1000} in>
      {child}
    </Grow>
  ));
