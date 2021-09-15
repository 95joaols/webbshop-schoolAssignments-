import { Container, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export const CustomerInputSkeleton: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Skeleton variant="text" />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="text" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="text" />
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="text" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="text" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="text" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="text" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="text" />
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="text" />
        </Grid>
      </Grid>
    </Container>
  );
};
