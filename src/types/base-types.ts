import { ButtonHTMLAttributes, CSSProperties } from 'react';

export interface ChildrenOnly {
  children: React.ReactNode;
}

export interface VariantProps {
  variant?: string;
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps {}

export interface IconProps {
  name: string;
}

export type VariantAndChildren = ChildrenOnly & VariantProps;

export interface ColProps {
  children: React.ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  offsetLg?: number;
  offsetXl?: number;
  className?: string;
  style?: CSSProperties;
}

export type RowType = ChildrenOnly & {
  style?: CSSProperties;
  className?: string;
};
