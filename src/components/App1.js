import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import { init } from '@emailjs/browser';
import styled from 'styled-components';

init('user_9s3jX3CWqetgFQfVxklAW');

const SERVICE_ID = 'Busin1';
const TEMPLATE_ID = 'template_s398wcn';
const USER_ID = 'user_9s3jX3CWqetgFQfVxklAW';
const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gold);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 1px 2px 6px 0.5px white;
    transition: 167ms ease-in-out background-color;
  }
  .sendBtnTxt {
    color: black;
  }
  .sendBtnTxt:hover {
    color: gold;
  }
  button[type='submit']:hover {
    background-color: var(--white);
    box-shadow: 1px 2px 6px 0.5px gold;
  }
`;
const App1 = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully I will Get Back To You Soon',
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <div className="App">
      <FormStyle onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-name"
          control={Input}
          label="Name"
          name="from_Name"
          placeholder="Name..."
          required
        />
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Phone"
          name="phone"
          placeholder="Phone..."
          required
        />
        <Form.Field
          id="form-input-control-email"
          control={Input}
          type="email"
          label="Email"
          name="email"
          placeholder="Email..."
          required
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="message"
          placeholder="Message..."
          required
        />
        <Button type="submit" color="green">
          Submit
        </Button>
      </FormStyle>
    </div>
  );
};

export default App1;
