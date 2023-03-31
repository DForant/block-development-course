import { useBlockProps } from '@wordpress/block-editor'

const save = () => {
    const blockProps = useBlockProps.save()
    return <p { ...blockProps }>Hello world, from the frontend.</p>
}

export default save