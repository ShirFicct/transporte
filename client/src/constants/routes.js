export const PublicRoutes = {
  LOGIN: "/login",
  REGISTER: "/register",
  HOME: "/",
  LANDINGS: "/landing",
  NOT_FOUND: "/404",
  CREAR: "/new",
  EDITAR: "/edit",
};

export const PrivateRoutes = {
  PRIVATE: "/",

  CHOFERES: "/choferes",
  CHOFERES_CREATE: "/choferes" + PublicRoutes.CREAR,
  CHOFERES_EDIT: "/choferes" + "/:id" + PublicRoutes.EDITAR,

  FLOTAS: "/flotas",
  FLOTAS_CREATE: "/flotas" + PublicRoutes.CREAR,
  FLOTAS_EDIT: "/flotas" + PublicRoutes.EDITAR + "/:placa",
  FLOTAS_ASIENTOS: "/flotas" + "/asientos" + "/:placa",

  VIAJES: "/viajes",
  VIAJES_CREATE: "/viajes" + PublicRoutes.CREAR,
  VIAJES_EDIT: "/viajes" + PublicRoutes.EDITAR + "/:cod",

  LUGARES: "/lugares",
  LUGARES_CREATE: "/lugares" + PublicRoutes.CREAR,
  LUGARES_EDIT:
    "/lugares" +
    "/:cod_departamento" +
    "/:cod_provincia" +
    "/:cod" +
    PublicRoutes.EDITAR,

  CLIENTES: "/clientes",
  CLIENTES_CREATE: "/clientes" + PublicRoutes.CREAR,
  CLIENTES_EDIT: "/clientes" + PublicRoutes.EDITAR + "/:id",

  BOLETOS: "/boletos",
  BOLETOS_CREATE: "/boletos" + PublicRoutes.CREAR,
  BOLETOS_EDIT: "/boletos" + PublicRoutes.EDITAR + "/:id",
  BOLETOS_VIEW: "/boletos" + "/:id",

  ROLES: "/roles",
  ROLES_CREATE: "/roles" + PublicRoutes.CREAR,
  ROLES_EDIT: "/roles" + PublicRoutes.EDITAR + "/:id",

  METODOS_PAGO: "/metodos-pago",
  METODOS_PAGO_CREATE: "/metodos-pago" + PublicRoutes.CREAR,
  METODOS_PAGO_EDIT: "/metodos-pago" + PublicRoutes.EDITAR + "/:id",

  EMPLEADOS: "/empleados",
  EMPLEADOS_CREATE: "/empleados" + PublicRoutes.CREAR,
  EMPLEADOS_EDIT: "/empleados" + PublicRoutes.EDITAR + "/:id",


  NOTAS_VENTA: "/notas-venta",
  NOTAS_VENTA_CREATE: "/notas-venta" + PublicRoutes.CREAR,
  NOTAS_VENTA_EDIT: "/notas-venta" + PublicRoutes.EDITAR + "/:id",
  NOTAS_VENTA_VIEW: "/notas-venta" + "/:id",

  BITACORAS: "/bitacoras",

  HOME: "/home",

  /* CLiente */
  COMPRAS: "/compras",
  BOLETOS_CLIENTE: "/boleto-cliente",
  BOLETOS_CLIENTE_VIEW: "/boleto-cliente/:id",
  NOTAS_VENTA_CLIENTE: "/nota-venta-cliente/:id",
  RESERVAS: "/reservas",
  RESERVAS_CREATE: "/reservas" + PublicRoutes.CREAR,
  RESERVAS_VIEW: "/reservas/:id",
};

//url backend
/* export const URL_BACKEND = "http://localhost:4000/api" */

export const URL_BACKEND = "https://si1-bus-back.onrender.com/api";
