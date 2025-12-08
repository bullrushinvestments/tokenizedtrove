import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { Spinner } from '@chakra-ui/react';

interface Requirement {
  id: number;
  name: string;
  description: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await axios.get<{ requirements: Requirement[] }>('/api/requirements');
        setRequirements(response.data.requirements);
        setLoading(false);
      } catch (err) {
        setError('Failed to load requirements.');
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  if (loading) return <Spinner className="m-auto" />;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  return (
    <div className={clsx('p-4', 'max-w-screen-md', 'mx-auto')}>
      {requirements.map((requirement) => (
        <div key={requirement.id} className="mb-4">
          <h3 className="text-xl font-semibold">{requirement.name}</h3>
          <p>{requirement.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { Spinner } from '@chakra-ui/react';

interface Requirement {
  id: number;
  name: string;
  description: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await axios.get<{ requirements: Requirement[] }>('/api/requirements');
        setRequirements(response.data.requirements);
        setLoading(false);
      } catch (err) {
        setError('Failed to load requirements.');
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  if (loading) return <Spinner className="m-auto" />;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  return (
    <div className={clsx('p-4', 'max-w-screen-md', 'mx-auto')}>
      {requirements.map((requirement) => (
        <div key={requirement.id} className="mb-4">
          <h3 className="text-xl font-semibold">{requirement.name}</h3>
          <p>{requirement.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GatherRequirements;