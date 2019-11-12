<template>
	<view class="head">
		<view class="frame">
			<view class="left">
				<image class="logo" src="/static/ECC_logo2_img@2x.png"></image>
				<view class="line"></view>
				<view class="sddomxFame">
					<image class="pic" src="/static/saldo_logo@2x.png"></image>
					<view class="name">Ensure Comsumers Cast</view>
				</view>
				<view class="navframe">
					<view :class="{nav:1,hl:nav==0}" @click="go('/pages/index/index')">首页<view class="bottomLine"></view></view>
<!-- 					<view class="nav">蚂蚁矿机<view class="bottomLine"></view></view>
					<view class="nav">神马矿机<view class="bottomLine"></view></view>
					<view class="nav">阿瓦隆矿机<view class="bottomLine"></view></view>
					<view class="nav">其他矿机<view class="bottomLine"></view></view> -->
					<view :class="{nav:1,hl:nav==1}" @click="go('/pages/message/message')">资讯<view class="bottomLine"></view></view>
					<view :class="{nav:1,hl:nav==2}" @click="go('/pages/about/about')">关于我们<view class="bottomLine"></view></view>
				</view>
			</view>
			<view class="right">
				<view class="text">语言</view>
				<view class="text hl">中文</view>
				<view class="text">ENGLISH</view>
			</view>
		</view>
	</view>
</template>

<script>
	import allComponent from '@/mixin/allComponent'
	export default {
		props:['nav'],
		mixins:[allComponent],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.head{
			width:100%;
			height:84px;
			background-color: #2F2C2B;
			flex-shrink: 0;
			.frame{
				width:1200px;
				height:84px;
				margin: auto;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left{
					display: flex;
					align-items: center;
					height: 100%;
					padding-left: 27px;
					.logo{
						width:36px;
						height:47px;
						flex-shrink: 0;
					}
					.line{
						width:1px;
						height:45px;
						background-color: #916C33;
						margin-right: 27px;
						margin-left: 27px;
						flex-shrink: 0;
					}
					.sddomxFame{
						display: flex;
						flex-direction: column;
						justify-content: center;
						margin-right: 37px;
						align-items: center;
						flex-shrink: 0;
						.pic{
							width:71px;
							height:30px;
						}
						.name{
							font-size: 7px;
							color: #916C33;
							margin-top:6px;
						}
					}
					.navframe{
						height: 100%;
						display: flex;
						align-items: center;
						.nav{
							height: 100%;
							position: relative;
							display: flex;
							justify-content: center;
							align-items: center;
							color: #fff;
							font-size: 16.67px;
							margin-right: 15px;
							.bottomLine{
								width: 100%;
								height: 4px;
								background-color: #5C86E8;
								position: absolute;
								bottom:5px;
								border-radius: 4px;
								display: none;
							}
						}
						.nav.hl{
							color: #5C86E8;
							.bottomLine{
								display: block;
							}
						}
					}
				}
				.right{
					display: flex;
					align-items: center;
					.text{
						color: #fff;
						font-size: 16.67px;
						margin-left: 20px;
					}
					.text.hl{
						color:#5C86E8;
					}
				}
			}
		}
</style>
