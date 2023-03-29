import { useBlockProps } from "@wordpress/block-editor";

const Save = () => {
    const blockProps = useBlockProps.save()
    return <p {...blockProps}>Hello world, from the frontend. From the save.js file.</p>
}
export default Save