import React from "react";

export interface ButtonProps {
    label: string;
    block?: boolean;
    disabled?: boolean;
    htmlType?: string;
    loading?: boolean;
    size?: string;
    type?: string;
    endIcon?: any;
    startIcon?: any;

    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;

    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
    const setUpStyle = () => {
      let style:any = {};

      if(props.textColor) style.color = props.textColor;
      if(props.backgroundColor) style.backgroundColor = props.backgroundColor;
      if(props.borderColor) style.borderColor = props.borderColor;

      return style;
    }

    const setUpClasses = () => {
      let classes:string = '';
      classes = 'fluence-ui-button';
      
      if(props.type == 'dashed') classes += ' fluence-ui-button-type-dashed';
      if(props.type == 'text') classes += ' fluence-ui-button-type-text';

      if(props.size == 'small') classes += ' fluence-ui-button-small';
      if(props.size == 'default') classes += ' fluence-ui-button-default';
      if(props.size == 'large') classes += ' fluence-ui-button-large';
    
      if(props.block) classes += ' fluence-ui-button-block';

      return classes;
    }

    const isDisabledButton = () => {
      if(props.disabled) return true;
      return false;
    }
  
    return(
         <button onClick={props.onClick} disabled={isDisabledButton()} style={setUpStyle()} className={setUpClasses()}>{props.label}</button>
    )
};
  
export default Button;