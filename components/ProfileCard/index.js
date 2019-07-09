import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

function ProfileCard({
  alt,
  background,
  color,
  description,
  headline,
  src,
  subline,
}) {
  const StyledPaper = styled(Paper)`
    &&& {
      background: ${background};
      padding: 18px;
    }
  `;
  const Typo = styled(Typography)`
    &&& {
      color: ${color};
    }
  `;
  const CenterContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${props => props.height};
  `;
  const Image = styled(Avatar)`
    &&& {
      height: 90px;
      width: 90px;
      margin: 10px;
    }
  `;
  return (
    <StyledPaper background={background}>
      <Grid container>
        <Grid item xs={4}>
          <CenterContent>
            <Image
              src={src}
              alt={alt}
            />
          </CenterContent>
        </Grid>
        <Grid item xs={8}>
          <CenterContent height="110px">
            <div>
              <Typo variant="h5" component="h1">
                {headline}
              </Typo>
              <Typo>
                {subline}
              </Typo>
              <Typo>
                {description}
              </Typo>
            </div>
          </CenterContent>
        </Grid>
      </Grid>
    </StyledPaper>
  );
}

export default React.memo(ProfileCard);
