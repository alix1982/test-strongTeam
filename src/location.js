import { useEffect } from "react";
import useGeoLocation from "react-ipgeolocation";
import todosState from "./store/TodosState";
import { observer } from "mobx-react-lite";

const Location = observer(() => {
  const location = useGeoLocation();
  useEffect(()=>{
    todosState.setLocation(location.country);
  },[location]);

  useEffect(()=>{
    (todosState.country !== 'RU') ? (todosState.isGeo = true) : (todosState.isGeo = false)
  },[todosState.country])
})
export default Location