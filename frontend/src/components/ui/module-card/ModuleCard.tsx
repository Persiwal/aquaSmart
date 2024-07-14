import React from 'react'
import { Card, CardActionArea } from '@mui/material'
import type { Module } from '../../../types/Module'
import { useNavigate } from 'react-router-dom'
import ModuleCardContent from './ModuleCardContent'

const containerStyles = { m: 0, width: '100%' }
const actionAreaStyles = {
  p: 2,
}

interface Props {
  module: Module
}

const ModuleCard: React.FC<Props> = ({ module }) => {
  const navigate = useNavigate()
  const { id } = module

  const handleClick = (id: string) => {
    navigate(`/modules/${id}`)
  }

  return (
    <Card sx={containerStyles}>
      <CardActionArea sx={actionAreaStyles} onClick={() => handleClick(id)}>
        <ModuleCardContent module={module} />
      </CardActionArea>
    </Card>
  )
}

export default ModuleCard
