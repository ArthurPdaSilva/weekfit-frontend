import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

export default function Cell() {
  const [name, setName] = useState('-');
  return <Input value={name} onChange={(e) => setName(e.target.value)} style={{ maxWidth: 100 }} />;
}
