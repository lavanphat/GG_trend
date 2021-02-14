import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Text,
  Pagination
} from '@admin-bro/design-system';
import React, { useState, useEffect } from 'react';
import { fetchKeywords } from '../../api/keywords';
import { ResposeFetchKeyWords } from '../../type/keyword';

interface Props {
  topicId: number | null;
}

// tslint:disable-next-line:typedef
export default function table({ topicId }: Props) {
  const [keywords, setKeywords] = useState<ResposeFetchKeyWords | null>(null);
  const [offset, setOffset] = useState(1);

  async function fetchKeyword(): Promise<void> {
    if (topicId) {
      setKeywords(await fetchKeywords(offset, topicId));
    }
  }

  useEffect(() => {
    fetchKeyword();
  }, [offset, topicId]);

  return (
    <Box pt="x4" variant="white">
      {keywords?.list ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Query</TableCell>
              <TableCell>Link</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Updated At</TableCell>
            </TableRow>
          </TableHead>
          {keywords.list.length > 0 ? (
            <>
              <TableBody>
                {keywords.list.map(item => (
                  <TableRow key={item.Id}>
                    <TableCell>{item.Query}</TableCell>
                    <TableCell>{item.Link}</TableCell>
                    <TableCell>{item.Value}</TableCell>
                    <TableCell>{item.Status}</TableCell>
                    <TableCell>
                      {new Date(`${item.CreatedAt}`).toLocaleString('vi-VN')}
                    </TableCell>
                    <TableCell>
                      {new Date(`${item.UpdatedAt}`).toLocaleString('vi-VN')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <Text py="xl" textAlign="center">
                <Pagination
                  total={keywords.count}
                  page={offset}
                  perPage={keywords.list.length}
                  onChange={item => setOffset(item)}
                />
              </Text>
            </>
          ) : (
            <Box>No content</Box>
          )}
        </Table>
      ) : (
        'Choose topic'
      )}
    </Box>
  );
}
