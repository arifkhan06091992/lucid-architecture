var a = {
    color:
        [
            "#d11c69",
            "#23a8d3",
            "#BDC3C7",
            "#3498DB",
            "#9B59B6",
            "#8abb6f",
            "#759c6a",
            "#bfd3b7"
        ],
    title: {
        itemGap: 8,
        textStyle: {
            fontWeight: "normal",
            color: "#d11c69"
        }
    },
    tooltip: {
        backgroundColor: "rgba(0,0,0,0.5)",
        axisPointer: {
            type: "line",
            lineStyle: {
                color: "#d11c69",
                type: "dashed"
            }
        }
    },
    categoryAxis: {
        axisLine: {lineStyle: {color: "#78818a"}},
        splitLine: {lineStyle: {color: ["#23a8d3"]}}
    },
    valueAxis: {
        axisLine: {lineStyle: {color: "#78818a"}},
        splitArea: {
            show: !0,
            areaStyle: {color: ["rgba(250,250,250,0.1)", "rgba(200,200,200,0.1)"]}
        },
        splitLine: {lineStyle: {color: ["#eee"]}}
    },
    textStyle: {fontFamily: "Arial, Verdana, sans-serif"}
};
if ($("#total_sales_chart").length)
{
    var b = echarts.init(document.getElementById("total_sales_chart"), a);
    option = {
        tooltip: {trigger: "axis"},
        legend: {
            x: 220,
            y: 0,
            data: ["Total","Online", "On The Door"]
        },
        toolbox: {
            show: !0,
            feature: {
                magicType: {
                    show: !0,
                    title: {
                        line: "Line",
                        bar: "Bar",
                        stack: "Stack",
                        tiled: "Tiled"
                    },
                    type: ["line", "bar", "stack", "tiled"]
                },
                restore: {
                    show: !0,
                    title: "Restore"
                },
                saveAsImage: {
                    show: !0,
                    title: "Save Image"
                }
            }
        },
        calculable: !0,
        xAxis: [
            {
                type: "category",
                boundaryGap: !1,
                data: data_labels
    }
],
    yAxis: [{type: "value"}],
        series: [
    {
        name: "Total",
        type: "line",
        smooth: !0,
        itemStyle: {normal: {areaStyle: {type: "default"}}},
        data: total_sale_data
},
    {
        name: "Online",
            type: "line",
        smooth: !0,
        itemStyle: {normal: {areaStyle: {type: "default"}}},
        data: online_sale_data
    },
    {
        name: "On The Door",
            type: "line",
        smooth: !0,
        itemStyle: {normal: {areaStyle: {type: "default"}}},
        data:box_office_sale_data
    }
]
};

    b.setOption(
        option
    )
}