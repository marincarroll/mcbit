import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/blockEditor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/** 
 * Editor controls for any global attribute
 */
const thingyControls = createHigherOrderComponent( ( BlockEdit ) => {
	return props => {
		const { setAttributes } = props;
		const { className } = props.attributes;

		let classStr  = className ? className : '',
			hasThingy = classStr.includes('thingy');

		const setThingy = () => {
			if( !hasthingy ) {
				classStr += 'thingy';
			} else {
				classStr = classStr.replace('thingy', '');
			}

			setAttributes({ 
				className: classStr 
			})
		}

		return (
			<>
				<BlockEdit {...props} />
				<InspectorControls>
					<PanelBody title={ __('Thingy') }>
						<ToggleControl 
							checked={ hasThingy }
							label={ __('Add thingy') }
							onChange={ setThingy }
						/>
					</PanelBody>
				</InspectorControls>
			</>
		)
	}
}, 'thingyControls');

addFilter( 
   'editor.BlockEdit', 
   'mcbit/thingy-controls', 
   thingyControls
);
