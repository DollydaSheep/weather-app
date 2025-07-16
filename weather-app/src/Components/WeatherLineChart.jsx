import React from 'react'

import { ResponsiveLine } from '@nivo/line'

const MyLine = ({ data }) => (
    <ResponsiveLine /* or Line for fixed dimensions */
        data={data}
        margin={{ top: 30, right: 100, bottom: 50, left: 100 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        curve="natural"
        axisBottom={{ tickSize: 10, legend: 'Temperature', legendOffset: 36 }}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        enablePointLabel={true}
        pointLabelYOffset={-12}
        enableCrosshair={false}
        useMesh={true}
        theme={{
          "text": {
              "fontSize": 11,
              "fill": "#ffffffff",
              "outlineWidth": 0,
              "outlineColor": "#ffffff"
          },
          "axis": {
              "legend": {
                  "text": {
                      "fontSize": 12, 
                      "fill": "#ffffffff",
                      "outlineWidth": 0,
                      "outlineColor": "#ffffff"
                  }
              },
              "ticks": {
                  "text": {
                      "fontSize": 11,
                      "fill": "#ffffff",
                      "outlineWidth": 0,
                      "outlineColor": "#ffffff"
                  }
              }
          },
          "tooltip": {
              "wrapper": {},
              "container": {
                  "background": "#ffffff",
                  "color": "#333333",
                  "fontSize": 12
              },
              "basic": {},
              "chip": {},
              "table": {},
              "tableCell": {},
              "tableCellValue": {}
          }
        }}
    />
)

const WeatherLineChart = () => {

  const data = [
    {
      id: 'Temperature',
      data: [
        { x: '6:00 AM', y: 17 },
        { x: '9:00 AM', y: 15 },
        { x: '12:00 PM', y: 14 },
        { x: '3:00 PM', y: 17 },
        { x: '6:00 PM', y: 20 },
        { x: '9:00 PM', y: 23 },
      ],
    },
  ]

  return (
    <div style={{ height: '75%' }}>
      <MyLine data={data}/>

    </div>
  )
}

export default WeatherLineChart