import { Input } from '@nextui-org/react'
import { validationRules } from '../utils/form'

export default function FormInput({
  label = '',
  placeholder = '',
  description = '',
  register = null,
  name = '',
  size = 'lg',
  type = 'text',
  color = 'primary',
  variant = 'bordered',
  labelPlacement = 'outside',
  endContent = null,
}: {
  label: string
  placeholder: string
  description: string
  register: any
  name: string
  size?: 'sm' | 'md' | 'lg'
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  variant?: 'bordered' | 'flat' | 'underlined' | 'faded'
  labelPlacement?: 'outside' | 'outside-left' | 'inside'
  type?: string
  endContent?: any
}) {
  return register ? (
    <Input
      label={label}
      size={size}
      type={type}
      color={color}
      variant={variant}
      labelPlacement={labelPlacement}
      placeholder={placeholder}
      description={description}
      endContent={endContent}
      {...register(name, validationRules[name])}
    />
  ) : (
    <Input
      label={label}
      size={size}
      type={type}
      color={color}
      variant={variant}
      labelPlacement={labelPlacement}
      placeholder={placeholder}
      description={description}
      endContent={endContent}
    />
  )
}
