import { Card } from 'components/Card/card';
import { Hero } from 'components/Hero/hero';

export function Home() {
  return (
    <main className="m-3 m-md-4">
      <Card children={<Hero />} color={"bg-primary"} hasShadow={true}/>
    </main>
  )
}