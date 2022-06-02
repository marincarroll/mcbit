import { addFilter } from '@wordpress/hooks';
import { select } from '@wordpress/data';

const excludeCurrentPost = (element, blockType, attributes) => {
	if (!element) {
		return;
	}

	if (blockType.name == 'core/query') {
		const current = select('core/editor').getCurrentPostId();
		attributes.query.exclude = [current];
	}

	return element;
};

addFilter(
	'blocks.getSaveElement',
	'mcbit/exclude-current-post',
	excludeCurrentPost
);
