import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

// Generate Order Data
function createData(id, qubz, routeid, originCode, originDesc, destCode, destDesc, severityLvl) {
  return { id, qubz, routeid, originCode, originDesc, destCode, destDesc, severityLvl };
}

const rows = [
  createData(
    0,
    'DazzlingUnmatchedBacklands',
    23,
    'CHS',
    'Charleston, South Carolina (USA)',
    'BOM',
    'Mumbai, Maharashtra (INDIA)',
    3,
  ),
  createData(
    1,
    'ReorderSlumMarbled',
    16,
    'PNY',
    'Pondicherry, Puducherry (INDIA)',
    'SYD',
    'Sydney, New South Wales (AU)',
    1,
  ),
  createData(
    2,
    'ReorderSlumMarbled',
    9,
    'BWN',
    'Brownsville, TX (USA)',
    'SAT',
    'San Antonio, TX (USA)',
    3,
  ),
  createData(
    3,
    'ReorderSlumMarbled',
    2,
    'ISS',
    'International Space Station',
    'BWN',
    'Brownsville, TX (USA)',
    3,
  ),
  createData(
    4,
    'ReorderSlumMarbled',
    30,
    'SIN',
    'Singapore (Singapore)',
    'CCU',
    'Kolkata, West Bengal (India)',
    2,
  ),
];

function notImplementedAlert() {
  window.alert("Not Implemented");
}

function preventDefault(event) {
  notImplementedAlert();
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Qubz With Exceptions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Qubz Unit</TableCell>
            <TableCell>Route ID</TableCell>
            <TableCell>Origin Location Code</TableCell>
            <TableCell>Origin Location</TableCell>
            <TableCell>Destination Location Code</TableCell>
            <TableCell>Destination Location</TableCell>
            <TableCell>Severity Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
              <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
              {row.qubz}
      </Link>
                </TableCell>
              <TableCell>{row.routeid}</TableCell>
              <TableCell>{row.originCode}</TableCell>
              <TableCell>{row.originDesc}</TableCell>
              <TableCell>{row.destCode}</TableCell>
              <TableCell>{row.destDesc}</TableCell>
              <TableCell>{row.severityLvl}{'  '}<WarningAmberIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        View All Tracked Qubz
      </Link>
    </React.Fragment>
  );
}

