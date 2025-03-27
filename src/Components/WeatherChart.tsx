import "./CurrentWeather.css"

import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsGrid } from '@mui/x-charts/ChartsGrid';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import { ChartsAxisHighlight, LineHighlightElement, LineHighlightPlot } from "@mui/x-charts";



type WeatherChartProps = {
    values: number[];
    precipitation: number[];
}

const WeatherChart = ({ values, precipitation}: WeatherChartProps) =>{


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
                    data: precipitation,
                    valueFormatter: (value) => `${value}mm`,
                    color: '#5498c4',
                    yAxisId: 'rightAxis',
                    label: 'Niederschlag'
                },
                
            ]}
            margin={{ bottom: 50, left: 50, right: 50, top: 50 }}
            xAxis={[{ 
                scaleType: 'band',
                data: Array.from({ length: 24 }, (_, i) => i),
                valueFormatter: (value) => `${value}:00`
            }]}
            yAxis={[
                { id: 'leftAxis' },
                { id: 'rightAxis', min: 0, max: Math.round(((Math.max(...precipitation)+0.01)*1.4) * 10) / 10  },
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
          <LineHighlightPlot/>
          <ChartsAxisHighlight x="line" />
          <ChartsTooltip />
        </ResponsiveChartContainer>
    )
}

export default WeatherChart;