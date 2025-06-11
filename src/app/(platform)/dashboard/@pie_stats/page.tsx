import { PieGraph } from "./_components/pie-graph";

export default async function Stats() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await await delay(1000);
  return <PieGraph />;
}
