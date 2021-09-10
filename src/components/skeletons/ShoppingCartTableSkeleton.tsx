import { Container, makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

export const ShoppingCartTableSkeleton: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    productTable: {
      marginTop: 24,
      marginBottom: 24,
    },
  }));
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.productTable}>
      <Skeleton variant="rect" width={"100%"} height={118} />
    </Container>
  );
};
