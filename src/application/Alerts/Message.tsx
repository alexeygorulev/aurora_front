import { Block } from 'components/atoms/Typography';

export default function Message(data: string) {
  return (
    <Block style={{ fontSize: '14px' }} size="m">
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </Block>
  );
}
