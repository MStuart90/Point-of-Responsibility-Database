import React from "react";
import {
  Button,
  Form,
  FormGroup,
  //Label,
  Input
  //FormText
} from "reactstrap";
import "./Search.css";

const Search = (props) => {
  return (
    <Form>
      <FormGroup>
        <Input
          type="search"
          name="search"
          id="search"
          placeholder="Search company, name or product"
        />
      </FormGroup>
      <Button>
        <span role="img" aria-label="Search">
          🔍
        </span>
      </Button>
    </Form>
  );
};

export default Search;