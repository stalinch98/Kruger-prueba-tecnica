export interface StateLogin {
    usuarioLogueado: UsuarioLogueado,
    dataUsuarios: Usuario[],
}

export interface CurrentUserTryLogin {
    email: string,
    password: string
}

export interface UsuarioLogueado {
    email: string,
    rol: string
}

export interface Usuario {
    cedula: string,
    nombres: string,
    apellidos: string,
    email: string,
    rol: string,
    password: string
    fechaNacimiento?: string,
    direccionDomicilio?: string,
    telefono?: string,
}