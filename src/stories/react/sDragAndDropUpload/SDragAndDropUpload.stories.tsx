import { Story } from "@storybook/react";
import React, {useState} from "react";
import { Container } from "react-bootstrap";

import { SDragAndDropUpload } from "../../../components";

export default {
    title: "React/SDragAndDropUpload (PD)",
    component: SDragAndDropUpload,
    argTypes: {},
};

type PropsType = React.ComponentProps<typeof SDragAndDropUpload>;

const Template: Story<PropsType> = (args) => {
    const [file, setFile] = useState<null | File>(null);
    
    return (
        <Container>
            <SDragAndDropUpload {...args} setFile={setFile} />
        </Container>
    );
};

export const SDragAndDropUploadTemplate = Template.bind({});

SDragAndDropUploadTemplate.args = {
    className: "w-75",
    title: "Logo Datei hochladen",
    footer: "*zulässige Datenformate: JPG, PNG"
};
