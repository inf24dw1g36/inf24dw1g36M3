import { Datagrid, List, NumberField, TextField, EditButton, Edit, NumberInput, SimpleForm, TextInput, useRecordContext, CreateButton, Create } from 'react-admin';

export const HospedeList = () => (
    <List title={'Lista de Hospedes'}>
        <CreateButton />
        <Datagrid>
            <TextField source="id" />
            <TextField source="nome" />
            <TextField source="nif" />
            <NumberField source="telefone" />
            <TextField source="endereco" />
            <EditButton />
        </Datagrid>
    </List>
);

export const HospedeEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="nome" />
            <NumberInput source="nif" />
            <NumberInput source="telefone" />
            <TextInput source="endereco" />
        </SimpleForm>
    </Edit>
);

const PostTitle = () => {
    const record = useRecordContext();
    return record ? (<span>{`"${record.nome}"`}</span>):null;
};

export const HospedeCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nome" label="Nome do Hóspede" />
            <NumberInput source="nif" label="NIF" />
            <NumberInput source="telefone" label="Telefone" />
            <TextInput source="endereco" label="Endereço" />
        </SimpleForm>
    </Create>
);