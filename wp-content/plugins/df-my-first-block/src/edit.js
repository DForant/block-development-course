import {useBlockProps} from '@wordpress/block-editor'

const Edit = () =>{
    return <p {...useBlockProps()}>Hello Word, from the editor.</p>
}

export default Edit;