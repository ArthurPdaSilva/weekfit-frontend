import React from 'react';
import { Grid, GridColumn, Header } from 'semantic-ui-react';
import HeaderContainer from '../../components/Header';
import TableContainer from '../../components/Table';

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
        <GridColumn style={{ maxWidth: '80vw' }}>
          <Header size="huge">Rotina do Campeão </Header>
          <TableContainer />
        </GridColumn>
      </Grid>
    </>
  );
}
