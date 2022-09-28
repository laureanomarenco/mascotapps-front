const validate = data => {
  const errors = {}

  const emailRegex = /^[^\s@]+@[^\s@]+\.[\w]+$/

  if (!data.comment.trim()) errors.comment = 'Ingrese un comentario válido'

  if (!data.comment.length) errors.comment = 'Este campo no puede estar vacío'

  if (!emailRegex.test(data.email)) errors.email = 'Ingrese un email válido'

  if (!data.email.length) errors.email = 'Este campo no puede estar vacío'

  return errors;
}

export default validate;