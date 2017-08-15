import React from 'react';
import { Container, Divider, Grid } from 'semantic-ui-react';
import { FadeInLeft, FadeInRight, RubberBand } from 'animate-css-styled-components';
import SigninForm from '../SigninForm/SigninForm';
import SignupForm from '../SignupForm/SignupForm';

const Authentication = () => (
  <Container>
    <Grid centered padded>
      <Grid.Column computer={6} mobile={16}>
        <FadeInLeft>
          <SigninForm size="big" />
        </FadeInLeft>
        <RubberBand>
          <Divider horizontal>Or</Divider>
        </RubberBand>
        <FadeInRight>
          <SignupForm size="big" />
        </FadeInRight>
      </Grid.Column>
    </Grid>
  </Container>
);

export default Authentication;
