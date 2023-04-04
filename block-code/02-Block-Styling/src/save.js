import {useBlockProps} from '@wordpress/block-editor'

/**
 * Import external stylings
 */
import './style.css'

const save = () => {
    /**
     * Inline styling
     */    
    //     const redBackground = {
    //         backgroundColor: '#900',
    //         color: '#fff',
    //         padding: '20px',
    //     }

    /**
     * If using inline styling be sure to add the style argument to the 
     * block props. If your importing externally you can call useBlockProps without
     * arguments
     */
    //     const blockProps = useBlockProps.save({style: redBackground})
    const blockProps = useBlockProps.save()
    return <p {...blockProps}>Hello world, from frontend.</p>
}

export default save