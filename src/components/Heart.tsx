import React from "react";
import * as colors from "../colors";
import styled, { keyframes, css } from "styled-components";

const Fly = keyframes`
  0% {
    top: 110%;
  }

  100% {
    top: -10%;
  }
`;

const Beat = keyframes`
  0% {
    transform: scale(0.75);
  }

  20% {
    transform: scale(1);
  }

  40% {
    transform: scale(0.75);
  }
  
  60% {
    transform: scale(1);
  }
  
  80% {
    transform: scale(0.75);
  }
  
  100% {
    transform: scale(0.75);
  }
`;

interface OuterContainerProps {
  flying?: boolean;
  flyingSpeed?: string;
  xDisplacement?: string;
  delay?: string;
}

const OuterContainer = styled.div<OuterContainerProps>`
  position: absolute;
  top: 110%;
  left: calc(50% - 50px);
  ${props => props.flying ? css`
    animation: ${Fly} ease-in infinite;
    animation-delay: ${props.delay || "0s"};
    animation-duration: ${props.flyingSpeed || "10s"};
  ` : ``}
  transform: translate3D(${props => props.xDisplacement ? props.xDisplacement : 0}, 0, 0);
`;

interface ContainerProps {
  color?: string;
  beating?: boolean;
  delay?: string;
  size?: number;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100px;
  height: 90px;
  margin: 0;
  ${props => props.beating ? css`
    animation: ${Beat} 1s infinite;
    animation-delay: ${props.delay || "0s"};
  ` : ``}
  transform: scale(${props => props.size || 1});

  &:before, &:after {
    position: absolute;
    content: "";
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: ${props => props.color || colors.PRIMARY};
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;

interface Props {
  className?: string;
  color?: string;
  beating?: boolean;
  flying?: boolean;
  flyingSpeed?: string;
  xDisplacement?: string;
  delay?: string;
  size?: number;
}

export default class Heart extends React.Component<Props> {
  render() {
    const {
      className,
      children,
      color,
      beating,
      flying,
      flyingSpeed,
      xDisplacement,
      delay,
      size
    } = this.props;
    return (
      <OuterContainer flying={flying} flyingSpeed={flyingSpeed} xDisplacement={xDisplacement} delay={delay}>
        <Container className={className} color={color} beating={beating} delay={delay} size={size}>
          {children}
        </Container>
      </OuterContainer>
    );
  }
}