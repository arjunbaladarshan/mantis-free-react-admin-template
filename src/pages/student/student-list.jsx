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
import { getAllStudents } from '../../api/student';

export default function StudentList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllStudents(setData);
  }, []);
  return (
    <MainCard title="Faculty List">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Student Name</TableCell>
              <TableCell align="right">RollNo</TableCell>
              <TableCell align="right">Facylty Image</TableCell>
              <TableCell align="right">Mobile</TableCell>
              <TableCell align="right">Semester</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Department</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.StudentName}</TableCell>
                <TableCell align="right">{row.StudentRollNo}</TableCell>
                <TableCell align="right">
                  <Avatar alt="Remy Sharp" src={row.StudentImage} />
                </TableCell>
                <TableCell align="right">{row.StudentMobileNumber}</TableCell>
                <TableCell align="right">{row.StudentSemester}</TableCell>
                <TableCell align="right">{row.StudentAge}</TableCell>
                <TableCell align="right">{row.StudentDepartment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
}
