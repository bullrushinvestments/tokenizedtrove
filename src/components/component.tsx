import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: Requirement[];
}

interface Requirement {
  id: number;
  title: string;
  details: string;
}

interface ErrorState {
  hasError: boolean;
  message?: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorState, setErrorState] = useState<ErrorState>({ hasError: false });

  useEffect(() => {
    axios
      .get('https://api.example.com/business-spec')
      .then((response) => {
        setBusinessSpec(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setErrorState({ hasError: true, message: err.message });
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (errorState.hasError) return <div className="text-red-500 text-center">{errorState.message}</div>;

  const renderRequirements = () => {
    return businessSpec?.requirements.map((req, index) => (
      <React.Fragment key={req.id}>
        <h3 aria-label={`Requirement ${index + 1}`} className={clsx(isDesktop ? 'text-xl' : 'text-lg', 'mt-4')}>
          {req.title}
        </h3>
        <p
          aria-label={`Details for Requirement ${index + 1}`}
          className={clsx(isDesktop ? 'text-sm' : 'text-xs', 'mb-2')}
        >
          {req.details}
        </p>
      </React.Fragment>
    ));
  };

  return (
    <div className="container mx-auto p-6">
      <h1
        aria-label="Business Specification Title"
        className={clsx(isDesktop ? 'text-4xl' : 'text-3xl', 'mb-2')}
      >
        {businessSpec?.name}
      </h1>
      <p
        aria-label="Description of the Business Specification"
        className={clsx(isDesktop ? 'text-lg' : 'text-md', 'mb-6')}
      >
        {businessSpec?.description}
      </p>
      {renderRequirements()}
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: Requirement[];
}

interface Requirement {
  id: number;
  title: string;
  details: string;
}

interface ErrorState {
  hasError: boolean;
  message?: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorState, setErrorState] = useState<ErrorState>({ hasError: false });

  useEffect(() => {
    axios
      .get('https://api.example.com/business-spec')
      .then((response) => {
        setBusinessSpec(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setErrorState({ hasError: true, message: err.message });
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (errorState.hasError) return <div className="text-red-500 text-center">{errorState.message}</div>;

  const renderRequirements = () => {
    return businessSpec?.requirements.map((req, index) => (
      <React.Fragment key={req.id}>
        <h3 aria-label={`Requirement ${index + 1}`} className={clsx(isDesktop ? 'text-xl' : 'text-lg', 'mt-4')}>
          {req.title}
        </h3>
        <p
          aria-label={`Details for Requirement ${index + 1}`}
          className={clsx(isDesktop ? 'text-sm' : 'text-xs', 'mb-2')}
        >
          {req.details}
        </p>
      </React.Fragment>
    ));
  };

  return (
    <div className="container mx-auto p-6">
      <h1
        aria-label="Business Specification Title"
        className={clsx(isDesktop ? 'text-4xl' : 'text-3xl', 'mb-2')}
      >
        {businessSpec?.name}
      </h1>
      <p
        aria-label="Description of the Business Specification"
        className={clsx(isDesktop ? 'text-lg' : 'text-md', 'mb-6')}
      >
        {businessSpec?.description}
      </p>
      {renderRequirements()}
    </div>
  );
};

export default CreateBusinessSpecification;