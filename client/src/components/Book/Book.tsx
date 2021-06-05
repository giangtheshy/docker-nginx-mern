import { Card, Typography } from "antd";
import React from "react";
import { BookType } from "../../types/Book";

type Props = {
  book: BookType;
};
const Book: React.FC<Props> = ({ book }) => {
  return (
    <Card>
      <Typography.Title type="success" level={1}>
        {book.title}
      </Typography.Title>
      <Typography.Text type="warning">{book.subtitle}</Typography.Text>
      <Typography.Text type="secondary">{book.description}</Typography.Text>
    </Card>
  );
};

export default Book;
