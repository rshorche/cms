import React from "react";
import Feature from "../../components/Feature/Feature";
import Chart from "../../components/Chart/Chart";
import { xAxisData } from "../../datas";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="w-full flex flex-col  flex-3">
      <Feature />
      <Chart grid title="Month Sale" data={xAxisData} Key="Sale" />
      <div className="flex">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
