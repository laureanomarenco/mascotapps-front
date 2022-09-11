import {Grid} from '@mui/material'
import Login from '../Login/Login'
import MasonryImageList from './Carrousel'
import React from 'react'

export default function LandingPage() {
  
  return (
    <Grid container columnGap={4}>
      <Grid item xl={9}>
        <MasonryImageList/>
      </Grid>
      <Grid item xl={3}>
       <Login/>  
      </Grid>
    </Grid>
  )
}