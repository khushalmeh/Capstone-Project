import React from 'react'
import Layout from './../components/Layout/Layout';
import { Box, Typography } from '@mui/material'
import res from "../images/res.jpg"
const About = () => {
  return (
    <Layout>
      <Box sx={{
        textAlign: "center",
        "& h1": {
          fontWeight: "bold",
          my: 2

        },
        "& p": { textAlign: "justify" }
      }}>
        
        <Typography variant="h3">
          Welcome to My Restaurant
        </Typography>
        <br/>
        <img src={res} className = "image"/>
        <p>
          Welcome to My Restaurant, where we serve up delicious, home-style meals in a warm and welcoming environment. Our passion is bringing people together over good food, and we've been doing just that since 2010.

          Our menu is filled with classic dishes that have been passed down through generations, as well as innovative new creations that will tantalize your taste buds. Whether you're in the mood for a juicy steak, a comforting bowl of pasta, or a fresh salad, you'll find something to love on our menu.

          We believe that great food starts with the best ingredients, which is why we source only the freshest and highest quality produce, meat, and seafood. Our team of expert chefs takes pride in preparing each dish from scratch, using traditional cooking methods and techniques that bring out the natural flavors of the ingredients.
        </p>
        <br>
        </br>
        <p>
        At My Restaurant, we're more than just a place to eat. We're a community hub where people come to relax, catch up with friends, and enjoy a meal in good company. Our cozy and inviting dining room is the perfect place to gather with loved ones and enjoy a delicious meal.

So, whether you're in the mood for a quick bite or a leisurely dinner, we invite you to come visit us at My Restaurant. We're confident that you'll love our food and atmosphere, and we look forward to serving you soon!
        </p>
      </Box>

    </Layout>
  )
}

export default About