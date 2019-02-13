import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { readableColor } from 'polished';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Github from '../components/Icons/Github';
import GrowGroup from '../components/GrowGroup';
import CodeSandbox from '../components/Icons/CodeSandbox';

const CODE_SANDBOX_MRPONCHO = 'https://codesandbox.io/api/v1/users/mrponcho';
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
    axios.get(CODE_SANDBOX_MRPONCHO).then((res) => {
      const sandbox = res.data.data;
      const codeSandbox = {
        views: sandbox.view_count,
        likes: sandbox.received_like_count,
        sandboxes: sandbox.sandbox_count,
      };
      this.setState(oldState => ({ ...oldState, codeSandbox }));
    });
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
    const { codeSandbox, github } = this.state;
    return (
      <GrowGroup>
        <Grid item xs={12}>
          <ColoredPaper color="rgba(0,0,0,.8)">
            <Grid container spacing={24}>
              <Grid item sm={3} xs={12}>
                <IconWrapper>
                  <CodeSandbox />
                </IconWrapper>
              </Grid>
              <Grid item sm={3} xs={4}>
                <MyBadge text="Views" number={codeSandbox.views} />
              </Grid>
              <Grid item sm={3} xs={4}>
                <MyBadge text="Likes" number={codeSandbox.likes} />
              </Grid>
              <Grid item sm={3} xs={4}>
                <MyBadge text="Sandboxes" number={codeSandbox.sandboxes} />
              </Grid>
            </Grid>
          </ColoredPaper>
        </Grid>
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
      </GrowGroup>
    );
  }
}
