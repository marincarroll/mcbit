!function(){"use strict";var e=window.wp.blocks,i=window.wp.hooks,r=window.wp.i18n,c=window.wp.element;(0,e.registerBlockStyle)("core/image",{name:"complicated-order",label:(0,r.__)("Complicated Order","mcbit")}),(0,i.addFilter)("blocks.getSaveElement","mcbit/add-image-wrapper",((e,i,r)=>{if(e){if("core/image"==i.name){const{className:i}=r;if(i&&i.includes("complicated-order")){const i=(0,c.createElement)("div",{},e.props.children);return(0,c.cloneElement)(e,{},i)}}return e}}))}();