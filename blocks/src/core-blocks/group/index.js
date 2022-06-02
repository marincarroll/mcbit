import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/blockEditor';
import { PanelBody, RangeControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/** 
 * Register attribute for negative offset
 */
const offsetAttribute = (settings) => {
	if( typeof settings.attributes !== 'undefined' && settings.name == 'core/group' ){
		settings.attributes = Object.assign( settings.attributes, {
			offset: {
				type: 'object',
				default: {
					size: '0px'
				}
			}
		} )
	}

	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'mcbit/offset-attribute',
	offsetAttribute
);


/** 
 * Editor controls for negative offset
 */
const offsetControls = createHigherOrderComponent( ( BlockEdit ) => {
	return props => {
		if ( props.name == 'core/group' ) {
			const { setAttributes } = props;
			const { offset } = props.attributes;
			const offsetNum = parseInt( offset.size );
			
			const setOffset = ( val ) => {
				let offsetObj = {
					size: val
				}

				if( val && parseInt(val) != 0 ) {
					offsetObj.spacing = offsetNum < 0 
						? {
							marginTop: offset.size,
							paddingTop: offset.size.substring(1) //remove negative
						}
						: {
							marginBottom: `-${offset.size}`,
							paddingBottom: offset.size
						};
				}

				setAttributes({ 
					offset: offsetObj
				})
			}

			const setRange = ( num ) => {
				let unit = offset.size.slice(-2);
				setOffset(`${num}${unit}`);
			}

			return (
				<>
					<BlockEdit {...props} />
					<InspectorControls>
						<PanelBody title={ __('Negative Offset') }>
							<RangeControl
								allowReset
								withInputField={ false }
								resetFallbackValue="0"
								value={ offsetNum }
								onChange={ setRange }
								min={ -250 }
								max={ 250 }
								step={ 10 }
								marks={ [ 
									{ 
										value: 0,
										label: ''
									}
								] }
							/>
							<UnitControl
								value={ offset.size }
								onChange={ val => setOffset(val) }
								units={ [	
									{ value: 'px', label: 'px' },
									{ value: 'em', label: 'em' } 
								] }
								label={
									offsetNum > 0 
										? __('Pull next sibling up by:') 
										: __('Pull previous sibling down by:') 
								}
							>
							</UnitControl>
						</PanelBody>
					</InspectorControls>
				</>
			)
		}

		return (
			<BlockEdit { ...props } />
		)
	}
}, 'offsetControls');

addFilter( 
   'editor.BlockEdit', 
   'mcbit/offset-controls', 
   offsetControls
);

const offsetInlineStyleEditor = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		if ( props.name == 'core/group' ) {
			const { spacing } = props.attributes.offset;

			if( spacing ) {
				return (
					<BlockListBlock
						{ ...props }
						wrapperProps={
							{ style: {...spacing} }
						}
					/>
				);
			}
		}

		return <BlockListBlock { ...props } />
	}
}, 'offsetInlineStyleEditor' );

addFilter(
	'editor.BlockListBlock',
	'mcbit/offset-inline-style-editor',
	offsetInlineStyleEditor
);


const offsetInlineStyleFrontend = (element, blockType, attributes) => {
	if (!element) { return; }
	if (blockType.name == 'core/group') {
		const { spacing } = attributes.offset;

		if( spacing ) {
			element.props.style = { ...spacing }
		}
	}

	return element;
}

addFilter(
	'blocks.getSaveElement',
	'mcbit/offset-inline-style-frontend',
	offsetInlineStyleFrontend
);