import { LinkProps } from 'next/link';
export interface ButtonInputProps
  extends React.ComponentPropsWithoutRef<'button'> {}

export interface LinkInputProps extends LinkProps {}

export interface DivInputProps extends React.ComponentPropsWithoutRef<'div'> {}

export interface FormInputProps
  extends React.ComponentPropsWithoutRef<'input'> {}

export interface ImageInputProps extends React.ComponentPropsWithRef<'img'> {}
