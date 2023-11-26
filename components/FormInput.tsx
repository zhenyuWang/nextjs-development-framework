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
  // Notice: Do not use both the Input isRequired and the react-hook-form validation to check the required fields at the same time.
  // Input isRequired will cause the react - hook - form required fields to be invalid
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
