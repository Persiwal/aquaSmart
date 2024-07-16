// HistoricalDataTable.js
import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Typography,
} from '@mui/material'
import type { HistoricalTemperatureReading } from '../../../../types/HistoricalTemperatureReadings'

const containerStyles = { mt: 3, minHeight: '565px' }

export interface Props {
  historicalData: HistoricalTemperatureReading[] | undefined
  targetTemperature: number
}

const HistoricalDataTable: React.FC<Props> = ({
  historicalData,
  targetTemperature,
}) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(8)

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const paginatedData = historicalData?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  )

  const getDifference = (temperature: number) => {
    const difference = temperature - targetTemperature
    return difference.toFixed(2)
  }

  const getColor = (difference: number) => {
    if (Math.abs(difference) > 0.5) {
      return 'red'
    }
    return 'green'
  }

  return (
    <TableContainer component={Paper} sx={containerStyles}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Temperature</TableCell>
            <TableCell align="right">Difference to Target</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData?.map((reading) => {
            const difference = parseFloat(getDifference(reading.temperature))
            return (
              <TableRow>
                <TableCell component="th" scope="row">
                  {new Date(reading.timestamp).toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  <Typography>{reading.temperature}°C</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography color={getColor(difference)}>
                    {difference}°C
                  </Typography>
                </TableCell>
              </TableRow>
            )
          }) || (
            <TableRow>
              <TableCell colSpan={3} align="center">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[8]}
        component="div"
        count={historicalData?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  )
}

export default HistoricalDataTable
