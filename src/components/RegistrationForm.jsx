import { useForm } from 'react-hook-form'

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log('Dados enviados:', data)
    alert('Cadastro realizado com sucesso!')
  }

  const senha = watch('senha') // para comparar com confirmação

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <label>Nome:</label>
        <input
          {...register('nome', {
            required: 'Nome é obrigatório',
            minLength: {
              value: 3,
              message: 'Nome deve ter pelo menos 3 caracteres',
            },
          })}
        />
        {errors.nome && <p style={{ color: 'red' }}>{errors.nome.message}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register('email', {
            required: 'Email é obrigatório',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Email inválido',
            },
          })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>

      <div>
        <label>Senha:</label>
        <input
          type="password"
          {...register('senha', {
            required: 'Senha é obrigatória',
            minLength: {
              value: 6,
              message: 'Senha deve ter pelo menos 6 caracteres',
            },
          })}
        />
        {errors.senha && <p style={{ color: 'red' }}>{errors.senha.message}</p>}
      </div>

      <div>
        <label>Confirmação de Senha:</label>
        <input
          type="password"
          {...register('confirmacaoSenha', {
            required: 'Confirmação de senha é obrigatória',
            validate: value =>
              value === senha || 'As senhas não coincidem',
          })}
        />
        {errors.confirmacaoSenha && (
          <p style={{ color: 'red' }}>{errors.confirmacaoSenha.message}</p>
        )}
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  )
}

export default RegistrationForm
