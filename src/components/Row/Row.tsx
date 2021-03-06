import React from "react";
import './Row.css';

export interface RowProps {
    children:any;
}

const Row = (props: RowProps) => {
    const setUpStyle = () => {
      let style:any = {};

      /*
      if(props.backgroundColor) style.backgroundColor = props.backgroundColor;
      if(props.padding) style.padding = props.padding;
      if(props.margin) style.margin = props.margin;
      if(props.width) style.width = props.width;
      if(props.height) style.height = props.height;
      */

      return style;
    }

    const setUpClasses = () => {
      let classes:string = '';
      classes = 'fluence-ui-row';
      
     // if(props.fluid == true) classes += ' fluence-ui-container-fluid';

      return classes;
    }

    return (
        <div style={setUpStyle()} className={setUpClasses()}>{props.children}</div>
    )
};
  
export default Row;