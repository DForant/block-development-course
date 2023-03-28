import { useBlockProps } from '@wordpress/block-editor'

const Edit = () => {
    const blockProps = useBlockProps()

    return <p{...blockProps}>Hello World! From the editor. From our edit.js</p>
}

export default Edit