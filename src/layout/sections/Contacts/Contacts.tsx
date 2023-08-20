import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact Me</SectionTitle>
      <StyledForm>
        <InputBlock>
          <h4>Name</h4>
          <Field placeholder="Name" />
        </InputBlock>
        <InputBlock>
          <h4>Email</h4>
          <Field placeholder="Email" />
        </InputBlock>
        <InputBlock>
          <h4>Message</h4>
          <Field as="textarea" placeholder="Write something" />
          <Button>Send</Button>
        </InputBlock>
      </StyledForm>
    </StyledContacts>
  );
};
const StyledContacts = styled.section`
  min-height: 50vh;
  background-color: #e6e6e6;
`;
const StyledForm = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  button {
    align-self: flex-end;
  }
`;
const Field = styled.input`
  padding: 5px 0 5px 5px;
`;

const InputBlock = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
