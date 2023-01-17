import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react';
import Cell from '../Cell';

export default function TableContainer() {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Domingo</Table.HeaderCell>
          <Table.HeaderCell>Segunda</Table.HeaderCell>
          <Table.HeaderCell>Terca</Table.HeaderCell>
          <Table.HeaderCell>Quarta</Table.HeaderCell>
          <Table.HeaderCell>Quinta</Table.HeaderCell>
          <Table.HeaderCell>Sexta</Table.HeaderCell>
          <Table.HeaderCell>Sábado</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
          <Table.Cell>
            <Cell />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan="7">
            <Button as={Link} to="/edit" floated="right" color="green">
              Compartilhar
            </Button>
          </Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}
