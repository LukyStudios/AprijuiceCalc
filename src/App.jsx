import { useEffect, useState } from 'react'
import './App.css'
import { Button, Card, CardContent, Typography } from '@mui/material'

import SelectWithDelete from './components/SelectWithDelete.jsx'

import apricorns from '../public/data/apricorns.json'

function App() {
  const [count, setCount] = useState(0)
  const [apricorn, setApricorn] = useState()

  console.log(apricorns)

  // #region Render
  return (
    <>
    <Card>
    <CardContent>
      <Typography variant='h1'>Aprijuice Calculator</Typography>
        <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <SelectWithDelete value={apricorn} setter={setApricorn} label="Apricorn" id="apricorn-selection" items={apricorns}/>
    </CardContent> 
    </Card>
    </>
  )
  // #endregion
}

export default App
