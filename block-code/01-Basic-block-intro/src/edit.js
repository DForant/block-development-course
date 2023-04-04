import {useBlockProps} from '@wordpress/block-editor'

const edit = () => {
    return <p {...useBlockProps()}>Hello world, from editor.</p>
}

export default edit