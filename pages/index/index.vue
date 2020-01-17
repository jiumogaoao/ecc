<template>
		<view :class="{content:1,phone:phone}">
			<image :src="phone?'/static/phoneIndex.png':'/static/newWeb0.png'" mode="widthFix"></image>
			<input class="name"/>
			<input class="password" password="true"/>
			<view class="button" @click="c"></view>
		</view>
	
</template>

<script>
	import all from "@/mixin/all"
	export default {
		mixins: [all],
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {
			c(){
				alert('The account could not be found')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		width:100%;
		position: relative;
		image{
			width:100%;
		}
		input{
			position: absolute;
			width: 74rpx;
			height: 12rpx;
			border: 0;
			outline: none;
			background-color: transparent;
			text-align: center;
			color: #fff;
			font-size: 6rpx;
			&.name{
				top:87rpx;
				left: 333rpx;
			}
			&.password{
				top:114rpx;
				left: 333rpx;
			}
		}
		.button{
			position: absolute;
			top:130rpx;
			left: 333rpx;
			width: 74rpx;
			height: 12rpx;
			background-color: transparent;
		}
		&.phone{
			input{
				position: absolute;
				width: 323rpx;
				height: 53rpx;
				border: 0;
				outline: none;
				background-color: transparent;
				text-align: center;
				color: #fff;
				font-size: 18rpx;
				&.name{
					top:427rpx;
					left: 222rpx;
				}
				&.password{
					top:545rpx;
					left: 222rpx;
				}
			}
			.button{
				position: absolute;
				top:615rpx;
				left: 222rpx;
				width: 323rpx;
				height: 53rpx;
				background-color: transparent;
			}
		}
	}
</style>
