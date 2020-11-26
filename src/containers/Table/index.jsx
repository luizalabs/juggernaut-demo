import React from 'react'
import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { Container, Paper, Table } from './style'

const createData = (name, calories, fat, carbs, protein) => ({ name, calories, fat, carbs, protein })

const rows = [
  createData('Iron Man', 5.5, 8.5, 4.5, 10.0),
  createData('Captain America', 2.5, 3.0, 8.0, 2.5),
  createData('Black Widow S2', 3.5, 2.5, 4.0, 6.0),
  createData('Hulk', 7.0, 9.9, 9.9, 1.5),
  createData('Thanos (sem manopla)', 4.0, 9.5, 9.2, 8.5),
  createData('Goku', 8000, 8000, 8000, 8000),
  createData('Captain Marvel', 7.5, 8.5, 8.2, 2.5)
]

function SimpleTable () {
  return (
    <Container component="main" maxWidth="lg">
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Personagem</TableCell>
              <TableCell align="right">Velocidade</TableCell>
              <TableCell align="right">Força</TableCell>
              <TableCell align="right">Resistência</TableCell>
              <TableCell align="right">Tecnologia</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  )
}

export default SimpleTable
