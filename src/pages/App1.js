import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import './App.css';

const SERVICE_ID = 'Busin1';
const TEMPLATE_ID = 'template_s398wcn';
const USER_ID = 'user_9s3jX3CWqetgFQfVxklAW';

const App1 = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
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
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-name"
          control={Input}
          label="Email"
          name="name"
          placeholder="Email..."
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="email"
          placeholder="Email..."
          required
          icon="mail"
          iconPosition="left"
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
      </Form>
    </div>
  );
};

export default App1;
