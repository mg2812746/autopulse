import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../sidebar/Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        {/* Jsonify deposits here */}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {/* Jsonify date here */}
      </Typography>
    </React.Fragment>
  );
}