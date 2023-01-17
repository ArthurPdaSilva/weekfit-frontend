import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Image, Menu } from 'semantic-ui-react';

export default function HeaderContainer() {
  return (
    <Menu fluid inverted style={{ borderRadius: 0, fontSize: '1.2rem' }}>
      <Menu.Item as={Link} to="/home" header>
        <Image src="assets/icon.png" style={{ marginRight: '.5em' }} />
        Week Fit
      </Menu.Item>
      <Menu.Item as={Link} to="/rotina" name="Editar rotina" />
      <Menu.Menu position="right">
        <Menu.Item>Nome do usuário</Menu.Item>
        <Menu.Item as={Link} name="Sair" />
      </Menu.Menu>
    </Menu>
  );
}
