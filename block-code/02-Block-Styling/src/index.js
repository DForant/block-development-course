import {registerBlockType} from '@wordpress/blocks'

import json from './block.json'
import edit from './edit'
import save from './save'

import './edit-color.scss'
import './border-rad.scss'
import './style.scss'


const {name} = json

registerBlockType(name, {
    edit,
    save
})