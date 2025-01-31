import { DynamicTableStateless } from '@atlaskit/dynamic-table';
import { buildTableHead } from './buildTableHead';
import { buildTableBody, SelectedProjectsProps } from './buildTableBody';
import { TableWrapper } from '../styles';

export type { SelectedProjectsProps } from './buildTableBody';

export const SelectedProjectsTable = ({
  projectsReadyToImport,
  onChangeComponentType,
  importableComponentTypes,
}: SelectedProjectsProps) => {
  return (
    <TableWrapper>
      <DynamicTableStateless
        head={buildTableHead()}
        rows={buildTableBody({ projectsReadyToImport, onChangeComponentType, importableComponentTypes })}
      />
    </TableWrapper>
  );
};
