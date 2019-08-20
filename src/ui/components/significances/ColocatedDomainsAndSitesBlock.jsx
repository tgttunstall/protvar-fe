import React from 'react';
import PropTypes from 'prop-types';

import SignificancesColumn from './SignificancesColumn';
import ColocatedFeatureDataBlock from './ColocatedFeatureDataBlock';

const ColocatedDomainsAndSitesBlock = (props) => {
  const {
    data,
  } = props;

  const types = [
    'ACT_SITE',
    'MUTAGEN',
    'REGION',
    'TRANSMEM',
  ];

  return (
    <SignificancesColumn
      header="Colocated Domains/Sites"
    >
      {data
        .filter(feature => types.includes(feature.type))
        .map(f => <ColocatedFeatureDataBlock data={f} />)
      }
    </SignificancesColumn>
  );
};

ColocatedDomainsAndSitesBlock.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

ColocatedDomainsAndSitesBlock.defaultProps = {
  data: [],
};

export default ColocatedDomainsAndSitesBlock;
