import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';

const Save =
	() =>
	({ attributes }) => {
		const { title } = attributes;
		const blockProps = useBlockProps.save({ className: 'side-heading' });

		return (
			<section {...blockProps}>
				<div className="col-1">
					<RichText.Content tagName="h2" value={title} />
				</div>
				<div className="col">
					<InnerBlocks.Content />
				</div>
			</section>
		);
	};

export default Save;
