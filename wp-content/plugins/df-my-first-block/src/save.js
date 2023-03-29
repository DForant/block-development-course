import { useBlockProps } from "@wordpress/block-editor";

const Save = () => {
    return <p {...useBlockProps.save()}>Hello world, from the frontend. From the save.js file.</p>
}
export default Save