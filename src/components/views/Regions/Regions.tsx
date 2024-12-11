import React from 'react';
import { Section } from '../../layout/Section/Section';
import { PageTitle } from '../../common/PageTitle/PageTitle';
import { CountrySummary } from '../../features/CountrySummary/CountrySummary';

import { CountryType } from 'types/country-types';
import styles from './Regions.scss';

interface Subregion {
  countries: string[];
}

interface Region {
  subregions: string[];
}

interface Props {
  regions: Record<string, Region>;
  subregions: Record<string, Subregion>;
  countries: Record<string, CountryType>;
}
const Regions = ({ regions, subregions, countries }: Props) => (
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

export { Regions };
