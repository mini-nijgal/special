import MD5 from "md5.js";
import React from "react";
import * as colors from "./colors";
import styled from "styled-components";
import Heart from "./components/Heart";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Title = styled.div`
  margin-top: -0.5em;
  font-size: 40px;
  font-weight: 600;
  white-space: nowrap;
`;

interface Person {
  name: string;
}

interface State {
  persons: Person[];
}

export default class App extends React.Component<{}, State> {
  state: State = {
    persons: []
  };

  constructor(props: {}) {
    super(props);

    const urlParams = new URLSearchParams(window.location.search);

    const personsParam = urlParams.get("persons");
    if (personsParam) console.info(this.encrypt(JSON.parse(personsParam)));

    const data = urlParams.get("data");
    const token = urlParams.get("token");
    if (data && token) this.state.persons = this.decrypt(data, token) || [];
  }

  encrypt(persons: Person[]) {
    const json = JSON.stringify(persons);
    const data = btoa(json);
    return {
      data,
      token: new MD5().update(data).digest("hex")
    };
  }

  decrypt(data: string, token: string): Person[] | null {
    if (new MD5().update(data).digest("hex") !== token) return null;
    const json = atob(data);
    return JSON.parse(json);
  }

  render() {
    const { persons } = this.state;

    return (
      <Container>
        <Title>&#x2764; {persons.map(person => person.name).join(" & ")} &#x1F495;</Title>

        <Heart flying delay="6s" flyingSpeed="8s" xDisplacement="-48vw" color={colors.HEART[1]} size={0.5} />
        <Heart flying delay="4s" flyingSpeed="4s" xDisplacement="-25vw" color={colors.HEART[2]} size={0.5} />
        <Heart flying beating />
        <Heart flying delay="3.6s" flyingSpeed="6s" xDisplacement="25vw" color={colors.HEART[3]} size={0.5} />
        <Heart flying delay="9s" flyingSpeed="5s" xDisplacement="48vw" color={colors.HEART[4]} size={0.5} />
      </Container>
    );
  }
}
