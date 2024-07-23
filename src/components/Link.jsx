const Link = (props) => {
    
    const { link, text, openInNewTab } = props;

    return (
     <li className= ''>
    <a 
    href={link} 
    className= 'liNueva' 
    target={openInNewTab ? '_blank' : '_self'} 
    rel={openInNewTab ? 'noopener noreferrer' : ''} >
        {text}
        </a>
</li>
    
    )  

}

export default Link;