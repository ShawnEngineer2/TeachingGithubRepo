import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Current Exception Counts</Title>
      <div>
      <Typography component="p" variant="h7">
        <strong>Current Active Qubz Count</strong> <br/>
        89,635
      </Typography>
      </div>
      <hr/>
      <div>
      <Typography component="p" variant="h7">
        <strong>Severity 1 :</strong> 5
      </Typography>
      <Typography component="p" variant="h7">
        <strong>Severity 2 :</strong> 139
      </Typography>
      <Typography component="p" variant="h7">
        <strong>Severity 3 :</strong> 3,427
      </Typography>
     </div>
    </React.Fragment>
  );
}
