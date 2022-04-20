import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useSelector } from "react-redux";
import { selecActivetProduct } from "../../redux/slices/products";
import { makeStyles } from "@mui/styles";
import Header from "./Header";

import "../../App.css";

const useStyles = makeStyles({
  accardion: {
    border: "transparent",
    boxShadow: "none",
  },
});

const images = [
  {
    path: "https://static.wixstatic.com/media/1f3c0f_b9b48ec45ba54a519341550453a2cdeb.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01/1f3c0f_b9b48ec45ba54a519341550453a2cdeb.webp",
  },
  {
    path: "https://static.wixstatic.com/media/1f3c0f_ea79c3bcb9204233a90c0cd555f50b2d.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01/1f3c0f_ea79c3bcb9204233a90c0cd555f50b2d.webp",
  },
];

function ProductDetail() {
  const location = useLocation()
  const classes = useStyles();
  const [selectedImg, setSelectedImg] = useState(images[0].path);
  const props = useSelector(selecActivetProduct);
  console.log(location)
  const handleChangeImage = (imagePath) => {
    setSelectedImg(imagePath);
  };

  return (
    <>
      <Header />

      <Grid
        container
        style={{
          margin: "50px",
          color: "grey",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={3}>
          <Typography
            component={"p"}
            variant={"body2"}
            style={{ textDecoration: "none" }}
          >
            <Link style={{ textDecoration: "none", color: "grey" }} to="/">
              Home
            </Link>{" "}
            /{" "}
            <Link style={{ textDecoration: "none", color: "black" }} to="/shop">
              Shop
            </Link>{" "}
            / I a Product
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          style={{
            justifyContent: "start",
            display:"flex",
            flexDirection:"row"

          }}
        >
          <ChevronLeftIcon />

          <Typography
            component={"p"}
            variant={"body2"}
            style={{ textDecoration: "none",margin:"0", padding:"0"
           }}
          >
            Prev | Next
          </Typography>

          <ChevronRightIcon />
        </Grid>
      </Grid>
      <Grid container style={{ margin: "10px" }} spacing={2}>
        <Grid item xs={6}>
          <Grid>
            <img src={selectedImg} on alt="camera" className="detailPhoto" />
          </Grid>

          <Grid container>
            {images.map((item) => (
              <Grid onClick={() => handleChangeImage(item.path)}>
                <img src={item.path} alt="camera" className="detailPhoto2" />
              </Grid>
            ))}
            <Box>
              <Typography
                variant="p"
                component={"body2"}
                sx={{ marginTop: "10px" }}
              >
                I'm a product description. I’m a great place to include more
                information about your product. Buyers like to know what they’re
                getting before they purchase.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Box>
            <Typography component={"h6"} variant="h4">
              {props.name}
            </Typography>
          </Box>
          <br />
          <Box>
            <Typography component={"h6"}>SKU: 0005</Typography>
          </Box>
          <br />
          <Box>
            <Typography component={"h6"}>${props.price}</Typography>
          </Box>
          <br />
          <Box>
            <Typography component={"h6"}>Quantity</Typography>
          </Box>
          <FormControl sx={{ width: "75px" }} className="inputDetail">
            <OutlinedInput type="number" placeholder="0 " />
            <br />
          </FormControl>
          <br />
          <button className="btnDetail">Add to Card</button>
          <button className="btnDetail btnDetail2">Add to Card</button>
          <Box>
            <Accordion defaultExpanded="true" className={classes.accardion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>PRODUCT INFO</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  I'm a product detail. I'm a great place to add more
                  information about your product such as sizing, material, care
                  and cleaning instructions. This is also a great space to write
                  what makes this product special and how your customers can
                  benefit from this item. Buyers like to know what they’re
                  getting before they purchase, so give them as much information
                  as possible so they can buy with confidence and certainty.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded="true" className={classes.accardion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>RETURN AND REFUND POLICY</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  I’m a Return and Refund policy. I’m a great place to let your
                  customers know what to do in case they are dissatisfied with
                  their purchase. Having a straightforward refund or exchange
                  policy is a great way to build trust and reassure your
                  customers that they can buy with confidence.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
export default ProductDetail;
