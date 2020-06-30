import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { Product } from "../../Components/Product";

const useStyles = makeStyles(theme => ({
  content: {
    paddingTop: theme.spacing(3),
  },
}));

export const ProductPage = ({ rows }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.content}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Product rows={rows} />
        </Grid>
      </Grid>
    </Container>
  );
};
