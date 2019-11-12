<template>
	<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
		<headCP nav="2"/>
		<view class="body">
			<view class="tapbar">
				<view :class="{tap:1,hl:hl==0}" @click="change(0)">公司介绍</view>
				<view :class="{tap:1,hl:hl==1}" @click="change(1)">联系我们</view>
			</view>
			<view class="infoFrame" v-if="hl==0">
				<view class="title">
					<text class="CN">公司介绍</text>
					<text class="EN"> / ABOUT US</text>
				</view>
				<view class="info">
					<h2>RHY融合易全球矿场</h2>
					<p>RHY融合易是全球大型区块链矿场，拥有900MW的供电能力，可同时60万台矿机开机，共计27个大型矿场，目前是全球最大的矿场公司。于2016年在东欧、中东、中国西部电力资源丰富的地区投资建设大型数据中心，以行业最具竞争力的电费优势成为区块链最核心的大型区块链数据中心。</p> 
					<img src="/static/aboutUS1.jpg" alt="">
					<p>RHY.com融合易由星云矿业科技股份有限公司创立，分别融获新加坡哈希资本，香港共识基金、新加坡BrahmaVC、ExchangeUnion的BTC投资，RHY融合易着重矿圈上下游布局，主业以围绕区块链矿场，投资建设大型变电站、天然气发电厂、水力发电站等，沿着产业投资矿场建设工程公司、小变压器工厂、矿机电源生产厂、集装箱移动矿场工厂等。RHY融合易已经成为全球最具资源优势和规模最大的区块链矿场。</p> 
					<img src="/static/aboutUS2.jpg" alt="">
					<p>RHY.com融合易中国大陆地区业务由深圳市互联在线云计算股份有限公司独家总代理。</p>
				</view>
				<div class="aBoutUs-limg">
				            <div><img src="/static/logo-1.png" alt=""><span><a href="http://www.hlzx.com" target="_blank">互联在线</a> </span></div>
				            <div><img src="/static/logo-2.png" alt=""><span>伯利兹星云矿业</span></div>
				            <div><img src="/static/logo-3.png" alt=""><span>香港共识基金</span></div>
				            <div><img src="/static/logo-4.png" alt=""><span>Brahma VC</span></div>
				            <div><img src="/static/logo-5.png" alt=""><span>新加坡哈希资本</span></div>
				</div>
			</view>
			<view class="infoFrame" v-else>
				<view class="title">
					<text class="CN">联系我们</text>
					<text class="EN"> / CONTACT US</text>
				</view>
				<view class="listFrame">
					<view class="left">
						<view class="list">
							<image src="/static/page27.jpg" class="icon"></image>
							<view class="text">客服总机：400-680 1888（300线）</view>
						</view>
						<view class="list">
							<image src="/static/page27.jpg" class="icon"></image>
							<view class="text">客服直线：400-680 1888（300线）</view>
						</view>
						<view class="list">
							<image src="/static/page28.jpg" class="icon"></image>
							<view class="text">总裁办公室邮箱：400-680 1888（300线）</view>
						</view>
						<view class="list">
							<view class="text">深圳总部基地：广东省深圳市龙华新区清祥路1号宝能科技园7栋A座3楼（全层）</view>
						</view>
					</view>
					<view class="right">
						<image class="qrCode" src="/static/erweima.jpg"></image>
						<view>
							<view class="text">扫描二维码</view>
							<view class="text">关注RHY矿场</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import all from '@/mixin/all'
	export default {
		mixins:[all],
		data() {
			return {
				hl:0
			}
		},
		onLoad() {

		},
		methods: {
			change(num){
				this.hl = num
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #fff;
	}
	.content{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		transform-origin: left top;
		.body{
			width:1200px;
			flex-grow: 1;
			.tapbar{
				width:100%;
				height: 50px;
				margin-top: 30px;
				border: 1px solid #ddd;
				display: flex;
				.tap{
					width:50%;
					height: 50px;
					line-height: 50px;
					text-align: center;
					font-size: 15px;
				}
				.tap.hl{
					background-color: #009ffd;
					color: #fff;
				}
			}
			.infoFrame{
				width:1200px;
				border-top: 4px solid #eaeaea;
				    border-left: 1px solid #eaeaea;
				    border-right: 1px solid #eaeaea;
				    border-bottom: 1px solid #eaeaea;
				    padding: 15px 10px;
				margin: 80px 0;
				.title{
					width:100%;
					height:35px;
					border-bottom: 1px dotted #ddd;
					line-height: 0px;
					.CN{
						font-size: 18px;
						    color: #009ffd;
					}
					.EN{
						font-size: 12px;
						    color: #666;
					}
				}
				.info{
					padding-top: 60px;
					h2{
						    display: block;
						    font-size: 16px;
						    text-align: center;
						    line-height: 28px;
						    margin-bottom: 30px;
						
					}
					img{
						width: 100%;
					}
					p{
						font-size: 14px;
						    line-height: 25px;
						    margin-bottom: 20px;
					}
				}
				.aBoutUs-limg{
					display: flex;
					justify-content: space-evenly;
					div{
						width: 18%;
						    text-align: center;
						font-size: 15px;
						img{
							width: 100%;
							margin-bottom: 10px;
						}
					}
				}
			}
			.listFrame{
				display: flex;
				justify-content: space-between;
				.list{
					display: flex;
					align-items: center;
					margin-top: 20px;
					.icon{
						width: 35px;
						height:31px;
					}
					.text{
						font-size: 14px;
						color: #333;
						margin-left: 9px;
					}
				}
				.right{
					width:495px;
					display: flex;
					align-items: center;
					.qrCode{
						width: 119px;
						height:128px;
					}
					.text{
						font-size: 14px;
						    color: #666;
						    line-height: 25px;
							margin-left: 20px;
					}
				}
			}
		}

	}
</style>
