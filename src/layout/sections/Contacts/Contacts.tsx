import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";
export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <FlexWrapper direction="column">
          <SectionTitle>Contact me</SectionTitle>
          <StyledForm>
            <InputBlock>
              <label htmlFor="1">Name</label>
              <Field id="1" placeholder="Name" />
            </InputBlock>
            <InputBlock>
              <label htmlFor="2">Email</label>
              <Field id="2" placeholder="Email" />
            </InputBlock>
            <InputBlock>
              <label htmlFor="3">Message</label>
              <Field id="3" as="textarea" placeholder="Write something" />
              <Button type="submit">Send</Button>
            </InputBlock>
          </StyledForm>
        </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};
const StyledContacts = styled.section`
  ${SectionTitle} {
    padding-left: 35px;
  }
  min-height: 50vh;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin: 10px auto 0;
  max-width: 400px;
  width: 100%;

  button {
    align-self: flex-end;
    border-radius: 8px;
    background-color: ${theme.colors.secondary};
    margin-top: 24px;
  }
`;

const Field = styled.input`
  padding: 5px 0 5px 5px;
  margin-top: 8px;
  border-radius: 8px;
  border: 1px solid #e8ecf4;
  max-width: 400px;
  width: 100%;
  background-color: #fff;
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  label {
    font-family: "Nunito", sans-serif;
    font-size: 16px;
    font-weight: 600;
  }
  input {
    height: 40px;
  }
  textarea {
    height: 160px;
    resize: none;
  }
`;
