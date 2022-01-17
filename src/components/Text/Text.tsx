import React from "react";

export interface TextProps {
    children:any;

    color?:string;
    strong?: boolean;
    padding?: any;
    italic?: boolean;

    paragraph?: boolean;
}

const Text = (props: TextProps) => {
    const setUpStyle = () => {
      let style:any = {};

      if(props.color) style.color = props.color;
      if(props.padding) style.padding = props.padding;

      return style;
    }

    const setUpClasses = () => {
      let classes:string = '';
      classes = 'fluence-ui-text';
      

      if(props.strong == true) classes += ' fluence-ui-text-strong';
      if(props.italic == true) classes += ' fluence-ui-text-italic';

      return classes;
    }

    const renderElement = () => {
        if(props.paragraph)
            return (<p style={setUpStyle()} className={setUpClasses()}>{props.children}</p>);
        else
            return (<div style={setUpStyle()} className={setUpClasses()}>{props.children}</div>);
    }

    return renderElement();
};
  
export default Text;