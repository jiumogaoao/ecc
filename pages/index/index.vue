<template>
		<view class="content">
			<image src="/static/newWeb0.png" mode="widthFix"></image>
			<input class="name"/>
			<input class="password" password="true"/>
			<view class="button" @click="c"></view>
		</view>
	
</template>

<script>
	export default {
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
	}
</style>
