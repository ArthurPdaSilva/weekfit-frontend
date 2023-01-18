import React, { useContext, useState } from 'react';
import { Input, TableCell } from 'semantic-ui-react';
import { AuthContext } from '../../contexts/auth';
import api from '../../services/api';

type Props = {
  value: string;
  id: number;
};

export default function Cell({ value, id }: Props) {
  const appContext = useContext(AuthContext);
  const [name, setName] = useState(value);
  const onUpdate = async function loadingCells() {
    api.defaults.headers.common['Authorization'] = `Bearer ${appContext?.token}`;
    await api.put(`/update-table/${id}`, { name });
  };

  return (
    <TableCell key={id}>
      <Input value={name} onChange={(e) => setName(e.target.value)} onBlur={onUpdate} />
    </TableCell>
  );
}
