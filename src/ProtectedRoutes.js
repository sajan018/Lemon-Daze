import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { authContext } from "./context/authContext";

const ProtectefRoutes = ({children}) =>{
    const user = useContext(authContext);
    const navigate = useNavigate();
    useEffect(() =>
        {
            if(!user){
              navigate('/')
            }
            },[user])

        return(
            children
        )
}

export default ProtectefRoutes;  //exportando o componente para ser utilizado em outras partes do projeto