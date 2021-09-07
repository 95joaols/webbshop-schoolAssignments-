import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    margin: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export const ProductCardSkeleton: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Skeleton variant="rect" width={200} height={300} />
      <Skeleton variant="text" />
      <Skeleton variant="text" width="10%" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </div>
  );
};
