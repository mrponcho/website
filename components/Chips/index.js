import React from "react";
import styled from "styled-components";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";

const Chips = styled.div`
  margin-top: 10px;
`;

export default props => (
  <Chips>
    <Chip
      label="React"
      avatar={
        <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" />
      }
    />

    <Chip
      label="JavaScript"
      avatar={<Avatar src="https://cdn.auth0.com/blog/es6rundown/logo.png" />}
    />
  </Chips>
);
