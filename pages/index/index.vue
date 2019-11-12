<template>
		<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
			<headCP nav="0"/>
			<view class="body">
				<view class="banner">
					<swiper class="swiper" :indicator-dots="false" :autoplay="true" :interval="1000" :duration="500">
					                        <swiper-item>
					                            <image class="pic" src="/static/banner@2x.png"></image>
					                        </swiper-item>
					</swiper>
					<image src="/static/左箭头_img@2x.png" class="left"></image>
					<image src="/static/右箭头_img@2x.png" class="right"></image>
				</view>
				<view class="bigTitleFrame">
					<view class="line"></view>
					<view class="title">云算力产品</view>
					<view class="line"></view>
				</view>
				<view class="tapFrame">
					<view class="tapbarFrame">
						<view class="tapbar hl">
							<image class="icon" src="/static/资产_ICON_BTC@2x%20拷贝@2x.png"></image>
							<view class="name">比特币 （BTC）</view>
						</view>
						<view class="tapbar">
							<image class="icon" src="/static/以太坊1%20拷贝@2x.png"></image>
							<view class="name">以太坊 （ETH）</view>
						</view>
						<view class="tapbar">
							<image class="icon" src="/static/LTC_img@2x.png"></image>
							<view class="name">莱特币 （LTC）</view>
						</view>
					</view>
					<view class="bottom">
						<view class="left">
							<view class="top">BTC云算力</view>
							<view class="bottomBottom">
								<view class="item">
									<view class="title">预计回报率</view>
									<view class="dsc">20%至75%</view>
								</view>
								<view class="item">
									<view class="title">算力大小</view>
									<view class="dsc">1T/份</view>
								</view>
								<view class="item">
									<view class="title">算力价格</view>
									<view class="dsc">$375.00/份</view>
								</view>
								<view class="item">
									<view class="title">预计日产出</view>
									<view class="dsc">0.00000001837BTC/份</view>
								</view>
								<view class="item">
									<view class="title">期限</view>
									<view class="dsc">365天</view>
								</view>
								<view class="item">
									<view class="title">电费</view>
									<view class="dsc">包含365天电费</view>
								</view>
								<view class="item">
									<view class="title">管理费</view>
									<view class="dsc">6%</view>
								</view>
								<view class="item">
									<view class="title">上架时间</view>
									<view class="dsc">立即生效</view>
								</view>
							</view>
						</view>
						<view class="right">
							<text class="M">$</text>
							<text class="L">375.00</text>
							<text class="S">$400.00</text>
						</view>
					</view>
				</view>
				<view class="productFrame">
					<view class="L">
						<image class="pic" src="/static/3.3@2x.png"></image>
						<view class="right">
							<view class="title">蚂蚁矿机T17 38T</view>
							<view class="dsc">37TH/s.2.02KW</view>
							<view class="price">USDT1063.21~1300.15</view>
							<view class="price2">$1063.21~1300.15</view>
						</view>
					</view>
					<view class="M">
						<image class="pic" src="/static/3.4@2x.png"></image>
						<view class="right">
							<view class="title">蚂蚁矿机T9+11.5T</view>
							<view class="dsc">11.5TH/s.1.38KW</view>
							<view class="price">USDT51.72~136.50</view>
							<view class="price2">$52.90~87.61</view>
						</view>
					</view>
					<view class="M">
						<image class="pic" src="/static/图层%206@2x.png"></image>
						<view class="right">
							<view class="title">蚂蚁矿机S9J 14.5T</view>
							<view class="dsc">14.5TH/s.1.38KW</view>
							<view class="price">USDT265.80~466.50</view>
							<view class="price2">$265.80~466.50</view>
						</view>
					</view>
				</view>
				<view class="newsFrame">
					<view class="left">
						<view class="titleFrame">
							<view class="title">比特币矿机资讯</view>
							<view class="more">+更多</view>
						</view>
						<view class="bigNews">
							<image src="/static/5@2x.png" class="pic"></image>
							<view class="info">
								<view class="title">明年比特币减半币价会涨到多少？是否会再次迎来最高峰？</view>
								<view class="dsc">明年将是比特币又一次产量减半的关口，比特币在20 12年和2016年曾经发生过两次减半事件。在过去的两 次减半事件中，我们看到了某种模式的减半效应。比 特币都迎来了大涨，当然，历史可以分析，但未来很 难预测。未来的事情只能说是概率，没有必然。但按</view>
								<view class="data">2019-11-01</view>
							</view>
						</view>
						<view class="list">
							<view class="info">
								<view class="point"></view>
								<view class="text">云算力-轻松挖比特币的挖矿方式</view>
							</view>
							<view class="date">11-01</view>
						</view>
						<view class="list">
							<view class="info">
							<view class="point"></view>
							<view class="text">今年的比特币挖矿难度变化为什么那么大</view>
							</view>
							<view class="date">11-01</view>
						</view>
						<view class="list">
							<view class="info">
							<view class="point"></view>
							<view class="text">讲道理 云算力收益明明很一般 为什么还有人抢着买？</view>
							</view>
							<view class="date">11-01</view>
						</view>
						<view class="picFrame">
							<image class="pic" src="/static/配图1_img@2x.png"></image>
							<image class="pic" src="/static/配图2_img@2x.png"></image>
						</view>
					</view>
					<view class="right">
						<view class="titleFrame">
							<view class="title">比特币矿机资讯</view>
							<view class="more">+更多</view>
						</view>
						<view class="list">
							<image class="pic" src="/static/20191109162049.png"></image>
							<view class="info">
								<view class="title">关于ECC将取消矿池手续费和线损失费用的通知</view>
								<view class="dsc">为了进一步方便用户计算费用，也顺应用户们的意见，ECC即日 起将取消以下费用</view>
							</view>
						</view>
						<view class="list">
							<image class="pic" src="/static/20191109162049.png"></image>
							<view class="info">
								<view class="title">关于ECC将取消矿池手续费和线损失费用的通知</view>
								<view class="dsc">为了进一步方便用户计算费用，也顺应用户们的意见，ECC即日 起将取消以下费用</view>
							</view>
						</view>
						<view class="list">
							<image class="pic" src="/static/20191109162049.png"></image>
							<view class="info">
								<view class="title">关于ECC将取消矿池手续费和线损失费用的通知</view>
								<view class="dsc">为了进一步方便用户计算费用，也顺应用户们的意见，ECC即日 起将取消以下费用</view>
							</view>
						</view>
						<view class="list">
							<image class="pic" src="/static/20191109162049.png"></image>
							<view class="info">
								<view class="title">关于ECC将取消矿池手续费和线损失费用的通知</view>
								<view class="dsc">为了进一步方便用户计算费用，也顺应用户们的意见，ECC即日 起将取消以下费用</view>
							</view>
						</view>
						<view class="list">
							<image class="pic" src="/static/20191109162049.png"></image>
							<view class="info">
								<view class="title">关于ECC将取消矿池手续费和线损失费用的通知</view>
								<view class="dsc">为了进一步方便用户计算费用，也顺应用户们的意见，ECC即日 起将取消以下费用</view>
							</view>
						</view>
						<view class="list">
							<image class="pic" src="/static/20191109162049.png"></image>
							<view class="info">
								<view class="title">关于ECC将取消矿池手续费和线损失费用的通知</view>
								<view class="dsc">为了进一步方便用户计算费用，也顺应用户们的意见，ECC即日 起将取消以下费用</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<image class="index1" src="/static/index1.png"></image>
			<image class="index2" src="/static/index2.png"></image>
		</view>
	
</template>

<script>
	import all from '@/mixin/all'
	export default {
		mixins:[all],
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #eee;
	}
	.content{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		transform-origin: left top;
		.body{
			width:1200px;
			.banner{
				width:100%;
				position:relative;
				height:400px;
				.swiper{
					height:400px;
					.pic{
						width: 100%;
						height: 400px;
					}
				}
				.left{
					width:37px;
					height:67px;
					position: absolute;
					top:166px;
					left:30px;
				}
				.right{
					width:37px;
					height:67px;
					position: absolute;
					top:166px;
					right:30px;
				}
			}
			.bigTitleFrame{
				width:160px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: auto;
				margin-top: 26px;
				.line{
					height: 1px;
					background-color: #5C86E8;
					flex-grow: 1;
				}
				.title{
					font-size: 21.67px;
					font-family:Source Han Sans CN;
					font-weight:500;
					color:rgba(53,50,50,1);
					flex-shrink: 0;
					margin-left: 10px;
					margin-right: 10px;
				}
			}
			.tapFrame{
				width:1200px;
				height:255px;
				margin: auto;
				margin-top: 24px;
				background-color: #fff;
				.tapbarFrame{
					width:100%;
					height: 51px;
					background:linear-gradient(0deg,rgba(92,134,232,0.1),rgba(232,232,233,0.1),rgba(92,134,232,0.1));
					display: flex;
					align-items: center;
					.tapbar{
						width:25%;
						height:100%;
						justify-content: center;
						align-items: center;
						display: flex;
						.icon{
							width:31px;
							height:31px;
						}
						.name{
							font-size:13px;
							font-family:Source Han Sans CN;
							font-weight:400;
							color:rgba(57,52,52,1);
							margin-left: 9px;
						}
					}
					.tapbar.hl{
						background-color: #fff;
						border-top:2px solid #007AFF;
					}
				}
				.bottom{
					width:100%;
					height: 205px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.left{
						width:75%;
						height: 205px;
						border-right: 1px dotted #888;
						flex-shrink: 0;
						.top{
							font-size:21px;
							font-family:Source Han Sans CN;
							font-weight:500;
							color:rgba(51,51,51,1);
							text-align: center;
							margin-top: 23px;
						}
						.bottomBottom{
							display: flex;
							justify-content: space-between;
							align-items: center;
							flex-wrap: wrap;
							.item{
								width:25%;
								margin-top: 25px;
								.title{
									font-size:14px;
									font-family:Source Han Sans CN;
									font-weight:400;
									color:rgba(159,159,159,1);
									text-align: center;
								}
								.dsc{
									font-size:14px;
									font-family:Source Han Sans CN;
									font-weight:400;
									color:rgba(51,51,51,1);
									text-align: center;
									margin-top: 5px;
								}
							}
						}
					}
					.right{
						flex-grow: 1;
						display: flex;
						justify-content: center;
						align-items: center;
						color: #FF5614;
						.M{
							font-size: 19.17px;
						}
						.L{
							font-size: 30.83px;
						}
						.S{
							font-size:17px;
							text-decoration: line-through;
						}
					}
				}
			}
			.productFrame{
				width: 100%;
				display: flex;
				justify-content: space-between;
				margin-top: 41px;
				.L{
					width:598px;
					height:363px;
					background-color: #fff;
					border: 1px dotted #333333;
					display: flex;
					justify-content: center;
					align-items: center;
					.pic{
						width: 195px;
						height: 247px;
						flex-shrink: 0;
						margin-right: 100px;
					}
					.title{
						font-size:25px;
						font-family:Source Han Sans CN;
						font-weight:500;
						color:rgba(51,51,51,1);
					}
					.dsc{
						font-size:17px;
						font-family:Source Han Sans CN;
						font-weight:500;
						color:rgba(102,102,102,1);
						margin-top: 5px;
					}
					.price{
						font-size:19px;
						font-family:Source Han Sans CN;
						font-weight:400;
						color:rgba(239,38,84,1);
						margin-top: 30px;
					}
					.price2{
						font-size:19px;
						font-family:Source Han Sans CN;
						font-weight:bold;
						color:rgba(239,38,84,1);
						margin-top: 15px;
					}
				}
				.M{
					width:285px;
					height:363px;
					background-color: #fff;
					border: 1px dotted #333333;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					.pic{
						width: 179px;
						height: 114px;
						flex-shrink: 0;
					}
					.title{
						font-size:16.67px;
						font-family:Source Han Sans CN;
						font-weight:500;
						color:rgba(51,51,51,1);
						text-align: center;
						margin-top: 40px;
					}
					.dsc{
						font-size:12.5px;
						font-family:Source Han Sans CN;
						font-weight:500;
						color:rgba(102,102,102,1);
						margin-top: 5px;
						text-align: center;
					}
					.price{
						font-size:19px;
						font-family:Source Han Sans CN;
						font-weight:400;
						color:rgba(239,38,84,1);
						margin-top: 30px;
						text-align: center;
					}
					.price2{
						font-size:18.75px;
						font-family:Source Han Sans CN;
						font-weight:bold;
						color:rgba(239,38,84,1);
						margin-top: 15px;
						text-align: center;
					}
				}
				
			}
			.newsFrame{
				width: 100%;
				padding: 30px 24px;
				background-color: #fff;
				display: flex;
				justify-content: space-between;
				margin-top: 48px;
				.titleFrame{
					width:100%;
					height: 91px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.title{
						font-size:23px;
						font-family:Source Han Sans CN;
						font-weight:500;
						color:rgba(0,0,0,1);
					}
					.more{
						font-size:17px;
						font-family:Source Han Sans CN;
						font-weight:500;
						color:rgba(0,0,0,1);
					}
				}
				.left{
					width:638px;
					.bigNews{
						width: 100%;
						display: flex;
						justify-content: space-between;
						.pic{
							width:292px;
							height:181px;
							flex-shrink: 0;
						}
						.info{
							width:290px;
							.title{
								font-size:17px;
								font-family:Source Han Sans CN;
								font-weight:500;
								color:rgba(51,51,51,1);
							}
							.dsc{
								font-size:13px;
								font-family:Source Han Sans CN;
								font-weight:400;
								color:rgba(129,129,129,1);
								line-height:17px;
								margin-top: 15px;
							}
							.data{
								font-size:14px;
								font-family:Source Han Sans CN;
								font-weight:400;
								color:rgba(184,148,141,1);
								margin-top: 10px;
							}
						}
						
					}
					.list{
						width:100%;
						height: 55px;
						display: flex;
						justify-content: space-between;
						align-items: center;
						border-bottom: 1px solid #DADADA;
						.info{
							display: flex;
							align-items: center;
							.point{
								width:14px;
								height:4px;
								background:rgba(90,90,90,1);
								margin-right: 10px;
							}
							.text{
								font-size:15px;
								font-family:Source Han Sans CN;
								font-weight:500;
								color:rgba(90,90,90,1);
							}
						}
						.date{
							font-size:12px;
							font-family:Source Han Sans CN;
							font-weight:400;
							color:rgba(184,148,141,1);
						}
						
					}
					.picFrame{
						width:100%;
						display: flex;
						justify-content: space-between;
						.pic{
							width:313px;
							height:168px;
						}
					}
				}
				.right{
					width:487px;
					.list{
						width: 100%;
						height: 86px;
						border-bottom: 1px dotted #9F9F9F;
						background-color: #F1EFEF;
						padding: 14px;
						display: flex;
						justify-content: space-between;
						.pic{
							width:95px;
							height:62px;
							flex-shrink: 0;
						}
						.info{
							margin-left: 10px;
							.title{
								font-size:15px;
								font-family:Source Han Sans CN;
								font-weight:400;
								color:rgba(0,0,0,1);
							}
							.dsc{
								font-size:12px;
								font-family:Source Han Sans CN;
								font-weight:400;
								color:rgba(162,162,162,1);
								line-height:21px;
								margin-top:7px;
							}
						}
					}
				}
			}
		}
		.index1{
			width: 1237px;
			height: 442px;
			margin-top: 40px;
			flex-shrink: 0;
		}
		.index2{
			width: 1237px;
			height: 728px;
			margin-top: 22px;
			flex-shrink: 0;
		}
	}
</style>
