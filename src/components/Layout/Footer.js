import React from 'react'
import { Typography ,Box } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../../styles/footer.css'

const Footer = () => {
  return (
   <>
  <Box sx={{bgcolor:"#1A1A19", color:"white", textAlign:"center", p:3}}>
    <Box sx={{my :2, "& svg ": {fontSize : "60px" , cursor : "pointer",mr: 2} , "& svg:hover" :{color:"goldenrod",transform:"translateX(5px)",transition : "all 400ms"}, }}>
    <a href='https://www.instagram.com/khushal___mehta/' target='blank'><InstagramIcon /></a>
    <a href='https://www.facebook.com/khushal.mehta.374' target='blank'><FacebookIcon/></a>
    <a href='https://github.com/khushalmeh' target='blank'><GitHubIcon/></a>
    <a href='https://www.linkedin.com/feed/' target='blank'><LinkedInIcon/></a>
    </Box>
    <Typography variant='h5' sx ={{"@media (max-width:600px)": {fontSize : "1rem"} }}>
        All Right Reserved &copy; Restaurant
    </Typography>
  </Box>
   </>
  )
}

export default Footer

