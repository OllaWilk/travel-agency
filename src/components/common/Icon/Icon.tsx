import React from 'react';
import { IconProps } from 'types/base-types';

const Icon = ({ name }: IconProps) => <i className={`fas fa-${name}`}></i>;

export { Icon };
