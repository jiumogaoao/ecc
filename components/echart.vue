<template>
	<view class="content">
		<!-- #ifdef APP-PLUS || H5 -->
		<view :prop="option" :change:prop="echarts.updateEcharts" id="echarts" class="echarts" :style="{height:phone?'602rpx':'360px'}"></view>
		<!-- #endif -->
	</view>
</template>

<script>
	function calculateMA(dayCount, data) {
	    var result = [];
	    for (var i = 0, len = data.length; i < len; i++) {
	        if (i < dayCount) {
	            result.push('-');
	            continue;
	        }
	        var sum = 0;
	        for (var j = 0; j < dayCount; j++) {
	            sum += data[i - j][1];
	        }
	        result.push(sum / dayCount);
	    }
	    return result;
	}
	export default {
		props:["phone","eData"],
		data() {
			return {
				option: {
    backgroundColor: '#171B2B',
    // legend: {
    //     data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
    //     inactiveColor: '#777',
    //     textStyle: {
    //         color: '#fff'
    //     }
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false,
            type: 'cross',
            lineStyle: {
                color: '#376df4',
                width: 2,
                opacity: 1
            }
        }
    },
    xAxis: {
        type: 'category',
        data: this.eData.day,
        axisLine: { lineStyle: { color: '#8392A5' } }
    },
    yAxis: [
		{
		    scale: true,
		    axisLine: { lineStyle: { color: '#171B2B' } },
		    splitLine: { show: false }
		},
		{
		    scale: true,
		    axisLine: { lineStyle: { color: '#8392A5' } },
		    splitLine: { show: false }
		}
	],
    grid: {
		top:'10%',
		left:this.phone?'5%':20,
		right:this.phone?'10%':40,
        bottom: this.phone?'10%':30
    },
    // dataZoom: [{
    //     textStyle: {
    //         color: '#8392A5'
    //     },
    //     handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
    //     handleSize: '80%',
    //     dataBackground: {
    //         areaStyle: {
    //             color: '#8392A5'
    //         },
    //         lineStyle: {
    //             opacity: 0.8,
    //             color: '#8392A5'
    //         }
    //     },
    //     handleStyle: {
    //         color: '#fff',
    //         shadowBlur: 3,
    //         shadowColor: 'rgba(0, 0, 0, 0.6)',
    //         shadowOffsetX: 2,
    //         shadowOffsetY: 2
    //     }
    // }, {
    //     type: 'inside'
    // }],
    animation: false,
    series: [
        {
            type: 'candlestick',
            data: this.eData.val,
			yAxisIndex: 1,
            itemStyle: {
                color: '#FD1050',
                color0: '#0CF49B',
                borderColor: '#FD1050',
                borderColor0: '#0CF49B'
            }
        }
    ]
}
			}
		},
		onLoad() {

		},
		methods: {
			changeOption() {
				const data = this.option.series[0].data
				// 随机更新示例数据
				data.forEach((item, index) => {
					data.splice(index, 1, Math.random() * 40)
				})
			},
			onViewClick(options) {
				console.log(options)
			}
		}
	}
</script>

<script module="echarts" lang="renderjs">
	let myChart
	export default {
		mounted() {
			let that = this;

				if (typeof window.echarts === 'function') {
					that.initEcharts()
				} else {
					// 动态引入较大类库避免影响页面展示
					const script = document.createElement('script')
					// view 层的页面运行在 www 根目录，其相对路径相对于 www 计算
					script.src = '/static/echarts.js'
					script.onload = that.initEcharts.bind(that)
					document.head.appendChild(script)
				}
		
			
		},
		methods: {
			initEcharts() {
				myChart = echarts.init(document.getElementById('echarts'))
				// 观测更新的数据在 view 层可以直接访问到
				myChart.setOption(this.option)
			},
			updateEcharts(newValue, oldValue, ownerInstance, instance) {
				// 监听 service 层数据变更
				myChart.setOption(newValue)
			},
			onClick(event, ownerInstance) {
				// 调用 service 层的方法
				ownerInstance.callMethod('onViewClick', {
					test: 'test'
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.echarts{
		width:100%;
	}
</style>

