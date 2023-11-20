import { ReactNode, HTMLProps } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
    content: string;
}

const ContainerText = ({ content, ...props }: Props) => {
    return (
        <div {...props} dangerouslySetInnerHTML={{ __html: content }} />
    );
}

export default ContainerText;
