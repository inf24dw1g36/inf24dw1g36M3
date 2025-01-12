import { Datagrid, DateField, List, NumberField, EditButton, Edit, NumberInput, SimpleForm, DateInput, CreateButton, Create } from 'react-admin';

export const ReservaList = () => (
    <List title={'Lista de Reservas'}>
        <CreateButton />
        <Datagrid>
            <NumberField source="id" />
            <DateField source="data_inic" />
            <DateField source="data_fim" />
            <NumberField source="id_hospede" />
            <NumberField source="id_quarto" />
            <EditButton />
        </Datagrid>
    </List>
);

export const ReservaEdit = () => (
    <Edit title={'Editando Reserva'}>
        <SimpleForm>
            <NumberInput source="id" />
            <DateInput source="data_inic" />
            <DateInput source="data_fim" />
            <NumberInput source="id_hospede" />
            <NumberInput source="id_quarto" />
        </SimpleForm>
    </Edit>
);

export const ReservaCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DateInput source="data_inic" label="Data de Início" />
            <DateInput source="data_fim" label="Data de Fim" />
            <NumberInput source="id_hospede" label="ID do Hóspede" />
            <NumberInput source="id_quarto" label="ID do Quarto" />
        </SimpleForm>
    </Create>
);