import React from "react";
import './Container.css';
import theme from '../theme-fluence-ui';

export interface ContainerProps {
    children:any;

    fluid?:boolean

    backgroundColor?:string;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

const Container = (props: ContainerProps) => {
    const setUpStyle = () => {
      let style:any = {};

      if(props.backgroundColor) style.backgroundColor = props.backgroundColor;
      if(props.padding) style.padding = props.padding;
      if(props.margin) style.margin = props.margin;
      if(props.width) style.width = props.width;
      if(props.height) style.height = props.height;

      return style;
    }

    const setUpClasses = () => {
      let classes:string = '';
      classes = 'fluence-ui-container';
      
      if(props.fluid == true) classes += ' fluence-ui-container-fluid';

      return classes;
    }

    const setUpCustomTheme = () => {
      let style:any = {};
      if(theme.hasOwnProperty('componentsConfig')){
        if(theme.componentsConfig.hasOwnProperty('Container')){
          if(theme.componentsConfig.Container.hasOwnProperty('baseMargin')) style.margin = theme.componentsConfig.Container.baseMargin;
          if(theme.componentsConfig.Container.hasOwnProperty('basePadding')) style.padding = theme.componentsConfig.Container.basePadding;
        }
      }
      
      return style;
    }

    return (
        <div style={{...setUpStyle(),...setUpCustomTheme()}} className={setUpClasses()}>{props.children}</div>
    )
};
  
export default Container;