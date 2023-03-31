import {useBlockProps} from '@wordpress/block-editor'

const edit = () => {
    const blockProps = useBlockProps()
    return <p { ...blockProps }>Hello world, from the editor.</p>
}

export default edit