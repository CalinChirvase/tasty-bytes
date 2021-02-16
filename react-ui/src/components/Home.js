import React from 'react'
import { useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography'

const Home = () => {
  const user = useSelector(state => state.user)

  return (
    <div>
      {user.token !== undefined
        ?
        <Typography variant="h6" color="inherit">
          Welcome {user.name}!
        </Typography>
        :
        <Typography variant="h6" color="inherit">
          Hello stranger!
        </Typography>
      }
    </div>
  )
}

export default Home