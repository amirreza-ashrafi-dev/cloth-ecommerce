import React from 'react';
import { CustomButtonContainer } from './custom-button';

const CustomButton = ({ children, ...otherprops }) => (
    <CustomButtonContainer  {...otherprops} > {children} </CustomButtonContainer>
)

export default CustomButton;