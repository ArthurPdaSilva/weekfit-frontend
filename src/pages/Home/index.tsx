import React from 'react';
import { Grid, GridColumn, Header } from 'semantic-ui-react';
import HeaderContainer from '../../components/Header';
import TableContainer from '../../components/Table';

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <Grid style={{ height: '100vh' }} verticalAlign="middle">
        <GridColumn style={{ width: '100%' }}>
          <Header size="huge" textAlign="center">
            Rotina do Campeão
          </Header>
          <TableContainer />
        </GridColumn>
      </Grid>
    </>
  );
}
