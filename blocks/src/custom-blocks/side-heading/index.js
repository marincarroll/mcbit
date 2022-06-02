import { registerBlockType } from '@wordpress/blocks';

import json from './block.json';
const { name, ...settings } = json;

import edit from './edit';
import save from './save';

registerBlockType(name, {
	...settings,
	edit: edit,
	save: save,
});
