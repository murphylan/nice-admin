import { AreaGraph } from "./_components/AreaGraph";

export default async function AreaStats() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await await delay(2000);
  return <AreaGraph />;
}
