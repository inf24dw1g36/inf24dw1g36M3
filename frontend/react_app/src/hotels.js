import { Datagrid, List, NumberField, TextField, EditButton, Edit, NumberInput, SimpleForm, TextInput, CreateButton, Create,
    useRecordContext } from 'react-admin';

export const HotelList = () => (
    <List title={'Lista de Hoteis'}>
        <CreateButton />
        <Datagrid>
            <NumberField source="id" />
            <TextField source="nome" />
            <NumberField source="estrelas" />
            <TextField source="endereco" />
            <EditButton />
        </Datagrid>
    </List>
);

export const HotelEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="nome" />
            <NumberInput source="estrelas" />
            <TextInput source="endereco" />

        </SimpleForm>
    </Edit>
);

export const HotelCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nome" label="Nome do Hotel" />
            <NumberInput source="estrelas" label="Número de Estrelas" />
            <TextInput source="endereco" label="Endereço" />
        </SimpleForm>
    </Create>
);

const PostTitle = () => {
    const record = useRecordContext();
    return record ? (<span>Editando: {`"${record.nome}"`}</span>):null;
};

