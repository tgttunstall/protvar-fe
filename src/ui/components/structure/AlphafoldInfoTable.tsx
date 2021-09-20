import { StringVoidFun } from '../../../constants/CommonTypes';
import { ALPHAFOLD_URL_INTERFACE_BY_PROTEIN } from '../../../constants/ExternalUrls';

interface AlphafoldInfoTableProps {
  isoFormAccession: string,
  change3dDiagram: StringVoidFun,
  alphaFoldId: string,
  selectedAlphaFoldId: string,
  aaPos: number
}
function AlphafoldInfoTable(props: AlphafoldInfoTableProps) {
  const isRowSelected = props.selectedAlphaFoldId === props.alphaFoldId;
  const rowClass = isRowSelected ? 'clickable-row active' : 'clickable-row';

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th colSpan={4}>Predicted Structure</th>
          </tr>
          <tr>
            <th>Source</th>
            <th>Identifier</th>
            <th>Position</th>
          </tr>
          <tr className={rowClass} onClick={(e) => props.change3dDiagram(props.alphaFoldId)}>
            <td className="small">AlphaFold</td>
            <td className="small">
              <a href={ALPHAFOLD_URL_INTERFACE_BY_PROTEIN + props.isoFormAccession} target="_blank" rel="noreferrer">
                <u>{props.alphaFoldId}</u>
              </a>
            </td>
            <td className="small">{props.aaPos}</td>
          </tr>
        </tbody>
      </table>

      {isRowSelected && <ModelConfidence />}
    </div>
  );
}

function ModelConfidence() {
  return (
    <div className="search-results-legends">
      <strong>Model Confidence</strong>
      <br />
      <ul>
        <li>
          <span className="legend-icon button--legends button--legends--high" /> Very high (pLDDT &gt; 90)
        </li>
        <li>
          <span className="legend-icon button--legends button--legends--confident" /> Confident (90 &gt; pLDDT &gt; 70)
        </li>
        <li>
          <span className="legend-icon button--legends button--legends--low" /> Low (70 &gt; pLDDT &gt; 50)
        </li>
        <li>
          <span className="legend-icon button--legends button--legends--verylow" /> Very low (pLDDT &lt; 50)
        </li>
      </ul>

      <p>
        AlphaFold produces a per-residue confidence score (pLDDT) between 0 and 100. Some regions with
        low pLDDT may be unstructured in isolation.
      </p>
    </div>
  );
}

export default AlphafoldInfoTable;