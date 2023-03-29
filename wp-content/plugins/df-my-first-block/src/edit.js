import { useBlockProps } from "@wordpress/block-editor";

const Edit = () => {
    return <p {...useBlockProps()}>Hello world, from the editor. From the edit.js file</p>
}
export default Edit