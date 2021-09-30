import React from "react";

declare function renderItem(
  item: any,
  index: number
): React.ReactNode | undefined;

type ListProps = {
  data: any[];
  renderItem: typeof renderItem;
};

type ListItemProps = {
  className?: string;
  key?: number;
  children?: React.ReactNode;
  onClick?(event: React.MouseEvent<HTMLElement>): void;
};

const ListItem = (props: ListItemProps) => {
  const { className, ...rest } = props;
  const cls = `gu-list-item ${
    className === undefined ? "" : className
  }`.trimEnd();

  return (
    <li className={cls} {...rest}>
      {props.children}
    </li>
  );
};

interface ListComponent extends React.ExoticComponent<ListProps> {
  Item: typeof ListItem;
}

const InternalList = (props: ListProps): JSX.Element => {
  const { data, renderItem } = props;

  return (
    <div>
      <ul className="gu-list">
        {data.map((data, index) => {
          return renderItem(data, index);
        })}
      </ul>
    </div>
  );
};

const List = InternalList as ListComponent;
List.Item = ListItem;
export { List };
