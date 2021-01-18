import React, { useState } from "react";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Form() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/xwkwyedn",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <div style={{
      maxWidth: 475
    }}>
      <h2>Contact</h2>
      <p>
        Or you can directly email me at kev (dot) wang2 (at) gmail, or message me on LinkedIn
      </p>
      <form onSubmit={handleOnSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <TextField required={false} label="Email (Optional)" type='email' name='email'/>
          <TextField required={false} label="Name (Optional)" type='text' name='name'/>
        </div>
        <br/>
        <TextField required={true} multiline={true} label="Message" type='text' name='message'/>
        <br/>
        <Button type='submit'
                disabled={serverState.submitting}
                variant='contained'
                style={{maxWidth: 100}}>
          Submit
        </Button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>
    </div>
  );
};