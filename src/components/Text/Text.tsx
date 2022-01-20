import React from "react";
import './Text.css';
import theme from '../theme-fluence-ui';

export interface TextProps {
    children:any;

    color?:string;
    strong?: boolean;
    padding?: any;
    margin?: string;
    italic?: boolean;

    paragraph?: boolean;
}

const Text = (props: TextProps) => {
    const setUpStyle = () => {
      let style:any = {};

      if(props.color) style.color = props.color;
      if(props.padding) style.padding = props.padding;
      if(props.margin) style.margin = props.margin;

      return style;
    }

    const setUpClasses = () => {
      let classes:string = '';
      classes = 'fluence-ui-text';
      
      if(props.strong == true) classes += ' fluence-ui-text-strong';
      if(props.italic == true) classes += ' fluence-ui-text-italic';

      return classes;
    }

    const setUpCustomTheme = () => {
      let style:any = {};
      if(theme.hasOwnProperty('componentsConfig')){
        if(theme.componentsConfig.hasOwnProperty('Text')){
          if(theme.componentsConfig.Text.hasOwnProperty('baseMargin')) style.margin = theme.componentsConfig.Text.baseMargin;
          if(theme.componentsConfig.Text.hasOwnProperty('basePadding')) style.padding = theme.componentsConfig.Text.basePadding;
        }
      }
      
      return style;
    }

    const renderElement = () => {
        if(props.paragraph)
            return (<p style={{...setUpStyle(),...setUpCustomTheme()}} className={setUpClasses()}>{props.children}</p>);
        else
            return (<div style={{...setUpStyle(),...setUpCustomTheme()}} className={setUpClasses()}>{props.children}</div>);
    }

    return renderElement();
};
  
export default Text;