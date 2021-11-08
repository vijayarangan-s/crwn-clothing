import React from "react";
import { CustomButtonContainer } from "./Custom-Button.styles";
import "./Custom-Button.styles.scss";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
