import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaReact } from '@react-icons/all-files/fa/FaReact';

import { CardProfile, CardSection } from './styles';

type Repository = {
  name: string;
  description: string;
  language: string;
};

export default function CardProfiles() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    axios
      .get('https://api.github.com/users/eduextreme/starred')
      .then((response) => {
        setRepositories(response.data);
      });
  }, []);

  return (
    <>
      {repositories?.map((repo) => {
        return (
          <>
            <CardSection>
              <CardProfile>
                <div className="header-card">
                  <FaReact size="1.875rem" />
                  <p className="title-item-card">{repo.name}</p>
                </div>
                <li>{repo.description}</li>
                <li>{repo.language}</li>
                <li>Click Ip</li>
              </CardProfile>
            </CardSection>
          </>
        );
      })}
    </>
  );
}
