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

if ($("#sales_by_age_range").length)
{
    var i = echarts.init(document.getElementById("sales_by_age_range"), a);

    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            x: '300',
            y: '0',
            data:['Under 16','16 - 25','26- 30','31-50','50 above']
        },
        series: [
            {
                name:'Sales By Age Range',
                type:'pie',
                radius: ['40%', '55%'],
                label: {
                    normal: {
                        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b} ： }{c}  {per|{d}%}  ',
                        backgroundColor: '#334455',
                        borderColor: '#d11c69',
                        borderWidth: 1,
                        borderRadius: 4,
                        rich: {
                            a: {
                                color: '#fff',
                                lineHeight: 22,
                                align: 'center'
                            },
                            hr: {
                                borderColor: '#fff',
                                color: '#fff',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            b: {
                                color: '#fff',
                                fontSize: 16,
                                lineHeight: 33
                            },
                            per: {
                                color: '#fff',
                                backgroundColor: '#23a8d3',
                                padding: [2, 4],
                                borderRadius: 2
                            }
                        }
                    }
                },
                data:[
                    {value:var_0_15, name:'Under 16'},
                    {value:var_16_25, name:'16 - 25'},
                    {value:var_26_30, name:'26- 30'},
                    {value:var_31_50, name:'31-50'},
                    {value:var_51_100, name:'50 above'}
                ]
            }
        ]
    };
    i.setOption(
        option
    )
}