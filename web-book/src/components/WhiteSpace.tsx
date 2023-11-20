/**
 * OVERVIEW: Questo componente permette di inserire spazi bianchi di dimensine size
 * <p> size di default assume valore 20px
*/

interface Props {
    size?: string;
}

/**
 * Questo componente permette di inserire spazi bianchi di dimensine size
 * @param size dimensione espressa in px  
 * @returns spazio bianco di dimensione size
 */
const WhiteSpace = ({ size = "20" }: Props) => {
    return (
        <div style={{ marginBottom: size + 'px' }}></div>
    )
}

export default WhiteSpace