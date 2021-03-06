import * as React from 'react';
import { SemanticWIDTHS } from '../..';

export interface FormFieldProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /**
   * A form control component (i.e. Dropdown) or HTML tagName (i.e. 'input').
   * Extra FormField props are passed to the control component.
   * Mutually exclusive with children.
   */
  control?: any;

  /** Individual fields may be disabled. */
  disabled?: boolean;

  /** Individual fields may display an error state. */
  error?: boolean;

  /** A field can have its label next to instead of above it. */
  inline?: boolean;

  /** Mutually exclusive with children. */
  label?: any;

  /** A field can show that input is mandatory.  Requires a label. */
  required?: any;

  /** Passed to the control component (i.e. <input type='password' />) */
  type?: string;

  /** A field can specify its width in grid columns */
  width?: SemanticWIDTHS;
}

declare const FormField: React.StatelessComponent<FormFieldProps>;

export default FormField;
