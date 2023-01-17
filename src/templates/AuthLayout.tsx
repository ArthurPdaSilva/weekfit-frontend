import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form';
import GridColumn from 'semantic-ui-react/dist/commonjs/collections/Grid/GridColumn';
import Message from 'semantic-ui-react/dist/commonjs/collections/Message';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';

type Props = {
  isRegister?: boolean;
};

export default function AuthLayout(props: Props) {
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <GridColumn style={{ maxWidth: '500px' }}>
        <Header as="h1" color="orange" textAlign="center">
          Week Fit
        </Header>
        <Form size="large">
          <Segment>
            {props.isRegister && <Form.Input fluid icon="user" iconPosition="left" placeholder="Nome de usuário" />}
            <Form.Input fluid icon="envelope" iconPosition="left" placeholder="E-mail" type="email" />
            <Form.Input fluid icon="lock" iconPosition="left" placeholder="Senha" type="password" />
            <Button color="orange" fluid size="large" type="submit">
              {props.isRegister ? 'Cadastrar' : 'Entrar'}
            </Button>
          </Segment>
        </Form>
        <Message>
          {props.isRegister ? 'Já possui uma conta? ' : 'Não possui uma conta? '}
          {props.isRegister ? <Link to="/">Entrar com uma conta</Link> : <Link to="/register">Criar uma conta</Link>}
        </Message>
      </GridColumn>
    </Grid>
  );
}
