import AccordionItem from "./AccordianItem";

type AccordionProps = {
    items: {
        title: string;
        content: string;
    }[];
}

function Accordion({items}: AccordionProps) {

    return (
        <article>
             {items.map((item) => {
                return <AccordionItem key={item.title} title={item.title} content={item.content}/>
             })}         
        </article>
    )
}



export default Accordion;