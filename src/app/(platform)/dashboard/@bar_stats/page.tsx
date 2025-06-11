import { BarGraph } from "./_components/bar-graph";

export default async function BarStats() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await await delay(1000);

  return <BarGraph />;
}
