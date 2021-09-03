import { Card } from 'components/Card/card';
import { CallAction } from 'components/CallAction/call-action';
import { Hero } from 'components/Hero/hero';

export function Home() {
  return (
    <main className="m-2 m-sm-4 d-grid gap-2 gap-sm-4">
      <Card children={<Hero />} color={"bg-primary"} hasShadow={true} />
      <Card children={<CallAction />} color={"bg-light"} hasShadow={false} />
    </main>
  );
}