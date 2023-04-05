import {registerBlockType} from '@wordpress/blocks'

import json from './block.json'
import edit from './edit'
import save from './save'

import './style.scss'
import './editor.scss'
import './border.scss'

const {name} = json

registerBlockType(name, {
    edit,
    save
})