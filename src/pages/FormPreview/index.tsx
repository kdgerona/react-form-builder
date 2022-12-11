import React, { useState, useEffect } from 'react';
import {
  ReactFormGenerator,
  FormGeneratorOnSubmitParams,
} from 'react-form-builder2';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { IOutletContext } from '../Root/types';
import Routes from '../../routes';

const FormPreview: React.FC = () => {
  const [data, setData] = useState<FormGeneratorOnSubmitParams[]>();
  const navigate = useNavigate();
  const context = useOutletContext<IOutletContext>();
  const { formData } = context ?? {};

  const handleSubmit = (data: FormGeneratorOnSubmitParams[]) => {
    setData(data);
  };

  useEffect(() => {
    if (formData) return;

    navigate(Routes['form.builder']);
  }, [formData]);

  if (!formData) return <></>;

  return (
    <div className='flex justify-around gap-4 w-full h-full'>
      <div className='flex-grow-1'>
        {/** @ts-ignore */}
        <ReactFormGenerator
          data={formData?.task_data ?? []}
          onSubmit={handleSubmit}
          /** @ts-ignore */
          submitButton={
            <button
              type='submit'
              className='px-3 w-24 h-8 rounded cursor-pointer bg-sky-500 hover:bg-sky-700 text-white'
            >
              Submit
            </button>
          }
        />
      </div>
      {data && (
        <div className='flex flex-col gap-4 border border-gray-700 rounded p-3'>
          <h1 className='font-bold'>Actual Data</h1>
          <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
      )}
    </div>
  );
};

export default FormPreview;
