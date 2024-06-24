import React from "react";

import {Input, TextField as Field, TextFieldProps} from "react-aria-components";

interface FieldProps {
  controlledValue?: string | number | boolean | null;
  watchStateVal?: any;
}
function TextField(props: TextFieldProps & React.RefAttributes<HTMLDivElement> & FieldProps) {
  const { watchStateVal } = props;
  return (
    <Field
      className='flex border border-gray-300 rounded-md w-full p-1'
      {...props}
    >
      <Input className="flex flex-grow outline-0 p-1.5" value={watchStateVal} />
    </Field>
  );
}

export default TextField;