import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Edit =
	() =>
	({ attributes, setAttributes }) => {
		const { title } = attributes;
		const blockProps = useBlockProps({ className: 'side-heading' });

		return (
			<section {...blockProps}>
				<RichText
					tagName="h2"
					placeholder={__('Enter Side Heading...', 'mcbit')}
					value={title}
					onChange={(t) => setAttributes({ title: t })}
				/>
				<InnerBlocks />
			</section>
		);
	};

export default Edit;
