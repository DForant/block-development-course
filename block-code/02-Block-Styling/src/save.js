import {useBlockProps} from '@wordpress/block-editor'

const save = () => {
    // const redBackground = {
    //     backgroundColor: '#900',
    //     color: '#fff',
    //     padding: '20px'
    // }

    // const blockProps = useBlockProps.save({style: redBackground})
    const blockProps = useBlockProps.save()
    return <p {...blockProps}>Hello world, from frontend.</p>
}

export default save