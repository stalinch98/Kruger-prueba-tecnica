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
    id: number,
    cedula: string,
    nombres: string,
    apellidos: string,
    email: string,
    rol: string,
    password: string
    fechaNacimiento?: string,
    direccionDomicilio?: string,
    telefono?: string,
    userName: string,
    estaVacunado: string,
    tipoVacuna?: string | null,
    fechaVacunacion?: string | null,
    numeroDosis?: number | null,
}