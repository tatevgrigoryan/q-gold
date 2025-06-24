import { useEffect } from "react";

export default function TradingViewChart() {
    useEffect(() => {
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
            largeChartUrl: "",
        });
        document.getElementById("tradingview-widget").appendChild(script);
    }, []);

    return <div id="tradingview-widget" />;
}
