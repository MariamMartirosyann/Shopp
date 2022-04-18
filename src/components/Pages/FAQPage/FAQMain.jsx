import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles({
  accardion: {
    border: "transparent",
    boxShadow: "none",
  },
  closeColor: {
    border: "blue",
  },
});

const FAQMain = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const [isToggled, setisToggled] = useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleToggle = () => setisToggled(!isToggled)

  return (
    <>
      <div className="main-bannerf">
        <div className="main-banner-textf">
          <h3>FAQ</h3>
          <h3>ANSWERS? WE'VE GOT THEM.</h3>
          <p>Here are the questions we are most  </p>
          <p>frequently being asked. </p>
          <p>
            Still got questions?{" "}
            <span>
              Contact us <KeyboardArrowRightIcon />
            </span>
             
          </p>
        </div>
      </div>
      <div className="border-onef">
        <Grid
          container
          spacing={2}
          sx={{
            marginY: "7.5rem",
          }}
        >
          {isToggled ? (
            <Grid container style={{ textAlign: "center" }}>
              <Grid item xs={10}>
                <span>
                  <Typography
                    component={"body2"}
                    variant={"h4"}
                    style={{ fontWeight: "normal" }}
                  >
                    Frequently asked questions
                  </Typography>
                </span>
              </Grid>
              <Grid item xs={2}>
                {" "}
                <SearchIcon onClick={handleToggle} />
              </Grid>
            </Grid>
          ) : (
            <Grid
              container
              style={{ justifyContent: "center" }}
             
            >
              <SearchIcon onClick={handleToggle} className="inputSerach2" />
              <FormControl>
                <OutlinedInput
                  sx={{ width: "800px", height: "40px", margin: "5px" }}
                  placeholder="     Looking for something?"
                />
                <div className="close">
                  {" "}
                  <CloseIcon className={classes.closeColor} onClick={handleToggle}/>
                </div>
              </FormControl>
            </Grid>
          )}

          <Grid container style={{ margin: "2rem 5rem" }}>
            <Grid container>
              {" "}
              <Grid item xs={2}>
                <Typography component={"p"} variant={"body2"}>
                  <span>Setting up FAQs</span>
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography component={"p"} variant={"body2"}>
                  General
                </Typography>
              </Grid>
            </Grid>
            <div style={{ marginTop: "20px" }}>
              <Accordion
                className={classes.accardion}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>How do I add a new question & answer?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    To add a new FAQ follow these steps:
                    <ol style={{ margin: "20px" }}>
                      <li>Click “Manage FAQs” button</li>
                      <li>
                        From your site’s dashboard you can add, edit and manage
                        all your questions and answers
                      </li>
                      <li>
                        Each question and answer should be added to a category
                      </li>
                      <li>Save and publish.</li>
                    </ol>
                    <FacebookRoundedIcon style={{ margin: "3px" }} />
                    <TwitterIcon style={{ margin: "3px" }} />
                    <LinkedInIcon style={{ margin: "3px" }} />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                className={classes.accardion}
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                className={classes.accardion}
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default FAQMain;
