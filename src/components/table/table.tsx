import React from "react";

type ColumnAttributes = {
  title: string;
  key: string;
  dataIndex: string;
  render?: (value: any, record: any) => any;
  align: "left" | "right" | "center";
  width?: string | number;
};

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  data?: any[];
  columns?: Array<ColumnAttributes>;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const { data, columns } = props;

  const renderHeader = () => {
    return (
      <thead>
        <tr>
          {columns?.map((column) => (
            <th key={column.key} style={{ textAlign: column.align }}>
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  const renderData = () => {
    return (
      <tbody>
        {data?.map((record) => (
          <tr key={record.id}>
            {columns?.map((column) => (
              <td
                key={column.key}
                style={{
                  textAlign: column.align,
                  width: column.width?.toString() + "px",
                }}
              >
                {column.render
                  ? column.render(record[column.dataIndex], record)
                  : record[column.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <table ref={ref} className="table">
      {renderHeader()}
      {renderData()}
    </table>
  );
});

export { Table };
