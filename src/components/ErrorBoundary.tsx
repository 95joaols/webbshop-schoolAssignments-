import { Theme, Typography } from "@material-ui/core";
import { createStyles, WithStyles, withStyles } from "@material-ui/styles";
import classNames from "classnames";
import { Component, ErrorInfo } from "react";

const styles = () =>
  createStyles({
    root: {
      display: "block",
      // width: width,
      // height: hight,
    },
    card: {
      width: "200px !important",
      margin: 5,
      boxShadow: "2px 2px 4px #000000",
    },
    default: {
      width: "100%",
    },
  });

interface Props extends WithStyles<typeof styles> {
  message?: string;
  style?: String;
}
interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      var Classes = classNames(
        {
          [this.props.classes.card]: this.props.style === "card",
        },
        [this.props.classes.default]
      );
      // You can render any custom fallback UI
      return (
        <div className={Classes}>
          <Typography variant="h4">
            {this.props.message || "Something went wrong."}
          </Typography>
        </div>
      );
    }

    return this.props.children;
  }
}
export default withStyles(styles)(ErrorBoundary);
