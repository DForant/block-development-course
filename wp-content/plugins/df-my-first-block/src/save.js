import { useBlockProps } from "@wordpress/block-editor"

const Save = () => {
    return <p {...useBlockProps.save()}>Hello world, from the frontend.</p>
}

export default Save