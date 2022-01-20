import React from "react";
import './Col.css';

export interface ColProps {
    children:any;

    sm? :number;
    md? :number;
    lg? :number;
}

const Col = (props: ColProps) => {
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
      classes = 'fluence-ui-col';
      
      if(props.sm) classes += ' fluence-ui-col-sm-' + props.sm;
      if(props.md) classes += ' fluence-ui-col-md-' + props.md;
      if(props.lg) classes += ' fluence-ui-col-lg-' + props.lg;
     //classes += ' fluence-ui-container-fluid';

      return classes;
    }

    return (
        <div style={setUpStyle()} className={setUpClasses()}>{props.children}</div>
    )
};
  
export default Col;