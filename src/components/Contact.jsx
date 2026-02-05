import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { toast } from 'react-hot-toast';
//import Swal from 'sweetalert2';



const Contact = () => {

 const form = useRef();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm()

    // 'service_vvzt2re', 'template_thks2cb', 'aTgJhi2J0VH3rccjG'



    const onSubmit = () => {
        emailjs
        .sendForm('service_vvzt2re', 'template_thks2cb', form.current, {
          publicKey: 'aTgJhi2J0VH3rccjG',
        })
        .then(
          (result) => {
            toast.success('Mensaje enviado correctamente!');
          },
          (error) => {
            console.error('Error al enviar el mensaje');
          },
        ); 
        reset();
      };



    return (
        <div id="contact" className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <h2 className="mb-4 text-center text-white pb-5">Contacto</h2>
                    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                        {/* Campo de Nombre */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label text-white">
                                Nombre Completo
                            </label>
                            <input
                                id="name"
                                type="text"
                                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                {...register("name", {
                                    required: "El nombre es obligatorio",
                                    minLength: {
                                        value: 3,
                                        message: "El nombre debe tener al menos 3 caracteres",
                                    },
                                })}
                            />
                            {errors.name && (
                                <div className="invalid-feedback">{errors.name.message}</div>
                            )}
                        </div>

                        {/* Campo de Correo Electrónico */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-white">
                                Correo Electrónico
                            </label>
                            <input
                                id="email"
                                type="email"
                                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                {...register("email", {
                                    required: "El correo es obligatorio",
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/,
                                        message: "Formato de correo no válido",
                                    },
                                })}
                            />
                            {errors.email && (
                                <div className="invalid-feedback">{errors.email.message}</div>
                            )}
                        </div>

                        {/* Campo de Mensaje */}
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label text-white">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                                rows="4"
                                {...register("message", {
                                    required: "El mensaje es obligatorio",
                                    minLength: {
                                        value: 10,
                                        message: "El mensaje debe tener al menos 10 caracteres",
                                    },
                                })}
                            />
                            {errors.message && (
                                <div className="invalid-feedback">{errors.message.message}</div>
                            )}
                        </div>

                        {/* Botón de Enviar */}
                        <div className="d-flex justify-content-center">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={!isValid}
                        >
                            Enviar
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        // <div className="container mt-5">
        //     <h3 className="text-white text-center fw-bold">Contacto</h3>
        //     <form onSubmit={handleSubmit(onSubmit)}>
        //         <div className="col-md-6 mb-3">
        //             <label className="form-label text-white">Nombre</label>
        //             <input {...register("name", { required: true, minLength: 4 })} type="text" className="form-control" placeholder="Ingresa tu nombre" />
        //             {errors.name?.type === 'required' && <p className='text-danger fw-bold'>El campo nombre no puede estar vacio</p>}
        //             {errors.name?.type === 'minLength' && <p className='text-danger fw-bold'>Ingresar mas de 4 caracteres</p>}
        //         </div>

        //         <div className="col-md-6 mb-3">
        //             <label className="form-label text-white">Correo Electrónico</label>
        //             <input {...register('email', {
        //                 required: {
        //                     value: true,
        //                 },
        //                 pattern: {
        //                     value: /\S+@\S+\.\S+/,
        //                 },
        //             })} type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com" />
        //             {errors.email?.type === 'required' && <p className='text-danger fw-bold'>El campo es requerido</p>}
        //             {errors.email?.type === 'pattern' && <p className='text-danger fw-bold'>El mail no es valido</p>}
        //         </div>

        //         <div className="mb-3 col-md-6">

        //             <label className="form-label text-white">Mensaje</label>
        //             <textarea {...register('message', { required: true, minLength: 4 })} className="form-control" id="message" rows="4" placeholder="Escribe tu mensaje aquí..." required></textarea>
        //             {errors.message?.type === 'required' && <p className='text-danger fw-bold'>El campo debe llevar un mensaje</p>}
        //         </div>
        //         <div className="d-flex justify-content-center align-items-center">
        //             <button type="submit" className="btn btn-primary">Enviar</button>
        //         </div>
        //     </form>
        // </div>
    )
}

export default Contact