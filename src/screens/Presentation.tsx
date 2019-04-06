import React from "react";
import Person from "../Person";
import * as util from "../util";
import * as colors from "../colors";
import styled from "styled-components";
import Heart from "../components/Heart";
import { Helmet } from "react-helmet";

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

interface Props {
  persons: Person[];
}

export default class Presentation extends React.Component<Props> {
  render() {
    const { persons } = this.props;

    const title = `${persons.map(person => person.name).join(" & ")}`;

    return (
      <Container>
        <Helmet title={`${title} - ❤ Love 💕`} />

        <Title>❤ {title} 💕</Title>

        <Heart flying delay="6s" flyingSpeed="8s" xDisplacement="-48vw" color={colors.HEART[1]} size={0.5} />
        <Heart flying delay="4s" flyingSpeed="4s" xDisplacement="-25vw" color={colors.HEART[2]} size={0.5} />
        <Heart flying beating />
        <Heart flying delay="3.6s" flyingSpeed="6s" xDisplacement="25vw" color={colors.HEART[3]} size={0.5} />
        <Heart flying delay="9s" flyingSpeed="5s" xDisplacement="48vw" color={colors.HEART[4]} size={0.5} />
      </Container>
    );
  }
}