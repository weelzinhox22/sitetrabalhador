
import React from 'react';

interface TableColumn {
  header: string;
  accessor: string;
}

interface StudyTableProps {
  columns: TableColumn[];
  data: Record<string, string | React.ReactNode>[];
  caption?: string;
}

export function StudyTable({ columns, data, caption }: StudyTableProps) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        {caption && (
          <caption className="p-2 text-sm text-gray-600 font-medium">{caption}</caption>
        )}
        <thead className="bg-health-50">
          <tr>
            {columns.map((column) => (
              <th key={column.accessor} className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-health-50'}>
              {columns.map((column) => (
                <td key={column.accessor} className="px-4 py-3 text-sm border-b border-gray-200">
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
