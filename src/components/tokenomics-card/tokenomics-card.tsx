import { Card, CardContent, CardHeader } from "../ui/card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Crowdsale investors: 80%", "Foundation: 20%"],
  datasets: [
    {
      label: "Percentage",
      data: [80, 20],
      backgroundColor: ["#0183FF", "#FAA002"],
    },
  ],
};

const TokenomicsCard = () => {
  return (
    <Card className="hidden md:block">
      <CardHeader className="text-xl font-semibold">Tokenmoics</CardHeader>
      <CardContent>
        <h1 className="text-lg font-medium">Initial Distribution</h1>
        <div className="max-w-[400px] w-full">
          <Doughnut
            data={data}
            width={400}
            height={400}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  rtl: false,
                  align: "center",
                  position: "right",
                  labels: {
                    usePointStyle: true,
                    boxWidth: 6,
                    padding: 16,
                  },
                },
              },
            }}
          />
        </div>
        <p className="text-muted-foreground text-sm text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore fugit
          at, aliquid praesentium ad soluta quos debitis et delectus error culpa
          voluptates repellendus facilis veniam nihil tempore totam recusandae
          ullam doloribus quae, blanditiis ducimus incidunt? Corporis natus,
          similique maiores corrupti beatae quo delectus tenetur, qui nisi
          blanditiis fugiat, facilis distinctio deserunt? Sapiente ullam
          assumenda atque perspiciatis sequi debitis natus vitae alias
          accusantium reiciendis inventore placeat quaerat hic molestias
          deserunt, ex repellat dolore consequatur voluptatem blanditiis ea? Eos
          sapiente similique sint?
        </p>
      </CardContent>
    </Card>
  );
};

export default TokenomicsCard;
