import { useBlockProps } from "@wordpress/block-editor";

import './editor.scss'

const Edit = () => {

    const blockProps = useBlockProps()
    return <p {...blockProps}>Hello world, from the editor. From the edit.js file</p>
}
export default Edit