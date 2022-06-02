!function(){"use strict";var e=window.wp.blocks,t=window.wp.i18n,a=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"mcbit-blocks/card-cta-image","title":"Card Wide CTA Image","category":"mcbit","textdomain":"mcbit-card-wide","icon":"buddicons-activity","description":"Generic card (wide) with CTA and image","keywords":["card","paragraph","box","cta","image"],"supports":{"align":true,"html":false,"color":{"background":true,"text":true,"gradients":false},"spacing":{"padding":true}},"styles":[{"name":"squared","label":"Squared","isDefault":true},{"name":"rounded","label":"Rounded"}],"example":{"attributes":{"text":"This is some text!","shadow":true}},"editorScript":"file:../../../build/custom-blocks/card-cta-image/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css","attributes":{"text":{"type":"string","source":"html","selector":"p"},"textAlignment":{"type":"string","default":"left"},"shadow":{"type":"boolean","default":false},"shadowOpacity":{"type":"number","default":30},"backgroundColor":{"type":"string"},"textColor":{"type":"string","default":"very-light-grey"},"gradient":{"type":"string"},"style":{"type":"object","default":{"color":{"background":"#f03"},"spacing":{"padding":{"top":"50px","right":"50px","bottom":"50px","left":"50px"}}}}}}'),i=window.wp.element,l=window.wp.blockEditor;(0,e.registerBlockType)(a,{edit:function(e){const{attributes:a,setAttributes:o}=e,{text:r,textAlignment:n,shadow:s,shadowOpacity:c}=a,d=`card-cta-image-${n} ${s?"has-shadow":""}`;return(0,i.createElement)(i.Fragment,null,(0,i.createElement)(l.InspectorControls,null,s&&(0,i.createElement)(PanelBody,{title:(0,t.__)("Shadow Setting","card-cta-image")},(0,i.createElement)(RangeControl,{label:(0,t.__)("Shadow Opacity","card-cta-image"),value:c,min:10,max:40,step:10,onChange:e=>{o({shadowOpacity:e})}}))),(0,i.createElement)(l.BlockControls,{controls:[{icon:"admin-page",title:(0,t.__)("Shadow","card-cta-image"),onClick:()=>{o({shadow:!s})},isActive:s}]},(0,i.createElement)(l.AlignmentToolbar,{value:n,onChange:e=>{o({textAlignment:e})}})),(0,i.createElement)("div",(0,l.useBlockProps)({className:d}),(0,i.createElement)(l.RichText,{className:"card-cta-image-title",onChange:e=>{o({text:e})},value:r,placeholder:(0,t.__)("Your Text","card-cta-image"),tagName:"p",allowedFormats:[]})))},save:()=>null})}();