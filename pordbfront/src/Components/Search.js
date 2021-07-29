import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Example = (props) => {
  return (
    <Form>
        <FormGroup>
            <Label for="exampleEmail">Search</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Search" />
        </FormGroup>
        <Button>Submit</Button>
    </Form>
  );
}

export default Example;