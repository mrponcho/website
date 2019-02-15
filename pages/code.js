import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { readableColor } from 'polished';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Grow from '@material-ui/core/Grow';
import Github from '../components/Icons/Github';

const GITHUB_MRPONCHO = 'https://api.github.com/users/mrponcho';

const ColoredPaper = styled(Paper)`
  &&&{
    color: ${props => readableColor(props.color)};
    background-color: ${props => props.color};
    padding: 18px;
  }
`;

const StyledBadge = styled(Badge)`
  margin-top: 10px;
`;

const BadgeText = styled.div`
  margin: 0 10px;
`;

const IconWrapper = styled.div`
  svg {
    height: 30px;
  }
`;

const MyBadge = ({ children, number, text }) => (
  <StyledBadge color="secondary" badgeContent={number}>
    <BadgeText>{children || text || ''}</BadgeText>
  </StyledBadge>
);

export default class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeSandbox: {
        views: 0,
        likes: 0,
        sandboxes: 0,
      },
      github: {
        repos: 0,
        followers: 0,
        following: 0,
      },
    };
  }

  componentDidMount() {
    axios.get(GITHUB_MRPONCHO).then((res) => {
      const githubRes = res.data;
      const { followers, following } = githubRes;
      const github = {
        repos: githubRes.public_repos,
        followers,
        following,
      };
      this.setState(oldState => ({ ...oldState, github }));
    });
  }

  render() {
    const { github } = this.state;
    return (
      <Grow timeout={1000} in>
        <Grid item xs={12}>
          <ColoredPaper color="#24292e">
            <Grid container spacing={24}>
              <Grid item sm={3} xs={12}>
                <IconWrapper>
                  <Github />
                </IconWrapper>
              </Grid>
              <Grid item sm={3} xs={4}>
                <MyBadge text="Repos" number={github.repos} />
              </Grid>
              <Grid item sm={3} xs={4}>
                <MyBadge text="Followers" number={github.followers} />
              </Grid>
              <Grid item sm={3} xs={4}>
                <MyBadge text="Following" number={github.following} />
              </Grid>
            </Grid>
          </ColoredPaper>
        </Grid>
      </Grow>
    );
  }
}
