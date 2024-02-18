import './Example.css';
import { Button } from '@mui/material';

import React from 'react';

export type ExampleProps = {
  text?: String;
};

export function Example(props: ExampleProps) {
  const [count, setCount] = React.useState(0);
  return (
    <Button
      variant="contained"
      fullWidth
      onClick={() => setCount(count + 1)}
      id="example-button"
      sx={{
        background: 'maroon',
      }}
    >
      {`${props.text} ${count}`}
    </Button>
  );
}
