import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import ImgMediaCard from "../../Components/ImgMediaCard";

const useStyles = makeStyles(theme => ({
  content: {
    paddingTop: theme.spacing(3),
  },
}));
export const CatalogPage = ({ rows }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.content}>
      <Grid container spacing={3}>
        {rows &&
          rows.map(row => (
            <Grid key={row.id} item xs={12}>
              <ImgMediaCard {...row} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};
