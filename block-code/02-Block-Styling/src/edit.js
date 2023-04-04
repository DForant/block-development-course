import {useBlockProps} from '@wordpress/block-editor'

/**
 * Import external stylings
 */
import './editor.scss'
import './header.scss'

const edit = () => {

    /**
     * Inline styling
     */
    // const greenBackground = {
    //     backgroundColor: '#090',
    //     color: '#fff',
    //     padding: '20px',
    // }

    /**
     * If using inline styling be sure to add the style argument to the 
     * block props. If your importing externally you can call useBlockProps without
     * arguments
     */
    // const blockProps = useBlockProps({style: greenBackground})
    const blockProps = useBlockProps()
    return <p {...blockProps}>Hello world, from editor.</p>
}

export default edit