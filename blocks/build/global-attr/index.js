!function(){"use strict";var e=window.wp.element,t=window.wp.compose,n=window.wp.blockEditor,o=window.wp.components,i=window.wp.hooks,l=window.wp.i18n;const r=(0,t.createHigherOrderComponent)((t=>i=>{const{setAttributes:r}=i,{className:c}=i.attributes;let s=c||"",a=s.includes("thingy");return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t,i),(0,e.createElement)(n.InspectorControls,null,(0,e.createElement)(o.PanelBody,{title:(0,l.__)("Thingy")},(0,e.createElement)(o.ToggleControl,{checked:a,label:(0,l.__)("Add thingy"),onChange:()=>{hasthingy?s=s.replace("thingy",""):s+="thingy",r({className:s})}}))))}),"thingyControls");(0,i.addFilter)("editor.BlockEdit","mcbit/thingy-controls",r)}();