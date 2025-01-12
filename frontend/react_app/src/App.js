import { Admin, Resource } from "react-admin";
import lb4Provider from "react-admin-lb4";
import { HotelList, HotelEdit, HotelCreate } from "./hotels";
import { QuartoList, QuartoEdit, QuartoCreate } from "./quartos";
import { ReservaList, ReservaEdit, ReservaCreate } from "./reservas";
import { HospedeList, HospedeEdit, HospedeCreate } from "./hospedes";

const dataProvider = lb4Provider("http://127.0.0.1:3000");
const App = () => (
 <Admin dataProvider={dataProvider}>
 <Resource name="hotels" list={HotelList} edit={HotelEdit} create={HotelCreate} />
 <Resource name="quartos" list={QuartoList} edit={QuartoEdit} create={QuartoCreate}/>
 <Resource name="hospedes" list={HospedeList} edit={HospedeEdit} create={HospedeCreate}/>
 <Resource name="reservas" list={ReservaList} edit={ReservaEdit} create={ReservaCreate}/>
 </Admin>
);
export default App;