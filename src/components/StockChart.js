import { useEffect } from "react";

export default function TradingViewChart() {
    useEffect(() => {
        const container = document.getElementById("tradingview-widget");
        if (!container) return;

        container.innerHTML = ""; // Clear old content

        const widgetDiv = document.createElement("div");
        widgetDiv.className = "tradingview-widget-container__widget";
        container.appendChild(widgetDiv);

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbol: "TSXV:QGR",
            width: "100%",
            height: "300",
            locale: "en",
            dateRange: "12M",
            colorTheme: "light",
            trendLineColor: "#c4911a",
            underLineColor: "#d2b521",
            isTransparent: false,
            autosize: true,
            largeChartUrl: ""
        });

        container.appendChild(script);
    }, []);

    return (
        <div
            id="tradingview-widget"
            className="tradingview-widget-container"
            style={{ width: "100%", height: "300px" }}
        />
    );
}
