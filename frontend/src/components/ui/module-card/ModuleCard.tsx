import React from 'react'
import { Card, CardActionArea } from '@mui/material'
import type { Module } from '../../../types/Module'
import { useNavigate } from 'react-router-dom'
import ModuleCardContent from './ModuleCardContent'

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
    <Card sx={{ m: '0', width: '100%' }}>
      <CardActionArea sx={{ p: 2 }} onClick={() => handleClick(id)}>
        <ModuleCardContent module={module} />
      </CardActionArea>
    </Card>
  )
}

export default ModuleCard
