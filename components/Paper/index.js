import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

export default styled(Paper)`
  &&& {
    display: block;
    padding: 18px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    background: ${props => props.background};
    color: ${props => props.color};

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
