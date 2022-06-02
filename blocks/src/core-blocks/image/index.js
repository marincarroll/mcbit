import { registerBlockStyle } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import { createElement, cloneElement } from '@wordpress/element';

registerBlockStyle( 'core/image', { 
    name: 'complicated-order',
    label: __('Complicated Order', 'mcbit')
} );

const addImageWrapper = (element, blockType, attributes) => {
	if (!element) { return; }

	if ( blockType.name == 'core/image' ) {
        const { className } = attributes;

        if( className && className.includes('complicated-order') ) {
            const children = createElement( 'div', {}, element.props.children ),
                  clone    = cloneElement( element, {}, children);

            return clone;
        }
	}

	return element;
}

addFilter(
	'blocks.getSaveElement',
	'mcbit/add-image-wrapper',
	addImageWrapper
);