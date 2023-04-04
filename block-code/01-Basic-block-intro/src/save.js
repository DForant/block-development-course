import {useBlockProps} from '@wordpress/block-editor'

const save = () => {
    return <p {...useBlockProps.save()}>Hello world, from frontend.</p>
}

export default save