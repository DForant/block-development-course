import {registerBlockType} from '@wordpress/blocks'
import {useBlockProps} from '@wordpress/block-editor'

import './index.scss'

import json from '/block.json'
import edit from './edit'
import save from './save'

const {name} = json

registerBlockType(name, {
    edit,
    save
})