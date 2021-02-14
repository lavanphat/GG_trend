import {
  Box,
  Text,
  DropDownTrigger,
  DropDown,
  Button,
  DropDownMenu,
  DropDownItem,
  Icon,
  Badge
} from '@admin-bro/design-system';
import React, { useState } from 'react';
import { copyTag } from '../../api/keywords';
import { Topic } from '../../type/topic';

interface Props {
  topics: Topic[] | null;
  selectTopicParent: (topicId: number) => void;
}

function copyToClipboard(str: string): void {
  const el: any = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

// tslint:disable-next-line:typedef
export default function tool({ topics, selectTopicParent }: Props) {
  const [topic, setTopic] = useState<{
    topicName: string;
    topicId: number;
  } | null>(null);
  const [isCopy, setIsCopy] = useState<boolean>(false);

  function selectTopic(topicId: number, topicName: string): void {
    selectTopicParent(topicId);
    setTopic({ topicName, topicId });
    setIsCopy(false);
  }

  async function copyTagFunc(): Promise<void> {
    if (topic) {
      const copyString: string = await copyTag(topic?.topicId);
      copyToClipboard(copyString);
      setIsCopy(true);
    }
  }

  return (
    <Box
      variant="white"
      flex={true}
      alignItems="center"
      justifyContent="space-between"
    >
      <Text>Keyword by topic from Google Trend</Text>
      {topic && (
        <Badge size="lg" variant="primary">
          {topic.topicName}
        </Badge>
      )}
      <Box variant="white" flex={true}>
        {topic?.topicId && (
          <Button variant="primary" mr="1rem" onClick={() => copyTagFunc()}>
            {isCopy ? 'Copied' : 'Copy Tag'}
          </Button>
        )}
        <DropDown stick="right">
          <DropDownTrigger>
            <Button>Topics</Button>
          </DropDownTrigger>
          <DropDownMenu>
            {topics &&
              topics.map(item => (
                <DropDownItem
                  key={item.value}
                  onClick={() => selectTopic(item.value, item.text)}
                >
                  <Icon icon="Video" />
                  {item.text}
                </DropDownItem>
              ))}
          </DropDownMenu>
        </DropDown>{' '}
      </Box>
    </Box>
  );
}
