import React from 'react';
import { ReactFormBuilder } from 'react-form-builder2';
import { useOutletContext } from 'react-router-dom';
import { IOutletContext } from '../Root/types';

// TODO: Form Viewer
const ReactFormBuilder2: React.FC = () => {
  const context = useOutletContext<IOutletContext>();
  const { handleOnChange, formData } = context ?? {};

  return (
    <>
      {/** @ts-ignore */}
      <ReactFormBuilder onPost={handleOnChange} data={formData?.task_data ?? []}/>
    </>
  );
};

export default ReactFormBuilder2;
