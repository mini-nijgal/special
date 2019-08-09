import React from "react";
import styled from "styled-components";

interface ContainerProps {
  scale?: number;
}

const Container = styled.div<ContainerProps>`
  font-size: calc(50vmin / 600 * ${props => props.scale || 1});
  position: relative;
  margin: auto;
  width: 260em;
  height: 330em;
  z-index: -1;
`;

const Ear = styled.div`
  position: absolute;
  background-color: rgb(95,60,30);
  box-shadow: 0 0 0 20em rgb(190,120,60) inset;
  width: 80em;
  height: 80em;
	border-radius: 50%;
`;

const LeftEar = styled(Ear)`
  right: 30em;
`;

const RightEar = styled(Ear)`
  left: 30em;
`;

const Head = styled.div`
  position: absolute;
  background-color: rgb(190,120,60);
  width: 160em;
  height: 160em;
  right: 0;
  left: 0;
  margin: auto;
  z-index: 1;
	border-radius: 50%;
`;

const Eye = styled.div`
  position: absolute;
  box-shadow: 2em -2em 0 8em inset;
	top: 65em;
	width: 20em;
	height: 20em;
	border-radius: 50%;
	background-color: rgb(255, 255, 255);
  color: #000;
`;

const LeftEye = styled(Eye)`
  right: 45em;
`;

const RightEye = styled(Eye)`
  left: 45em;
`;

const MouthArea = styled.div`
  position: absolute;
  background-color: rgb(230,160,90);
  right: 0;
  bottom: 5em;
  left: 0;
  margin: auto;
  width: 100em;
  height: 70em;
	border-radius: 50%;
`;

const Nose = styled.div`
  background-color: rgb(0,0,0);
  position: absolute;
	top: 15em;
	right: 0;
	left: 0;
	margin: auto;
	width: 40em;
	height: 30em;
  border-radius: 50%;

  &::after {
    content: "";
    position: absolute;
  	top: 3em;
	  right: 8em;
	  width: 10em;
	  height: 8em;
    border-radius: 50%;
	  background-color: rgb(255, 255, 255);
  }
`;

const Cheek = styled.div`
  position: absolute;
  bottom: 10em;
  width: 30em;
  height: 30em;
  border-radius: 50%;
`;

const LeftCheek = styled(Cheek)`
  box-shadow: 2em -2em 0 0 rgb(115,80,45) inset;
  right: 20em;
`;

const RightCheek = styled(Cheek)`
  box-shadow: -2em -2em 0 0 rgb(115,80,45) inset;
  left: 20em;
`;

const Body = styled.div`
  background-color: rgb(230,160,90);
	box-shadow: 0 0 0 24em rgb(190,120,60) inset;
	margin: auto;
  position: absolute;
	right: 0;
	bottom: 22em;
	left: 0;
	width: 170em;
	height: 190em;
  border-radius: 50%;
`;

const InnerArm = styled.div`
  width: 50em;
	height: 80em;
  position: absolute;
	bottom: 0;
`;

const Paw = styled.div`
  background-color: rgb(190,120,60);
  width: 80em;
  height: 60em;
  position: absolute;
  top: 30em;
	border-radius: 50%;
`;

const Arm = styled.div`
  background-color: rgb(170,100,50);
  position: absolute;
	top: 130em;
	width: 70em;
	height: 60em;
`;

const LeftArm = styled(Arm)`
  border-radius: 0 70em 0 0 / 0 60em 0 0;
  right: 0;
  
  &>${InnerArm} {
    border-radius: 0 50em 0 0 / 0 80em 0 0;
    box-shadow: -22em 22em 0 0 rgb(170,100,50) inset;
    right: 55em;
  }

  &>${Paw} {
	  right: 0;
  }
`;

const RightArm = styled(Arm)`
  border-radius: 70em 0 0 0 / 60em 0 0 0;
  left: 0;

  &>${InnerArm} {
    border-radius: 50em 0 0 0 / 80em 0 0 0;
    box-shadow: 22em 22em 0 0 rgb(170,100,50) inset;
    left: 55em;
  }
`;

const Leg = styled.div`
  position: absolute;
  background-color: rgb(170,100,50);
  border-radius: 45em 45em 0 0 / 70em 70em 0 0;
  bottom: 40em;
  width: 90em;
  height: 70em;
`;

const LeftLeg = styled(Leg)`
  right: 10em;
`;

const RightLeg = styled(Leg)`
  left: 10em;
`;

const Foot = styled.div`
  position: absolute;
  background-color: rgb(230,160,90);
  box-shadow: 0 5em 0 10em rgb(190,120,60) inset;
  width: 100%;
  height: 80em;
  top: 30em;
	border-radius: 50%;
`;

interface Props {
  className?: string;
  scale?: number;
}

export default class Teddy extends React.Component<Props> {
  render() {
    const { className, scale } = this.props;

    return (
      <Container className={className} scale={scale}>
        <LeftEar />
        <RightEar />
        <Head>
          <LeftEye />
          <RightEye />
          <MouthArea>
            <LeftCheek />
            <RightCheek />
            <Nose />
          </MouthArea>
        </Head>
        <Body />
        <LeftArm>
          <InnerArm />
          <Paw />
        </LeftArm>
        <RightArm>
          <InnerArm />
          <Paw />
        </RightArm>
        <LeftLeg>
          <Foot />
        </LeftLeg>
        <RightLeg>
          <Foot />
        </RightLeg>
      </Container>
    );
  }
}