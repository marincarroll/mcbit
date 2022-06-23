# mcbit
 Blocks in themes - for all the rebels out there that don't give a fig

## References used:
### [@wordpress/scripts webpack config](https://github.com/WordPress/gutenberg/blob/trunk/packages/scripts/config/webpack.config.js)
This is what we're overriding to do the unthinkable.

### [10up WP Scaffold](https://github.com/10up/wp-scaffold)
I referenced their file structure and repurposed their [automatic registration of custom blocks](https://github.com/10up/wp-scaffold/blob/trunk/themes/10up-theme/includes/blocks.php) function 

### [Ryan Welcher's multiple blocks example](https://github.com/ryanwelcher/twitch/tree/trunk/plugins/multiple-blocks)
Great reference for anyone who wants to use @wordpress/scripts with a different file structure

### [Ryan Welcher's Gutenberg examples](https://github.com/WordPress/gutenberg-examples)
I used this as a guideline for how to build 'non-blocks' with wp-scripts (for example, mods to core blocks, custom text formats, editor controls that are applied to multiple blocks, etc...). I used this to improve my webpack config, and to learn how to create two different wp-scripts builds in the same project with CLI flags.
