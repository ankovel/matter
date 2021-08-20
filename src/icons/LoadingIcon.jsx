import React from 'react';
import { SvgIcon } from '@material-ui/core';

const Loading = (props) => (
  <SvgIcon viewBox="0 0 25 20" {...props}>
    <path
      d="M14.143 0C8.63 0 4.148 4.487 4.148 10l-1.98-2.948a.639.639 0 00-1.062.704l2.872 4.322a.64.64 0 00.958.119l3.992-3.595a.64.64 0 00.047-.902.64.64 0 00-.902-.048l-2.65 2.395c0-4.86 3.911-8.772 8.72-8.772 4.809 0 8.724 3.912 8.724 8.725s-3.91 8.725-8.72 8.725a8.65 8.65 0 01-6.164-2.556.636.636 0 00-.902 0 .636.636 0 000 .902A9.926 9.926 0 0014.148 20c5.507 0 9.995-4.483 9.995-10s-4.488-10-10-10z"
      fillRule="nonzero"
    />
  </SvgIcon>
);

export default Loading;