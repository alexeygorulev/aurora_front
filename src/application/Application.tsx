import Button from 'components/atoms/Button';
import Grid, { Item } from 'components/atoms/Grid';
import Loader from 'components/atoms/Loader';
import Tabs from 'components/atoms/Tabs';
import { Block, H1, H2, H3, H4, H5, P } from 'components/atoms/Typography';
import Span from 'components/atoms/Typography/Span';
import Icon from 'components/icons/Icon';
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
          <Button loading={true} loaderSize="s" loaderType={'secondary'} width={400} size="s">
            Кнопка
          </Button>
          <Block>
            <Button id="lox" onClick={(id) => console.log(id)} width={400} size="m">
              Кнопка
            </Button>
          </Block>
          <Button size="l" width={400} loading={false} loaderSize="m" disabled={true}>
            Кнопка
          </Button>
        </Item>
        <Item>
          <Button typeIcon="iconGoogle" rounded={true} type="major" size="s">
            Кнопка
          </Button>
          <Block>
            <Button rounded={true} isSelected width={400} type="secondary" size="m">
              Кнопка
            </Button>
          </Block>
          <Button type="secondary" size="l">
            Кнопка
          </Button>
        </Item>
        <Item size={2}>
          <Loader size="s" />
          <Loader size="m" />
          <Loader size="l" />
          <Loader size="xl" isShowLoadingWords />
        </Item>
        <Item>
          <Icon type="iconChevronsRight" />
        </Item>
        <Item size={6}>
          <Tabs>Админ</Tabs>
        </Item>
      </Grid>
    </div>
  );
};

export default Application;
