import Swal from 'sweetalert2'

export const swalOk = () => {
    Swal.fire({
        title: 'Perfecto!',
        icon: 'success',
        text: 'La solicitud se procesó correctamente',
        confirmButtonText: '👍'
    })
}

export const swalError = (msj) => {
    Swal.fire({
        title: 'Error!',
        icon: 'error',
        text: `Hubo un error procesando la información: ${msj}`,
        confirmButtonText: '😒'
    })
}