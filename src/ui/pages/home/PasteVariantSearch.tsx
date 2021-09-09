import React, { useState } from 'react'
import Button from '../../elements/form/Button'
import { Button as FranklinButton } from 'franklin-sites'
import { NO_OF_ITEMS_PER_PAGE } from '../../../constants/const';
import { ENSEMBL_ASML_URL } from '../../../constants/ExternalUrls';

interface PasteVariantSearchProps {
  fetchResult: any
  isLoading: boolean
}

function PasteVariantSearch(props: PasteVariantSearchProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const populateVCF = () => {
    setSearchTerm('19 1010539 rs124582 G/C . . .\n14 89993420 rs37915333 A/G . . .\n10 87933147 rs7565837 C/T . . .')
  };

  const populateHGVS = () => {
    setSearchTerm('NC_000019.10:g.1010539G>C\nNC_000014.9:g.89993420A>G\nNC_000010.11:g.87933147C>T')
  };

  const handleSubmit = (e: React.ChangeEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (searchTerm === '') {
      return;
    }
    const inputArr = searchTerm.split('\n');
    const newPage = {
      currentPage: 1,
      nextPage: true,
      previousPage: false,
      totalItems: inputArr.length,
      itemsPerPage: NO_OF_ITEMS_PER_PAGE
    };
    props.fetchResult(null, newPage, false, false, inputArr);
  };


  return <div id="search" className="card-table search">
    <div className="card">
      <section className="card__actions">
        <span className="card-header">
          <p>
            <b>Paste variants (GRCh38)</b>
          </p>
        </span>
      </section>
      <section className="card--has-hover top-row" role="button">
        <div className="card__content">
          <section className="uniprot-card">
            <section className="uniprot-card__left">
              <textarea
                id="main-textarea-search-field"
                className="main-textarea-search-field"
                value={searchTerm}
                placeholder="Paste variants in HGVS or VCF format"
                // onFocus={(e) => (e.target.placeholder = '')}
                onChange={e => setSearchTerm(e.target.value)}
              />

              <table className="table-input">
                <tbody>
                  <tr>
                    <td>
                      <b>Examples:</b>
                    </td>
                    <td>
                      <FranklinButton variant="tertiary" onClick={populateVCF} style={{ margin: 0 }}>VCF</FranklinButton>
                    </td>
                    <td>
                      <FranklinButton variant="tertiary" onClick={populateHGVS} style={{ margin: 0 }}>HGVS</FranklinButton>
                    </td>
                  </tr>
                </tbody>
              </table>
              <span className="genome-assembly-text">
                <p>
                  Reference Genome Assembly GRCh38 (hg38): {'     '}
                  <a
                    href={ENSEMBL_ASML_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ref-link"
                  >
                    Ensembl's Assembly Remapping
                  </a>
                </p>
              </span>

              <div id="search-button-group" className="search-button-group">
                <Button
                  type="submit"
                  onClick={props.isLoading ? () => null : handleSubmit}
                  className="button-primary button-bottom"
                >
                  {props.isLoading ? "Loading..." : "Search"}
                </Button>
              </div>
            </section>
          </section>
        </div>
      </section>
    </div>
  </div>
}

export default PasteVariantSearch;