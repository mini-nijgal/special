import React from "react";
import Person from "../Person";
import * as util from "../util";
import * as colors from "../colors";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 5px 0;
`;

const Label = styled.label``;

const Input = styled.input.attrs({ type: "text" })`
  border: 1px solid ${colors.PRIMARY};
  padding: 3px;
  flex: 1;
  line-height: 20px;
  min-width: 200px;
  outline: 0;
`;

const ShareLink = styled.a.attrs({ target: "_blank" })``;

interface State {
  persons: Person[];
}

export default class Form extends React.Component<{}, State> {
  state: State = {
    persons: []
  };

  render() {
    const { persons } = this.state;

    return (
      <Container>
        <Center>
          <Row>
            <Label>First person:</Label>
            <Input placeholder="e.g. firstname, nickname" onChange={this.onFirstPersonNameChange} />
          </Row>
          <Row>
            <Label>Second person:</Label>
            <Input placeholder="e.g. yourself, firstname, nickname" onChange={this.onSecondPersonNameChange} />
          </Row>

          <div>
            {this.validate() && <ShareLink href={util.generateLink(persons)}>Share link</ShareLink>}
          </div>
        </Center>
      </Container>
    );
  }

  validate() {
    const { persons } = this.state;
    return persons.length === 2 && persons.every(person => !!person && !!person.name);
  }

  onFirstPersonNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    const { persons } = this.state;
    if (persons.length === 0) {
      this.setState({
        persons: [{ name: value }]
      });
    }
    else if (persons.length === 1 || persons.length === 2) {
      const person = {
        ...persons[0],
        name: value
      };

      const newPersons = [
        ...persons
      ];
      newPersons.shift();

      this.setState({
        persons: [
          person,
          ...newPersons
        ]
      });
    }
  }

  onSecondPersonNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    const { persons } = this.state;
    if (persons.length === 0) {
      this.setState({
        persons: [
          { name: "" },
          { name: value }
        ]
      });
    }
    else if (persons.length === 1) {
      const person = {
        name: value
      };
      this.setState({
        persons: [
          ...persons,
          person
        ]
      });
    }
    else if (persons.length === 2) {
      const person = {
        ...persons[1],
        name: value
      };

      const newPersons = [
        ...persons
      ];
      newPersons.pop();

      this.setState({
        persons: [
          ...newPersons,
          person
        ]
      });
    }
  }
}