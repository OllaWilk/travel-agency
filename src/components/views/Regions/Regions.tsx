import React from 'react';
import { Section } from '../../layout/Section/Section';
import { PageTitle } from '../../common/PageTitle/PageTitle';
import { CountrySummary } from '../../features/CountrySummary/CountrySummary';

import styles from './Regions.scss';
import { Row } from 'react-bootstrap';

const Regions = () => {
  const regions = {
    Europe: {
      subregions: {
        'Northern Europe': {
          countries: ['SWE', 'NOR', 'DNK'],
        },
        'Southern Europe': {
          countries: ['ESP', 'ITA', 'GRC'],
        },
      },
    },
    Asia: {
      subregions: {
        'Eastern Asia': {
          countries: ['CHN', 'JPN', 'KOR'],
        },
        'South-Eastern Asia': {
          countries: ['THA', 'VNM', 'IDN'],
        },
      },
    },
  };

  const countries = {
    SWE: { alpha3Code: 'SWE', name: 'Sweden', capital: 'Stockholm' },
    NOR: { alpha3Code: 'NOR', name: 'Norway', capital: 'Oslo' },
  };

  return (
    <Section>
      <PageTitle text='All regions' />
      {Object.keys(regions).map((regionName) => (
        <div key={`region-${regionName}`}>
          <h2 className={styles.name}>{regionName}</h2>
          {regions[regionName].subregions.map((subregionName) => (
            <div key={`subregion-${subregionName}`}>
              <h3 className={styles.subtitle}>{subregionName}</h3>
              <Row>
                {subregions[subregionName].countries.map((code) => (
                  <CountrySummary
                    key={countries[code].alpha3Code}
                    {...countries[code]}
                  />
                ))}
              </Row>
            </div>
          ))}
        </div>
      ))}
    </Section>
  );
};

export { Regions };
