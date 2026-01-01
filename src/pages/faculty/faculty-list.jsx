// project imports
import MainCard from 'components/MainCard';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { getAllFaculties } from '../../api/faculty';
import Avatar from '@mui/material/Avatar';

export default function FacultyList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllFaculties(setData);
  }, []);
  return (
    <MainCard title="Faculty List">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Faculty Name</TableCell>
              <TableCell align="right">Faculty Code</TableCell>
              <TableCell align="right">Facylty Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.facultyName}</TableCell>
                <TableCell align="right">{row.facultyCode}</TableCell>
                <TableCell align="right">
                  <Avatar alt="Remy Sharp" src={row.facultyImage} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
}
