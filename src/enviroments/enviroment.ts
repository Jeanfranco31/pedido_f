export const Enviroment = {
    production : false,
    endpoint : "https://localhost:7029", //HOST SWAGGER 

    /*INICIO DE SESION*/
    endpointAPILogin : "/validarLogin",

    /*DESBLOQUEAR USUARIO*/
    endpointAPIObtenerTodos : "/UsuariosBloqueados",
    endpointAPIBuscarUsuarioBloqueado:"/BuscarUsuarioBloqueado/",
    endpointAPIDesbloquearCuenta:"/desbloquearUsuario/"

}
