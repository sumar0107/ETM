import React from "react";
import { withRouter } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  Card: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "flex-start",
      alignContent: "flex-start",
      justifyContent: "space-between",
      flexDirection: "row",
    },
  },
  CardActionArea: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "flex-start",
      alignContent: "flex-start",
      justifyContent: "flex-start",
      flexDirection: "row",
    },
  },
  CardMedia: {
    [theme.breakpoints.up("sm")]: {
      width: "220px",
      height: "100%",
    },
  },
  CardContent: {},
  CardActions: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      width: "200px",
    },
  },
  price: {
    marginBottom: theme.spacing(1),
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      display: "block",
      width: "100%",
    },
  },
  btn: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: "0 !important",
    },
  },
}));

const ImgMediaCard = ({ id, title, vendor, pack, price, history, match }) => {
  const classes = useStyles();

  return (
    <Card className={classes.Card}>
      <CardActionArea className={classes.CardActionArea} onClick={() => history.push(`${match.url}/${id}`)}>
        <CardMedia
          className={classes.CardMedia}
          component="img"
          alt={title}
          height="140"
          image="https://placebear.com/640/360"
          title={title}
        />
        <CardContent className={classes.CardContent}>
          <Typography gutterBottom component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Производитель: {vendor}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.CardActions}>
        <div className={classes.price}>
          <Typography gutterBottom component="h2">
            {price}₽
          </Typography>
          <Typography>Цена за {pack} шт</Typography>
        </div>
        <Button className={classes.btn} fullWidth size="large" variant="contained" color="secondary">
          Купить
        </Button>
      </CardActions>
    </Card>
  );
};
export default withRouter(ImgMediaCard);
