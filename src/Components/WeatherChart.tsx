import "./CurrentWeather.css"
import { LineChart } from '@mui/x-charts/LineChart';

import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsGrid } from '@mui/x-charts/ChartsGrid';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import { ChartsAxisHighlight } from "@mui/x-charts";



type WeatherChartProps = {
    values: number[];
    rain: number[];
    times: string[];
}

const WeatherChart = ({ values, rain, times }: WeatherChartProps) =>{


    return (
       
        <ResponsiveChartContainer
            series={[
                {
                    type: 'line',
                    data: values,
                    valueFormatter: (value) => `${value}°`,
                    color: 'red',
                    label: 'Temperatur',
                    
                },
                {
                    type: 'bar',
                    data: rain,
                    valueFormatter: (value) => `${value}mm`,
                    color: 'blue',
                    yAxisId: 'rightAxis',
                    label: 'Niederschlag'
                },
                
            ]}
            xAxis={[{ 
                scaleType: 'band',
                data: times.map(time => {
                    const d = new Date(time)
                    return d.getHours()
                }),
                valueFormatter: (value) => `${value}:00`
            }]}
            yAxis={[
                { id: 'leftAxis' },
                { id: 'rightAxis' },
              ]}
            height={400}
            >
          <ChartsGrid horizontal />
          <BarPlot />
          <LinePlot />
          <MarkPlot />

          <ChartsXAxis />
          <ChartsYAxis axisId="leftAxis" label="Temperatur (°C)" />
          <ChartsYAxis
            axisId="rightAxis"
            position="right"
            label="Niederschlag (mm)"
          />
          <ChartsAxisHighlight />
          <ChartsTooltip />
        </ResponsiveChartContainer>
    )
}

export default WeatherChart;