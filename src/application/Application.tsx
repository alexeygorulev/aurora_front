import Button from 'components/Button';
import Grid, { Item } from 'components/Grid';
import { Block, H1, H2, H3, H4, H5, P } from 'components/Typography';
import Span from 'components/Typography/Span';
import React from 'react';

const Application: React.FC = () => {
  return (
    <div>
      <Span size="l"> asd</Span>
      <H1>asd</H1>
      <H2>asd</H2>
      <H3>asd</H3>
      <H4>asd</H4>
      <H5>asd</H5>
      <P>zxc</P>
      <Block padding="s" margin="s">
        1234
      </Block>
      <Grid>
        <Item size={12}>123</Item>
        <Item>4123</Item>
        <Item>
          <Button size="s">Кнопка</Button>
          <Block>
            <Button size="m">Кнопка</Button>
          </Block>
          <Button size="l" disabled={true}>
            Кнопка
          </Button>
        </Item>
        <Item>
          <Button type="secondary" size="s">
            Кнопка
          </Button>
          <Block>
            <Button width={400} type="secondary" size="m">
              Кнопка
            </Button>
          </Block>
          <Button type="secondary" size="l">
            Кнопка
          </Button>
        </Item>
      </Grid>
    </div>
  );
};

export default Application;
