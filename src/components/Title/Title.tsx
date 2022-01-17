import React from "react";

export interface TextProps {
    children:any;
    size: number;

    color?:string;
    strong?: boolean;
    padding?: any;
    italic?: boolean;
}

const Title = (props: TextProps) => {
    const setUpStyle = () => {
      let style:any = {};

      if(props.color) style.color = props.color;
      if(props.padding) style.padding = props.padding;

      return style;
    }

    const setUpClasses = () => {
      let classes:string = '';
      classes = 'fluence-ui-title';
      

      if(props.strong == true) classes += ' fluence-ui-title-strong';
      if(props.italic == true) classes += ' fluence-ui-title-italic';

      return classes;
    }

    const renderElement = () => {
        const Htag:any = `h${props.size}`;
        return (<Htag style={setUpStyle()} className={setUpClasses()}>{props.children}</Htag>)
    } 

    return renderElement();
};
  
export default Title;