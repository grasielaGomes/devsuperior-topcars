import { Card } from 'components/Card/card';
import { CallAction } from 'components/CallAction/call-action';
import { Hero } from 'components/Hero/hero';

export function Home() {
  return (
    <main className="container-xl">
      <div className="mt-2 mt-sm-4 d-grid gap-2 gap-sm-4 col-xl-10 mx-xl-auto">
        <Card children={<Hero />} color={"bg-primary"} hasShadow={true} />
        <Card children={<CallAction />} color={"bg-light"} hasShadow={false} />
      </div>
    </main>
  );
}