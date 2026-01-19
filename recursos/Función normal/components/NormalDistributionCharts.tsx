
import React, { useRef, useState, useEffect, useMemo } from 'react';
import * as d3 from 'd3';
import { Point, DistributionParams } from '../types';
import { generateDataPoints, calculatePDF, calculateCDF } from '../utils/mathUtils';
import { CHART_MARGINS } from '../constants';

interface ChartsProps {
  params: DistributionParams;
  selectedX: number | null;
  onXChange: (x: number | null) => void;
  intervalLevel: number;
}

const NormalDistributionCharts: React.FC<ChartsProps> = ({ params, selectedX, onXChange, intervalLevel }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pdfSvgRef = useRef<SVGSVGElement>(null);
  const cdfSvgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Set range to strictly 3.5 standard deviations from the mean
  const range: [number, number] = useMemo(() => {
    return [params.mean - 3.5 * params.stdDev, params.mean + 3.5 * params.stdDev];
  }, [params.mean, params.stdDev]);

  const data = useMemo(() => {
    return generateDataPoints(params.mean, params.stdDev, range, 300);
  }, [params.mean, params.stdDev, range]);

  // Observe container size changes
  useEffect(() => {
    if (!containerRef.current) return;

    const observeTarget = containerRef.current;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        // In mobile view (h-auto), the entry height might be 0 initially or very small.
        // We ensure a minimum chart height for visibility on mobile.
        const effectiveHeight = height > 200 ? height : 600; 
        setDimensions({ width, height: (effectiveHeight - 16) / 2 });
      }
    });

    resizeObserver.observe(observeTarget);
    return () => resizeObserver.unobserve(observeTarget);
  }, []);

  useEffect(() => {
    if (!pdfSvgRef.current || !cdfSvgRef.current || dimensions.width === 0) return;

    const renderChart = (
      svgElement: SVGSVGElement,
      data: Point[],
      yAccessor: (d: Point) => number,
      isPDF: boolean
    ) => {
      const svg = d3.select(svgElement);
      svg.selectAll("*").remove();

      const width = dimensions.width - CHART_MARGINS.left - CHART_MARGINS.right;
      const height = dimensions.height - CHART_MARGINS.top - CHART_MARGINS.bottom - 20; // Room for axis labels

      if (width <= 0 || height <= 0) return;

      const x = d3.scaleLinear().domain(range).range([0, width]);
      const yMax = d3.max(data, yAccessor) || 1;
      const y = d3.scaleLinear().domain([0, yMax * 1.15]).range([height, 0]);

      const g = svg.append("g")
        .attr("transform", `translate(${CHART_MARGINS.left},${CHART_MARGINS.top})`);

      // Grid
      g.append("g")
        .attr("class", "text-slate-100 opacity-40")
        .call(d3.axisLeft(y).ticks(4).tickSize(-width).tickFormat(() => ""));

      // Axes
      const xAxis = g.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).ticks(Math.max(5, Math.floor(width / 80))))
        .attr("class", "text-[10px] text-slate-400 font-medium");
      xAxis.select(".domain").attr("stroke", "#e2e8f0");
      
      const yAxis = g.append("g")
        .call(d3.axisLeft(y).ticks(4))
        .attr("class", "text-[10px] text-slate-400 font-medium");
      yAxis.select(".domain").attr("stroke", "#e2e8f0");

      // Main curve
      const line = d3.line<Point>()
        .x(d => x(d.x))
        .y(d => y(yAccessor(d)))
        .curve(d3.curveBasis);

      g.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", isPDF ? "#6366f1" : "#10b981")
        .attr("stroke-width", 2.5)
        .attr("d", line);

      // Confidence Intervals
      if (isPDF && intervalLevel > 0) {
        for (let i = 1; i <= intervalLevel; i++) {
          const xVal1 = params.mean - i * params.stdDev;
          const xVal2 = params.mean + i * params.stdDev;
          const areaData = data.filter(d => d.x >= xVal1 && d.x <= xVal2);
          const area = d3.area<Point>()
            .x(d => x(d.x))
            .y0(height)
            .y1(d => y(yAccessor(d)))
            .curve(d3.curveBasis);

          g.append("path")
            .datum(areaData)
            .attr("fill", "#6366f1")
            .attr("opacity", 0.08 * (4 - i))
            .attr("d", area);
        }
      }

      // Interaction indicators
      if (selectedX !== null) {
        const clampedX = Math.max(range[0], Math.min(range[1], selectedX));
        
        // Shaded area (only if intervals are off)
        if (intervalLevel === 0 && isPDF) {
          const leftData = data.filter(d => d.x <= clampedX);
          const area = d3.area<Point>()
            .x(d => x(d.x))
            .y0(height)
            .y1(d => y(yAccessor(d)))
            .curve(d3.curveBasis);

          g.append("path")
            .datum(leftData)
            .attr("fill", "#6366f1")
            .attr("opacity", 0.15)
            .attr("d", area);
        }

        // Vertical indicator line
        g.append("line")
          .attr("x1", x(clampedX))
          .attr("x2", x(clampedX))
          .attr("y1", 0)
          .attr("y2", height)
          .attr("stroke", isPDF ? "#6366f1" : "#10b981")
          .attr("stroke-width", 1.5)
          .attr("stroke-dasharray", "4,4");

        // CDF Horizontal line and point
        if (!isPDF) {
          const c = calculateCDF(clampedX, params.mean, params.stdDev);
          g.append("line")
            .attr("x1", 0)
            .attr("y1", y(c))
            .attr("x2", x(clampedX))
            .attr("y2", y(c))
            .attr("stroke", "#10b981")
            .attr("stroke-width", 1.5)
            .attr("stroke-dasharray", "4,4");
          
          g.append("circle")
            .attr("cx", x(clampedX))
            .attr("cy", y(c))
            .attr("r", 4)
            .attr("fill", "#10b981")
            .attr("stroke", "white")
            .attr("stroke-width", 1.5);
        }
      }

      // Mouse detection rect
      g.append("rect")
        .attr("width", width)
        .attr("height", height)
        .attr("fill", "transparent")
        .attr("class", "cursor-crosshair")
        .on("mousemove", (event) => {
          const [mx] = d3.pointer(event);
          onXChange(x.invert(mx));
        });
    };

    renderChart(pdfSvgRef.current, data, d => d.pdf, true);
    renderChart(cdfSvgRef.current, data, d => d.cdf, false);
  }, [data, range, selectedX, intervalLevel, dimensions, params.mean, params.stdDev, onXChange]);

  return (
    <div ref={containerRef} className="flex flex-col gap-4 w-full h-full min-h-0">
      <div className="bg-white p-4 rounded-[2rem] shadow-sm border border-slate-100 flex-1 flex flex-col min-h-[300px]">
        <div className="flex justify-between items-center mb-2 px-4 flex-shrink-0">
          <h3 className="text-sm font-black text-slate-800 uppercase tracking-tight">Densidad (PDF)</h3>
          <span className="text-[9px] font-mono font-bold text-indigo-400 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">f(x)</span>
        </div>
        <div className="flex-1 min-h-0 relative">
          <svg ref={pdfSvgRef} className="absolute inset-0 w-full h-full overflow-visible" />
        </div>
      </div>
      <div className="bg-white p-4 rounded-[2rem] shadow-sm border border-slate-100 flex-1 flex flex-col min-h-[300px]">
        <div className="flex justify-between items-center mb-2 px-4 flex-shrink-0">
          <h3 className="text-sm font-black text-slate-800 uppercase tracking-tight">Acumulada (CDF)</h3>
          <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">P(X ≤ x)</span>
        </div>
        <div className="flex-1 min-h-0 relative">
          <svg ref={cdfSvgRef} className="absolute inset-0 w-full h-full overflow-visible" />
        </div>
      </div>
    </div>
  );
};

export default NormalDistributionCharts;
