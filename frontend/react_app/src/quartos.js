import { Datagrid, List, NumberField, EditButton, Edit, NumberInput, SimpleForm, useRecordContext, CreateButton, Create } from 'react-admin';

export const QuartoList = () => (
    <List title={'Lista de Quartos'}>
        <CreateButton />
        <Datagrid>
            <NumberField source="id" />
            <NumberField source="numero" />
            <NumberField source="preco" />
            <NumberField source="id_hotel" />
            <EditButton />
        </Datagrid>
    </List>
);

export const QuartoEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <NumberInput source="id" />
            <NumberInput source="numero" />
            <NumberInput source="preco" />
            <NumberInput source="id_hotel" />
        </SimpleForm>
    </Edit>
);

const PostTitle = () => {
    const record = useRecordContext();
    return record ? (<span>Quarto: {`"${record.numero}"`}</span>):null;
};

export const QuartoCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <NumberInput source="numero" label="Número do Quarto" />
            <NumberInput source="preco" label="Preço" />
            <NumberInput source="id_hotel" label="ID do Hotel" />
        </SimpleForm>
    </Create>
);