import React from 'react';
import { Grid, GridColumn, Icon, Message } from 'semantic-ui-react';

export default function Error() {
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <GridColumn style={{ maxWidth: '500px' }}>
        <Message>
          <Message icon>
            <Icon name="circle notched" loading />
            <Message.Content>
              <Message.Header>Página não encontrada :(</Message.Header>
              Redirecionando para a home...
            </Message.Content>
          </Message>
        </Message>
      </GridColumn>
    </Grid>
  );
}
