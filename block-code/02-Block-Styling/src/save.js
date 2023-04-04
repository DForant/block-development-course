import {useBlockProps} from '@wordpress/block-editor'
import { getFreeformContentHandlerName } from '@wordpress/blocks'

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