import * as C from './styles'
import * as React from 'react'
import Logo from '../../assets/Logo.png'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'


import { styled } from '@mui/system'

const IconsAtBottom = styled(BottomNavigationAction)(({ theme }) => ({
    '&.Mui-selected, &.css-18gz5c0-MuiButtonBase-root-MuiBottomNavigationAction-root': {
      color: '#FFFFFF'
    }
  }))

export const Sidebar = () => {
    const [value, setValue] = React.useState(0)
    const [email, setEmail] = React.useState("")

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Email ${email}`)
        fetch(`/members/?email=${email}`)
        .then(response => response.json())
        .then((data) => {
            alert("Success", data)
        })
        .catch((error) => {
            alert(error)
        })
    }

    return (
        <C.Container>
            <C.ContainerTitleAndImage>
                <C.Avatar>
                    <img src={Logo} alt="Logo" title="Logo"/>
                </C.Avatar>
            </C.ContainerTitleAndImage>
            <C.Description>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{color: '#2D1656'}}

                    component="div" >
                    Join our mailing list!
                </Typography>
            </C.Description>
            <C.MailingList>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="outlined-basic"
                        color="secondary"
                        label="Your e-mail here"
                        variant="outlined"
                        type="email"
                        style={{"height":"50px", "margin":"5px"}}
                        sx={{borderColor: '#2D1656' }}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <Button
                        variant="outlined"
                        color="secondary"
                        type="submit"
                        style={{"height":"55px", "margin":"5px"}}
                        sx={{color: '#2D1656', borderColor: '#2D1656'}}>
                        Submit
                    </Button>
                </form>
            </C.MailingList>
            <C.GithubContainer>
                <BottomNavigation
                        color="secondary"
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue)
                        }}
                >
                    <BottomNavigationAction sx={{backgroundColor: '#B291F2'}} label="Ana" href="https://github.com/anapsilvestrinf" target="_blank" icon={<GitHubIcon />} />
                    <BottomNavigationAction sx={{backgroundColor: '#B291F2'}} label="Clara" href="https://github.com/bloomwithtech" target="_blank" icon={<GitHubIcon />} />
                    <BottomNavigationAction sx={{backgroundColor: '#B291F2'}} label="Maria" href="https://github.com/mhsouza88/" target="_blank" icon={<GitHubIcon />} />
                </BottomNavigation>
            </C.GithubContainer>
        </C.Container>
    )
}

export default Sidebar
