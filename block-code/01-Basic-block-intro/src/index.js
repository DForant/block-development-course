import {registerBlockType} from '@wordpress/blocks'

import edit from './edit'
import save from './save'

registerBlockType('dfdesigns/my-block', {
    edit,
    save
})