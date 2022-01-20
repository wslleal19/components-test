import React from "react";
import './Box.css'

export interface BoxProps {
    children: any;

    space?: string;
    spaceTop?: string;
    spaceBottom?: string;
    spaceLeft?: string;
    spaceRight?: string;
    spaceVertical?: string;
    spaceHorizontal?: string;
}

const Box = (props: BoxProps) => {

    const setUpStyle = () => {
      let style:any = {};

      if(props.space) style.margin = props.space;
      if(props.spaceTop) style.marginTop = props.spaceTop;
      if(props.spaceBottom) style.marginBottom = props.spaceBottom;
      if(props.spaceLeft) style.marginLeft = props.spaceLeft;
      if(props.spaceRight) style.marginRight = props.spaceRight;
      if(props.spaceVertical) {
        style.marginTop = props.spaceVertical;
        style.marginBottom = props.spaceVertical;
      }
      if(props.spaceHorizontal) {
        style.marginRight = props.spaceHorizontal;
        style.marginLeft = props.spaceHorizontal;
      }

       return style;
    }

    const setUpClasses = () => {
      let classes:string = '';
      classes = 'fluence-ui-box';

      return classes;
    }
  
    return(
        <div style={setUpStyle()} className={setUpClasses()}>{props.children}</div>
    )
};
  
export default Box;