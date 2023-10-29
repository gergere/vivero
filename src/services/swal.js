import Swal from 'sweetalert2'

export const swalOk = () => {
    Swal.fire({
        title: 'Perfecto!',
        icon: 'success',
        text: 'La solicitud se procesó correctamente',
        confirmButtonText: '👍'
    })
}