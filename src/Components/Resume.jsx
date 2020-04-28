import React from "react";

import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#253A4B",
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "grey grey transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent grey grey",
      },
    },
  },
  timeline: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },

  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "grey",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 .5rem",

    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "white",
    padding: "3rem 0",
    textTransform: "uppercase",
    maxWidth: "100%",
    marginTop: "4rem",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          working experience
        </Typography>
        <Box component="div" className={classes.timeline}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h4"
              align="right"
              className={classes.subHeading}
            >
              Thesis
            </Typography>
            <Typography
              variant="body1"
              align="right"
              style={{ color: "grey", textTransform: "uppercase" }}
            >
              Warsaw University of technology
            </Typography>
            <Typography
              variant="subtitle1"
              align="right"
              style={{ color: "white" }}
            >
              Use of AI and machine learning in modeling of manufacturing
              processes with highly unbalanced discrete outputs.
            </Typography>
          </Box>

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h4"
              align="left"
              className={classes.subHeading}
            >
              Intermediate Project
            </Typography>
            <Typography
              variant="body1"
              align="left"
              style={{ color: "grey", textTransform: "uppercase" }}
            >
              Warsaw University of technology
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: "white" }}
            >
              Comparitive analyses Battery Electric, Fuel Cell EV and gasoline
              Vehicle.
            </Typography>
          </Box>
          {/* <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          ></Typography> */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h4"
              align="right"
              className={classes.subHeading}
            >
              Project Coordinator
            </Typography>
            <Typography
              variant="body1"
              align="right"
              style={{ color: "grey", textTransform: "uppercase" }}
            >
              VIRIGINIC LLC (AUG 2019 - DEC 2019)
            </Typography>
            <Typography
              variant="subtitle1"
              align="right"
              style={{ color: "white" }}
            >
              <ul>Management leading team of interns</ul>
              <ul>coordination with manufacturing plant in USA</ul>
              <ul>Process(Procurement of machine tools)</ul>
              <ul>
                Design(E-commerce website in Shopify,labels, logos, templates
                for products)
              </ul>
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2018
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h4"
              align="left"
              className={classes.subHeading}
            >
              Enrolled in Master Program
            </Typography>
            <Typography
              variant="body1"
              align="left"
              style={{ color: "grey", textTransform: "uppercase" }}
            >
              Warsaw University of technology (Oct 2018 - Current)
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: "white" }}
            >
              Global Production Engineering and Management.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2017
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h4"
              align="right"
              className={classes.subHeading}
            >
              Senior Design Engineer
            </Typography>
            <Typography
              variant="body1"
              align="right"
              style={{ color: "grey", textTransform: "uppercase" }}
            >
              Adroitec Engineering Solutions (Jan 2017 - July 2018)
            </Typography>
            <Typography
              variant="subtitle1"
              align="right"
              style={{ color: "white" }}
            >
              <ul>
                Delivered presentations, training and webinar of PTC Creo
                Parametric with PTC in companies.
              </ul>
              <ul>
                Rapid Prototyping using FDM,SLA,SLS additive manufacturing.
              </ul>
              <ul>
                Design and Developed more than 5 machines, Press 2- 25Tons.
              </ul>
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2015
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h4"
              align="left"
              className={classes.subHeading}
            >
              Consultant
            </Typography>
            <Typography
              variant="body1"
              align="left"
              style={{ color: "grey", textTransform: "uppercase" }}
            >
              Saraswati Tools India (Aug 2015 - Sep 2018)
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: "white" }}
            >
              <p>Joined Saraswati tools as consultant part time. </p>
              <p>
                (Procuring new machines, Designing new machines, helping in
                decision making).
              </p>
              <p> Designed 10+ machines,tools,fixtures.</p>
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2014
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h4"
              align="right"
              className={classes.subHeading}
            >
              Design Engineer
            </Typography>
            <Typography
              variant="body1"
              align="right"
              style={{ color: "grey", textTransform: "uppercase" }}
            >
              Motherson Sumi Systems Limited (Feb 2014 - Jan 2017)
            </Typography>
            <Typography
              variant="subtitle1"
              align="right"
              style={{ color: "white" }}
            >
              <ul>
                Designed 20+ Machines, 50+ Tools, 50+ Jigs & Fixtures,
                Simulation and Testing rigs (Vibration)
              </ul>
              <ul>
                {" "}
                Precision components, Terminal Bending tools, picking tools,
                related to Automotive wiring harness.
              </ul>
              <ul>
                Machine operation manual, Maintenance manual, Standard operating
                procedure and related documents creation.
              </ul>
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2012
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h4"
              align="left"
              className={classes.subHeading}
            >
              Product Development Engineer
            </Typography>
            <Typography
              variant="body1"
              align="left"
              style={{ color: "grey", textTransform: "uppercase" }}
            >
              JBM Limited (Jul 2012 - Feb 2014)
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: "white" }}
            >
              <p>
                10+ Automotive component Designed Developed (From RFQ, Costing,
                project approval, PPAP sign off from customer, Handover to
                Production).
              </p>
              <p>
                Creation and maintaining all Engineering documents (PPAP, APQP
                docs, FMEA, SOP).
              </p>
              <p>Fitment trial at customer end & Tool trial at vendor end.</p>
              <p>
                3+ Product Line Set up. 10+ Welding fixtures design &
                Development for Heavy Trucks Component assembly.
              </p>
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2008
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h4"
              align="right"
              className={classes.subHeading}
            >
              ENROLLED IN Bachelor PROGRAM
            </Typography>
            <Typography
              variant="body1"
              align="right"
              style={{ color: "grey", textTransform: "uppercase" }}
            >
              TUlA'S (Uttarakhand Technical University) Aug 2008 - Jun 2012
            </Typography>
            <Typography
              variant="subtitle1"
              align="right"
              style={{ color: "white" }}
            >
              <ul>Bachelor of Technology(Mechanical Engineering)</ul>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
