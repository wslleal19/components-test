import React from "react";
import './Title.css'

export interface TitleProps {
    children:any;
    size: number;

    color?:string;
    strong?: boolean;
    margin?: string;
    padding?: any;
    italic?: boolean;
}

const Title = (props: TitleProps) => {
    const setUpStyle = () => {
      let style:any = {};

      if(props.color) style.color = props.color;
      if(props.padding) style.padding = props.padding;
      if(props.margin) style.margin = props.margin;

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