import React from 'react';
import MediaCard from './card';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StyleMeScreen from '../static/images/stylemescreen.png';

import TransitionsModal from './modal';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1500,
    margin: "auto",
    height: "100%"
  },
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
}))

const Content = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={4} 
            direction="row" 
            justify="center" 
            alignItems="baseline"
            className={classes.gridContainer}>

        <Grid item xs={0} sm={0} md={2}></Grid>

        <Grid item xs={12} sm={12} md={4}>
          <TransitionsModal 
            image="https://companies.naukri.com/rms-careers/wp-content/uploads/sites/21747/2019/11/how-much-applicant-tracking-software-cost.png"
            cardTitle="BNY Mellon"
            cardText="Summer Analyst"
            modalTitle="BNY Mellon"
            modalSubtitle="Full Stack Engineering Intern"
            modalDetails="Summer 2020 - New York City"
            modalDescription="During my virtual internship, I worked on the development of a pricing engine that leverages 
            modeling and predictive analytics to validate new business pricing and repricing rates, and provide visibility 
            into pricing decision implications. This involved building and documenting the API, implementing authorization, 
            mapping and translating pricing calculations, and working on the frontend when needed. I also collaborated
            with my team to design and implement a caching mechanism that sped up the retrieval of user data. I worked mainly
            in Python and Typescript."
          />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <TransitionsModal 
            image="https://www.ncsc.gov.uk/images/phone-1537387_1280.png?mpwidth=545&mlwidth=737&twidth=961&dwidth=618&dpr=2.625&width=412"
            cardTitle="Payfone"
            cardText="Software Engineering Intern"
            modalTitle="Payone"
            modalSubtitle="Software Engineering Intern"
            modalDetails="Summer 2019 - New York City"
            modalDescription="Payfone is a customer identity platform that provides mobile and digital identity authentication 
            solutions for businesses. I spent the first 4 weeks migrating a web demo that showcased their trust platform into a
            stand-alone application, and the remaining weeks developing a mobile application that allows developers to simulate 
            their authentication APIs onto customers' phones."
          />
        </Grid>

        <Grid item xs={0} sm={0} md={2}></Grid>

        <Grid item xs={12} sm={12} md={4}>
          <TransitionsModal 
            image={StyleMeScreen}
            cardTitle="StyleMe"
            cardText=""
            modalTitle="StyleMe"
            modalSubtitle=""
            modalDetails=""
            modalDescription="StyleMe is a mobile application that generates an outfit of the day given a user's clothing inputs, local weather,
            and color theory. It was built using react native and node.js."
          />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>

        <TransitionsModal 
            image="https://uploads-ssl.webflow.com/5cf10538b2a819c7169a882e/5d972ca60288551b875c4639_facebook-messenger-bot.jpg"
            cardTitle="Messenger Bot"
            cardText=""
            modalTitle=""
            modalSubtitle=""
            modalDetails=""
            modalDescription="Developed a messenger bot hosted on Facebook's Messenger application using Python and Firebase to save and restore user conversations.
            Implemented routing functionality that connects users to one another, eliminating the bot as a third- party after the conversation flow has been completed.
            Increased messenger bot handling capacity to include various message types by leveraging Facebook's Send API."
          />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <TransitionsModal 
            image="https://codehandbook.org/wp-content/uploads/2015/07/python_ff.jpg"
            cardTitle="Instagram Clone"
            cardText=""
            modalTitle=""
            modalSubtitle=""
            modalDetails=""
            modalDescription="Developed a web application for sharing photos that gives users control over viewing permissions using Python Flask.
            Implemented can also comment, like, unfollow, and search photos by tag or poster functionalities.
            Maintained privacy aspect by querying using SQL table definitions."
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12}></Grid>

      </Grid>
    </div>
  )
};

export default Content;