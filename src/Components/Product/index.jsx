import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

export const Product = ({ rows }) => {
  const [row, setRow] = useState(null);
  let { id: idParams } = useParams();
  useEffect(() => {
    if (rows.length) {
      setRow(rows.find(({ id }) => id === idParams));
    }
  }, [rows, idParams]);
  return (
    <>
      {row && (
        <Card>
          <CardHeader title={row.title} subheader={`Производитель: ${row.vendor}`} />
          <CardMedia image="https://placebear.com/640/360" title={row.title} style={{ minHeight: "300px" }} />
          <CardContent>
            <Typography gutterBottom component="h2">
              {row.price}₽
            </Typography>
            <Typography>Цена за {row.pack} шт</Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button fullWidth size="large" variant="contained" color="secondary">
              Купить
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
};
