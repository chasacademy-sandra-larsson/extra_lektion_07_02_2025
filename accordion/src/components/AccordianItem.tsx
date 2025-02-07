import { useState } from "react"
import './style.css'

type AccordianItemProps = {
    title: string;
    content: string;
}

function AccordionItem({title, content}: AccordianItemProps) {

    const [isOpen, setIsOpen] = useState(false)

    return (
                <article className={`${isOpen ? 'open': ''}`} onClick={() => setIsOpen(!isOpen)}>
                     <h2>{title}</h2>
                    <p>{isOpen ? '-' : '+'}</p>
                    {isOpen && <p>{content}</p>}
                </article>
    )
}

export default AccordionItem