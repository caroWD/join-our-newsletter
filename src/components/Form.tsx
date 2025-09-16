import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const Schema = z.object({
  email: z
    .string()
    .trim()
    .nonempty({ message: 'The email field is empty' })
    .email({ message: 'Email Address is required.' }),
})

type Email = z.infer<typeof Schema>

type Props = {
  handleClick: () => void
}

export const Form = ({ handleClick }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(Schema) })

  const onSubmit = (data: Email) => {
    console.log(data)
    handleClick()
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="2xs:gap-6 flex flex-col gap-4 text-sm">
      <div className="flex flex-col gap-2">
        <input
          {...register('email')}
          aria-invalid={errors.email ? 'true' : 'false'}
          placeholder="Enter your email address"
          autoComplete="email"
          className={`bg-alabaster placeholder:text-pale-sky 2xs:rounded-[0.625rem] 2xs:p-2.5 2xs:text-base rounded-md border p-2 text-center leading-loose ${!errors.email ? 'border-athens-gray' : 'border-2 border-red-700'}`}
        />
        {errors.email && (
          <p role="alert" className="text-xs text-red-700">
            {errors.email.message}
          </p>
        )}
      </div>
      <input
        type="submit"
        value="Subscribe now"
        className="bg-cerulean-blue border-cerulean-blue 2xs:rounded-[0.625rem] 2xs:p-2.5 2xs:text-base rounded-md border p-2 leading-loose font-medium text-white"
        aria-label="button"
      />
    </form>
  )
}
