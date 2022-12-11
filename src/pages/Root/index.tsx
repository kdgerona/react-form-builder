import React, { useState } from 'react';
import { Outlet, useNavigate, useMatch } from 'react-router-dom';
import Routes from '../../routes';

const Root: React.FC = () => {
  const [formData, setFormData] = useState();
  const navigate = useNavigate();
  const isPreview = useMatch(Routes['form.preview']);

  const navigatePreview = () => {
    navigate('/form/preview');
  };

  const navigateBuilder = () => {
    navigate('/form/builder');
  };

  const handleOnChange = (data: any) => {
    setFormData(data);
  };

  return (
    <div className='flex flex-col divide-y divide-solid'>
      <div className='flex px-5 h-16 gap-8 items-center'>
        {isPreview && formData ? (
          <button
            className='px-3 w-24 h-8 rounded cursor-pointer bg-sky-500 hover:bg-sky-700 text-white'
            onClick={navigateBuilder}
          >
            Edit
          </button>
        ) : (
          <button
            className='px-3 w-24 h-8 rounded cursor-pointer bg-sky-500 hover:bg-sky-700 text-white disabled:opacity-75 disabled:bg-gray-500 disabled:border disabled:border-gray-700'
            onClick={navigatePreview}
            disabled={!formData}
          >
            Preview
          </button>
        )}
      </div>
      <div className='p-5'>
        <Outlet
          context={{
            handleOnChange,
            formData,
          }}
        />
      </div>
    </div>
  );
};

export default Root;
