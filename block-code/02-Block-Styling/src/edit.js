import {useBlockProps} from '@wordpress/block-editor'

const edit = () => {
    // const greenBackground = {
    //     backgroundColor: '#090',
    //     color: '#fff',
    //     padding: '20px'
    // }

    // const blockProps = useBlockProps({style: greenBackground})
    const blockProps = useBlockProps()

    return <p {...blockProps}>Hello world, from editor.</p>
}

export default edit