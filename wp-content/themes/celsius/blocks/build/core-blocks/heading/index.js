!function(){"use strict";var e=window.wp.element,t=window.wp.hooks,n=window.wp.compose,l=window.wp.blockEditor,o=window.wp.components,s=window.wp.i18n;const c=(0,n.createHigherOrderComponent)((t=>n=>{if("core/heading"==n.name){const{attributes:c,setAttributes:i}=n,{fontSize:r,className:a}=c;let d="accent"==r,w=a||"",m=w.includes("has-line");const u=()=>{i({className:w.replace("has-line",""),textAlign:!1,style:""})};!d&&m&&u();const p=()=>{m?u():i({className:"has-line",textAlign:"center"})};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t,n),(0,e.createElement)(l.InspectorControls,null,d&&(0,e.createElement)(o.PanelBody,{title:(0,s.__)("Gold Line","mcbit")},(0,e.createElement)(o.ToggleControl,{label:m?(0,s.__)("On","mcbit"):(0,s.__)("Off","mcbit"),checked:m,onChange:p}))))}return(0,e.createElement)(t,n)}),"customHeadingSelectors");(0,t.addFilter)("editor.BlockEdit","mcbit/custom-heading-selectors",c)}();