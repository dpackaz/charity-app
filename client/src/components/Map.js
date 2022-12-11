import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import { useRef, useLayoutEffect } from "react";

function Map() {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv", am4maps.MapChart);
    x.geodata = am4geodata_usaLow;
    x.projection = new am4maps.projections.AlbersUsa();
    
    var polygonSeries = x.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;

    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#74B266");

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  return (
    <>
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    </>
  );
}

export default Map;
