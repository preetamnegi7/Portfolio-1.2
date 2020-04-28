// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Typography, Grid, Button } from "@material-ui/core";

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& label": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        fontSize: 16,
      },
      "&hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;

    return (
      <Grid container justify="center">
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xjvabbge"
          method="POST"
          style={{
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            position: "absolute",
          }}
        >
          <Typography
            variant="h5"
            style={{
              color: "white",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            hire or contact me...
          </Typography>
          <InputField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="name"
            name="name"
            fullWidth={true}
            margin="dense"
            inputProps={{ style: { color: "white" } }}
          />
          <br />
          <InputField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            fullWidth={true}
            margin="dense"
            inputProps={{ style: { color: "white" } }}
          />
          <br />
          <InputField
            fullWidth={true}
            label="Message:"
            multiline
            rows={4}
            defaultValue=""
            variant="outlined"
            input
            type="text"
            name="message"
            margin="dense"
            inputProps={{ style: { color: "white" } }}
          />
          <br />
          {status === "SUCCESS" ? (
            <Typography
              variant="h5"
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              Message Sent!!!
            </Typography>
          ) : (
            <Button
              style={{
                textAlign: "center",
                marginTop: "0.5rem",
              }}
            >
              <button
                style={{
                  textTransform: "uppercase",
                  fontSize: "1.10em",
                  verticalAlign: "middle",
                }}
              >
                Send Message
              </button>
            </Button>
          )}
          {status === "ERROR" && (
            <Typography
              variant="h5"
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              Ooops! There was an error.
            </Typography>
          )}
        </form>
      </Grid>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default withStyles({ withTheme: true })(MyForm);
