import { Box } from '@admin-bro/design-system';
import React, { useEffect, useState } from 'react';
import { copyTag } from '../../api/keywords';
import { fetchTopics } from '../../api/topic';
import { Topic } from '../../type/topic';
import HeaderDashboard from './header';
import TableDashboard from './table';
import ToolDashboard from './tool';

// tslint:disable-next-line:typedef
function index() {
  const [topics, setTopics] = useState<Topic[] | null>(null);
  const [selectTopic, setSelectTopic] = useState<number | null>(null);

  async function fetchTopic(): Promise<void> {
    setTopics(await fetchTopics());
    // tslint:disable-next-line:no-console
  }

  function selectTopicFun(topicId: number): void {
    setSelectTopic(topicId);
  }

  useEffect(() => {
    fetchTopic();
  }, []);

  return (
    <>
      <HeaderDashboard />
      <Box variant="grey">
        <ToolDashboard
          topics={topics}
          selectTopicParent={topicId => selectTopicFun(topicId)}
        />
        <TableDashboard topicId={selectTopic} />
      </Box>
    </>
  );
}

export default index;
