import React from "react";
import './Title.css'
import theme from '../theme-fluence-ui';

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

    const setUpCustomTheme = () => {
      let style:any = {};
      if(theme.hasOwnProperty('componentsConfig')){
        if(theme.componentsConfig.hasOwnProperty('Title')){
          if(theme.componentsConfig.Title.hasOwnProperty('baseMargin')) style.margin = theme.componentsConfig.Title.baseMargin;
          if(theme.componentsConfig.Title.hasOwnProperty('basePadding')) style.padding = theme.componentsConfig.Title.basePadding;
        }
      }
      
      return style;
    }

    const renderElement = () => {
        const Htag:any = `h${props.size}`;
        return (<Htag style={{...setUpStyle(),...setUpCustomTheme()}} className={setUpClasses()}>{props.children}</Htag>)
    } 

    return renderElement();
};
  
export default Title;