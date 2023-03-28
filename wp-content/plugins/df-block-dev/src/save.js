import {useBlockProps} from '@wordpress/block-editor'

const Save = () =>{
    const blockProps = useBlockProps.save()

    return <p {...blockProps}>Hello World! From the Frontend. From our save.js file</p>
}

export default Save