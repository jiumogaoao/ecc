<template>
	<block>
		<view class="page" v-if="!phone" >
			<view class="content" :style="{width:w+'px',height:h+'px',transform:'scale3d('+s+','+s+',1)'}">
				<view class="leftFrame">
					<view class="topFrame">
						<image class="icon" src="/static/flow/0.png"></image>
						<view class="title">Ensure Comsumers Cost</view>
					</view>
					<view class="bottomFrame">
						<view class="list">
							<view class="point" :class="{hl:!item}" @click="changeItem(0)">
								<image class="icon" src="/static/flow/3.png"></image>
								<view class="title">Assets</view>
							</view>
							<view class="point" :class="{hl:item==1}" @click="changeItem(1)">
								<image class="icon" src="/static/flow/2.png"></image>
								<view class="title">Income</view>
							</view>
						</view>
					</view>
				</view>
				<view class="rightFrame">
					<view class="topFrame">
						<image class="avatar" src="/static/flow/10.png"></image>
						<view class="name">{{name}}</view>
						<view class="line"></view>
						<image class="exit" src="/static/flow/1.png" @click="exit"></image>
					</view>
					<scroll-view class="bottomFrame" scroll-y="true">
						<view class="assetsFrame" v-if="!item">
							<image class="groupTitle" src="/static/flow/4.png" style="width:155px;height:23px;"></image>
							<view class="assetsTop">
								<view class="assetsLeft">
									<view class="th" style="border-bottom: 1px solid rgba(213,213,213,0.2);">${{total}}</view>
									<view class="tb">
										<view class="td" style="width:30%;border-right: 1px solid rgba(213,213,213,0.2);">
											<image class="title" src="/static/flow/11.png" style="width:119px;height:34px"></image>
											<view class="number">{{deposit}} USDT</view>
										</view>
										<view class="td" style="width:30%;border-right: 1px solid rgba(213,213,213,0.2);">
											<image class="title" src="/static/flow/12.png" style="width:126px;height:34px"></image>
											<view class="number">{{principal}} USDT</view>
										</view>
										<view class="td" style="width:40%;">
											<image class="title" src="/static/flow/13.png" style="width:259px;height:34px"></image>
											<view class="number">{{accumulatedincome2}} USDT</view>
										</view>
									</view>
								</view>
								<view class="assetsRight">
									<image class="button" src="/static/flow/7.png" @click="changeItem(3)"></image>
									<image class="button" src="/static/flow/8.png" style="margin-top: 7px;" @click="changeItem(2)"></image>
								</view>
							</view>
							<view class="assetsBottom">
								<image class="groupTitle" src="/static/flow/9.png" style="width:112px;height:37px;"></image>
								<view class="table">
									<view class="th">
										<view class="td" style="width:20%">Time</view>
										<view class="td" style="width:20%">Type</view>
										<view class="td" style="width:15%">Coin Type</view>
										<view class="td" style="width:15%">Quantity</view>
										<view class="td" style="width:30%">Address</view>
									</view>
									<view class="tb" v-if="list.length" v-for="(v,i) in list" :key="i">
										<view class="td" style="width:20%">{{showDay(v.time)}}</view>
										<view class="td" style="width:20%">
											<image class="in" src="/static/flow/5.png" v-if="v.type=='IN'"></image>
											<image class="in" src="/static/flow/6.png" v-else></image>
										</view>
										<view class="td" style="width:15%">{{v.coin_type}}</view>
										<view class="td" style="width:15%">{{v.money}}</view>
										<view class="td" style="width:30%">{{v.address}}</view>
									</view>
									<view class="tb" style="border: 0;">
										<view class="point" v-if="has_prev"  @click="getList(page-1)" :key="v-1">&lt;</view>
										<view class="point hl" :key="page">{{page}}</view>
										<view class="point" v-if="has_next"  @click="getList(page+1)" :key="v+1">&gt;</view>
									</view>
								</view>
							</view>
						</view>
						<view class="incomeFrame" v-if="item==1">
							<view class="incomeTop">
								<view class="incomeLeft">
									<view class="point">
										<image class="groupTitle" src="/static/flow/14.png" style="width:217px;height:37px;"></image>
										<view class="frame">
											<image class="icon" src="/static/flow/16.png"></image>
											<view class="number">{{todayincome}}</view>
										</view>
									</view>
									<view class="point">
										<image class="groupTitle" src="/static/flow/17.png" style="width:265px;height:37px;"></image>
										<view class="frame">
											<image class="icon" src="/static/flow/16.png"></image>
											<view class="number">{{accumulatedincome}}</view>
											<view class="dsc">Daily revenue will be settled in usdt</view>
										</view>
									</view>
								</view>
								<view class="incomeRight">
									<image class="groupTitle" src="/static/flow/15.png" style="width:380px;height:36px;"></image>
									<view class="list">
										<view class="point">
											<view class="top">Price</view>
											<view class="number">${{price}}</view>
										</view>
										<view class="point">
											<view class="top"><view style="transform: scale(0.7);width: 121%;transform-origin: left center;position: relative;top: 9px;left: 24px;">Whole Network Computing Power</view></view>
											<view class="number">{{whole_network_computing_power}}TH/s</view>
										</view>
										<view class="point">
											<view class="top">Whole Network Difficulty</view>
											<view class="number">{{whole_network_difficulty}}P</view>
										</view>
										<view class="point">
											<view class="top">Mine Calculation</view>
											<view class="number">{{calculation_power}}TH/s</view>
										</view>
										<view class="point">
											<view class="top">Online Mining Machine</view>
											<view class="number">{{mining_machine}}</view>
										</view>
									</view>
								</view>
							</view>
							<view class="incomeBottom">
								<image class="groupTitle" src="/static/flow/18.png" style="width:298px;height:25px;"></image>
								<view class="dataFrame">
									<view class="big">ETH/USDT</view>
									<view class="small">{{lastDay}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OPEN:{{lastOpen}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HIGH:{{lastHigh}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOW:{{lastLow}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLOSE:{{lastClose}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VOL:{{lastVol}}</view>
								</view>
								<view class="timeFrame">
									<view class="time hl">1day</view>
									<!-- <view class="time">1week</view>
									<view class="time">1month</view> -->
								</view>
								<echart :phone="phone" :eData="eData" v-if="eData.val.length"></echart>
							</view>
						</view>
						<view class="rechargeFrame"  v-if="item==2">
							<image class="groupTitle" src="/static/flow/19.png" style="width:134px;height:31px;"></image>
							<view class="frame">
								<canvas class="qrCode" canvas-id="qrcode"></canvas>
								<image class="logo" src="/static/flow/20.png"></image>
								<view class="codeFrame">
									<view class="code">{{address}}</view>
									<view class="copy" v-clipboard:copy="address" v-clipboard:success="onCopy" v-clipboard:error="onError">Copy</view>
								</view>
								<view class="list">
									<view class="point"><view class="det">•</view>Please don’t deposit any other digital assets except USDT to the above address. Otherwise, you may lose your assets permanently. </view>
									<view class="point"><view class="det">•</view>Depositing to the above address requires confirmations of the entire network. It will arrive after 12 confirmations, and it will be available to withdraw after 12 confirmations. </view>
									<view class="point"><view class="det">•</view>Minimum deposit amount: 1 USDT. Any deposits less than the minimum will not be credited or refunded. </view>
									<view class="point"><view class="det">•</view>Please make sure that your computer and browser are secure and your information is protected from being tampered or leaked.</view>
								</view>
							</view>
						</view>
						<view class="withdrawal" v-if="item==3">
							<image class="groupTitle" src="/static/flow/21.png" style="width:157px;height:24px;"></image>
							<view class="frame">
								<view class="title">Address</view>
								<input class="input" v-model="rAddress"/>
								<view class="title" style="margin-top: 42px;">Amount</view>
								<input class="input" v-model="money" type="number"/>
								<view class="dsc">Available balance：{{rbalance}} USDT Deposit：{{rdeposit}} USDT</view>
								<view class="dsc">Principal：{{rlock}} USDT Lock up until ：{{routtime}}</view>
								<view class="centerFrame">
									<view class="point">
										<view class="title">Fee</view>
										<view class="subInput">{{fee}} USDT</view>
									</view>
									<view class="point">
										<view class="title">Receive Amount</view>
										<view class="subInput">{{rmoney}} USDT</view>
									</view>
								</view>
								<view class="list">
									<view class="point"><view class="det">•</view>Minimum withdrawal amount: 2 USDT -ERC20. </view>
									<view class="point"><view class="det">•</view>In order to ensure the safety of funds, we will conduct manual review on the withdrawal of currency. Please wait patiently for the staff to contact you by phone or email. </view>
									<view class="point"><view class="det">•</view>Please make sure that your computer and browser are secure and your information is protected from being tampered or leaked. </view>
									<view class="point"><view class="det">•</view>The deposit can only be drawn after all the principal and income are drawn.</view>
								</view>
								<image class="submit" src="/static/flow/22.png"  @click="submit"></image>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		<view class="phone" v-else>
			<view class="topFrame">
				<image src="/static/flow/phone/0.png" class="icon"/>
				<view class="right">
					<view class="line"></view>
					<image class="avartar" src="/static/flow/phone/1.png"></image>
					<view class="name">{{name}}</view>
					<image class="exit" src="/static/flow/phone/2.png" @click="exit"></image>
				</view>
			</view>
			<scroll-view class="centerFrame" scroll-y="true">
				<view class="assetFrame" v-if="!item">
					<image class="groupTitle" src="/static/flow/phone/3.png" style="width: 155rpx;height:23rpx;"></image>
					<view class="assetTop">
						<view class="th" style="border-bottom: 1px solid rgba(213,213,213,0.2);">${{total}}</view>
						<view class="tb">
							<view class="td" style="width:30%;border-right: 1px solid rgba(213,213,213,0.2);">
								<image class="icon" src="/static/flow/phone/4.png" style="width: 127rpx;height:41rpx;"></image>
								<view class="tdBottom">
									<view class="number">{{deposit}}</view>
									<view class="unit">USDT</view>
								</view>
							</view>
							<view class="td" style="width:30%;border-right: 1px solid rgba(213,213,213,0.2);">
								<image class="icon" src="/static/flow/phone/5.png" style="width: 133rpx;height:41rpx;"></image>
								<view class="tdBottom">
									<view class="number">{{principal}}</view>
									<view class="unit">USDT</view>
								</view>
							</view>
							<view class="td" style="width:40%;">
								<image class="icon" src="/static/flow/phone/6.png" style="width: 179rpx;height:59rpx;"></image>
								<view class="tdBottom">
									<view class="number">{{accumulatedincome2}}</view>
									<view class="unit">USDT</view>
								</view>
							</view>
						</view>
					</view>
					<view class="buttonFrame">
						<image class="button" src="/static/flow/phone/7.png"  @click="changeItem(3)"></image>
						<image class="button" src="/static/flow/phone/8.png"  @click="changeItem(2)"></image>
					</view>
					<view class="assetBottom">
						<image class="groupTitle" src="/static/flow/phone/9.png" style="width: 112rpx;height:37rpx;"></image>
						<scroll-view scroll-x="true" class="table">
							<view class="th">
								<view class="td" style="width:180rpx;">Time</view>
								<view class="td" style="width:134rpx;">Type</view>
								<view class="td" style="width:196rpx;">Coin Type</view>
								<view class="td" style="width:165rpx;">Quantity</view>
								<view class="td" style="width:580rpx;">Address</view>
							</view>
							<view class="tb" v-if="list.length" v-for="(v,i) in list" :key="i">
								<view class="td" style="width:180rpx;">{{showDay(v.time)}}</view>
								<view class="td" style="width:134rpx;">
									<image class="in" src="/static/flow/phone/11.png" v-if="v.type=='IN'"></image>
									<image class="in" src="/static/flow/phone/10.png" v-else></image>
								</view>
								<view class="td" style="width:196rpx;">{{v.coin_type}}</view>
								<view class="td" style="width:165rpx;">{{v.money}}</view>
								<view class="td" style="width:580rpx;">{{v.address}}</view>
							</view>
							<view class="tb" style="justify-content: center;">
									<view class="point" v-if="has_prev"  @click="getList(page-1)" :key="v-1">&lt;</view>
									<view class="point hl" :key="page">{{page}}</view>
									<view class="point" v-if="has_next"  @click="getList(page+1)" :key="v+1">&gt;</view>
							</view>
						</scroll-view>
					</view>
				</view>
				<view class="incomeFrame" v-if="item==1">
					<view class="incomeTop">
						<view class="point">
							<image class="groupTitle" src="/static/flow/phone/14.png" style="width: 217rpx;height:37rpx;"></image>
							<view class="frame">
								<image class="icon" src="/static/flow/phone/16.png"></image>
								<view class="number">{{todayincome}}</view>
							</view>
						</view>
						<view class="point">
							<image class="groupTitle" src="/static/flow/phone/15.png" style="width: 265rpx;height:37rpx;"></image>
							<view class="frame">
								<image class="icon" src="/static/flow/phone/16.png"></image>
								<view class="number">{{accumulatedincome}}</view>
								<view class="dsc">Daily revenue will be settled in usdt</view>
							</view>
						</view>
					</view>
					<view class="incomeCenter">
						<image class="groupTitle" src="/static/flow/phone/17.png" style="width: 377rpx;height:29rpx;"></image>
						<view class="frame">
							<view class="point">
								<image class="bg" src="/static/flow/phone/18.png"></image>
								<view class="number">${{price}}</view>
							</view>
							<view class="point">
								<image class="bg" src="/static/flow/phone/19.png"></image>
								<view class="number">{{whole_network_computing_power}}TH/s</view>
							</view>
							<view class="point">
								<image class="bg" src="/static/flow/phone/20.png"></image>
								<view class="number">{{calculation_power}}TH/s</view>
							</view>
							<view class="point">
								<image class="bg" src="/static/flow/phone/21.png"></image>
								<view class="number">{{mining_machine}}</view>
							</view>
							<view class="point">
								<image class="bg" src="/static/flow/phone/22.png"></image>
								<view class="number">{{whole_network_difficulty}}P</view>
							</view>
						</view>
					</view>
					<view class="incomeBottom">
						<image class="groupTitle" src="/static/flow/phone/23.png" style="width: 298rpx;height:25rpx;"></image>
						<view class="dataFrame">
							<view class="big">ETH/USDT</view>
							<view class="small">{{lastDay}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OPEN:{{lastOpen}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HIGH:{{lastHigh}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOW:{{lastLow}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLOSE:{{lastClose}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VOL:{{lastVol}}</view>
						</view>
						<view class="timeFrame">
							<view class="time hl">1day</view>
						<!-- 	<view class="time">1week</view>
							<view class="time">1month</view> -->
						</view>
						<echart :phone="phone" :eData="eData" v-if="eData.val.length"></echart>
					</view>
				</view>
				<view class="rechargeFrame" v-if="item==2">
					<image class="groupTitle" src="/static/flow/phone/24.png" style="width: 134rpx;height:31rpx;"></image>
					<view class="frame">
						<canvas class="qrCode"  canvas-id="qrcode"></canvas>
						<image class="icon" src="/static/flow/phone/25.png"></image>
						<view class="code">{{address}}</view>
						<image class="copy" src="/static/flow/phone/26.png" v-clipboard:copy="address" v-clipboard:success="onCopy" v-clipboard:error="onError"></image>
						<view class="list">
							<view class="point"><view class="det">•</view>Please don’t deposit any other digital assets except USDT to the above address. Otherwise, you may lose your assets permanently. </view>
							<view class="point"><view class="det">•</view>Depositing to the above address requires confirmations of the entire network. It will arrive after 12 confirmations, and it will be available to withdraw after 12 confirmations. </view>
							<view class="point"><view class="det">•</view>Minimum deposit amount: 1 USDT. Any deposits less than the minimum will not be credited or refunded. </view>
							<view class="point"><view class="det">•</view>Please make sure that your computer and browser are secure and your information is protected from being tampered or leaked.</view>
						</view>
					</view>
				</view>
				<view class="withdrawal" v-if="item==3">
					<image class="groupTitle" src="/static/flow/phone/27.png" style="width:157rpx;height:24rpx;"></image>
					<view class="frame">
						<view class="title">Address</view>
						<input class="input" v-model="rAddress"/>
						<view class="title">Amount</view>
						<input class="input" v-model="money" type="number"/>
						<view class="dsc">Available balance：{{rbalance}} USDT</view>
						<view class="dsc" style="color:#B8FCB5;">Deposit：{{rdeposit}} USDT</view>
						<view class="dsc" style="color:#B4ACEA;">Principal：{{rlock}} USDT Lock up until ：{{routtime}}</view>
						<view class="title">Fee</view>
						<view class="subInput">{{fee}} USDT</view>
						<view class="title">Receive Amount</view>
						<view class="subInput">{{rmoney}} USDT</view>
						<view class="submit" @click="submit">OK</view>
						<view class="list">
							<view class="point"><view class="det">•</view>Minimum withdrawal amount: 2 USDT -ERC20. </view>
							<view class="point"><view class="det">•</view>In order to ensure the safety of funds, we will conduct manual review on the withdrawal of currency. Please wait patiently for the staff to contact you by phone or email. </view>
							<view class="point"><view class="det">•</view>Please make sure that your computer and browser are secure and your information is protected from being tampered or leaked. </view>
							<view class="point"><view class="det">•</view>The deposit can only be drawn after all the principal and income are drawn.</view>
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="bottomFrame">
				<view class="button" :class="{hl:!item}" @click="changeItem(0)">
					<image class="icon" src="/static/flow/phone/12.png"></image>
					<view class="title">Assets</view>
				</view>
				<view class="button" :class="{hl:item==1}" @click="changeItem(1)">
					<image class="icon" src="/static/flow/phone/13.png"></image>
					<view class="title">Icome</view>
				</view>
			</view>
		</view>
	</block>
</template>

<script>
	import all from "@/mixin/all"
	import {postFetch,logout} from "@/util/request_UT.js"
	import uQRCode from '@/static/uqrcode.js'
	import moment from 'moment'
	import echart from '@/components/echart.vue'
	export default {
		components:{echart},
		mixins:[all],
		data() {
			return {
				item:0,
				id: 0,
				calculation_power: 0,
				mining_machine: 0,
				price: 0,
				whole_network_computing_power: 0,
				whole_network_difficulty: 0,
				todayincome: "",
				accumulatedincome: "",
				deposit: 0,
				principal: 0,
				accumulatedincome2: 0,
				total: 0,
				page: 1,
				pages: 1,
				has_next: false,
				has_prev: false,
				count: 0,
				list: [],
				address:'',
				money:0,
				rmoney:0,
				rAddress:'',
				rdeposit: "",
				rlock: "",
				routtime: "",
				rbalance: "",
				rservice: "",
				eData:{
					day:[],
					val:[]
				},
				lastDay:'',
				lastOpen:0,
				lastHigh:0,
				lastLow:0,
				lastClose:0,
				lastVol:0,
				name:''
			};
		},
		computed:{
			fee(){
				return this.money * Number(this.rservice.replace('%','')) * 0.01
			}
		},
		methods:{
			submit(){
				let that = this
				postFetch("index/index/drawing",{
					maney: that.money,
					to: that.rAddress
				},function(rsp){
					if(rsp.data.status !== 200){
						alert(rsp.data.msg)
					}else{
						alert('successed')
						that.item = 0
					}
				})
			},
			showDay(d){
				return moment(d,"X").format("YYYY.MM.DD")
			},
			onCopy(){
				alert('copy successed')
			},
			onError(){
				alert('copy failed')
			},
			changeItem(i){
				let that = this;
				this.item = i;
				if(i==2){
					that.$nextTick(function(){
						setTimeout(function(){
							uQRCode.make({
							        canvasId: 'qrcode',
							        componentInstance: that,
							        text: that.address,
							        size: that.phone?407*(that.ww/750):346,
							        margin: 10,
							        backgroundColor: '#ffffff',
							        foregroundColor: '#000000',
							        fileType: 'jpg',
							        correctLevel: uQRCode.defaults.correctLevel,
							        success: res => {
							          console.log(res)
							        }
							      })
						},300)
					})
					
				}
			},
			exit(){
				logout();
				uni.reLaunch({
					url:'/pages/index/index'
				})
			},
			getList(num){
				let that = this;
				postFetch("index/index/principal",{
					page:num,
					per_page:4
				},function(rsp){
					if(rsp.statusCode !== 200){
						alert(rsp.errMsg)
					}else{
						that.deposit = rsp.data.data.deposit
						that.principal = rsp.data.data.principal
						that.accumulatedincome2 = rsp.data.data.accumulatedincome
						that.total = rsp.data.data.total
						that.page = rsp.data.data.page
						that.pages = rsp.data.data.pages
						that.has_next = rsp.data.data.has_next
						that.has_prev = rsp.data.data.has_prev
						that.count = rsp.data.data.count
						that.$set(that,'list',rsp.data.data.list)
					}
				})
			},
			getW(){
				let that = this;
				postFetch("index/index/withdraw",{
					maney:that.money
				},function(rsp){
					if(rsp.statusCode !== 200){
						alert(rsp.errMsg)
					}else{
						that.rdeposit = rsp.data.data.deposit
						that.rlock = rsp.data.data.lock
						that.routtime = rsp.data.data.outtime
						that.rbalance = rsp.data.data.balance
						that.rservice = rsp.data.data.service
					}
				})
				postFetch("index/index/realArrive",{
					money:that.money
				},function(rsp){
					if(rsp.statusCode !== 200){
						alert(rsp.errMsg)
					}else{
						that.rmoney = rsp.data.data
					}
				})
			}
		},
		watch:{
			money(){
				this.getW()
			},
			total(val){
				console.log("total",val)
			}
		},
		onLoad(op){
			this.name=op.name
		},
		mounted(){
			let that = this;
			postFetch("index/index/profit",{},function(rsp){
				if(rsp.statusCode !== 200){
					alert(rsp.errMsg)
				}else{
					that.id = rsp.data.data.id
					that.calculation_power = rsp.data.data.calculation_power
					that.mining_machine = rsp.data.data.mining_machine
					that.price = rsp.data.data.price
					that.whole_network_computing_power = rsp.data.data.whole_network_computing_power
					that.whole_network_difficulty = rsp.data.data.whole_network_difficulty
					that.todayincome = rsp.data.data.todayincome
					that.accumulatedincome = rsp.data.data.accumulatedincome
				}
			})
			this.getList(1)
			postFetch("index/index/address",{},function(rsp){
				if(rsp.statusCode !== 200){
					alert(rsp.errMsg)
				}else{
					that.address = rsp.data.address
				}
			})
			this.getW();
			postFetch("index/index/kline",{},function(rsp){
				if(rsp.statusCode !== 200){
					alert(rsp.errMsg)
				}else{
					let day=[];
					let val=[];
					for(let i = rsp.data.data.length-200;i<rsp.data.data.length;i++){
						day.push(moment(rsp.data.data[i].time,"X").format('MM-DD'))
						val.push([rsp.data.data[i].first,rsp.data.data[i].last,rsp.data.data[i].low,rsp.data.data[i].high])
						if(i==rsp.data.data.length-1){
							that.lastDay = moment(rsp.data.data[i].time,"X").format('MM-DD')
							that.lastOpen = rsp.data.data[i].first
							that.lastHigh = rsp.data.data[i].high
							that.lastLow = rsp.data.data[i].low
							that.lastClose = rsp.data.data[i].last
							that.lastVol = rsp.data.data[i].vol
						}
					}
					that.$set(that.eData,"day",day)
					that.$set(that.eData,"val",val)
					console.log(that.eData)
				}
			})
		}
	}
</script>

<style lang="scss">
	.page{
		position: fixed;
		top:0;
		left:0;
		right:0;
		bottom:0;
		overflow: hidden;
		background-color: #2e2b4c;
		.content{
			display: flex;
			justify-content: space-between;
			align-items: center;
			transform-origin: left top;
		}
		.leftFrame{
			width:269px;
			height: 100%;
			flex-shrink: 0;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.topFrame{
				width: 100%;
				height: 101px;
				background-color: #332e59;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-shrink: 0;
				.icon{
					width:31px;
					height: 40px;
					margin-right: 14px;
				}
				.title{
					font-size:21px;
					font-family:Microsoft YaHei;
					font-weight:bold;
					color:rgba(255,255,255,1);
				}
			}
			.bottomFrame{
				width: 100%;
				flex-grow: 1;
				background-color: #2e2b4c;
				.list{
					width:100%;
					margin-top: 15px;
					.point{
						width:100%;
						height: 44px;
						padding-left:40px;
						display: flex;
						align-items: center;
						cursor: pointer;
						.icon{
							width:21px;
							height:21px;
							margin-right: 22px;
						}
						.title{
							font-size:21px;
							font-family:Microsoft YaHei;
							font-weight:400;
							color:rgba(196,188,255,1);
							opacity:0.65;
							text-shadow:0px 1px 2px rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
						}
						&.hl{
							background-color: #423f5e;
						}
					}
				}
			}
		}
		.rightFrame{
			flex-grow: 1;
			height: 100%;
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			overflow: hidden;
			.topFrame{
				height:101px;
				width: 100%;
				flex-shrink: 0;
				background-color: #332e59;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				padding-right: 45px;
				.avatar{
					width:30px;
					height:30px;
					border-radius: 30px;
					margin-right: 13px;
				}
				.name{
					font-size:21px;
					font-family:Microsoft YaHei;
					font-weight:400;
					color:rgba(196,188,255,1);
					opacity:0.5;
					text-shadow:0px 1px 2px rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
					margin-right: 43px;
				}
				.line{
					width:2px;
					height:25px;
					background-color: rgba(255,255,255,0.2);
					margin-right: 40px;
				}
				.exit{
					width:21px;
					height:22px;
					cursor: pointer;
				}
			}
			.bottomFrame{
				width: 100%;
				height: 50px;
				flex-grow: 1;
				background-color: #1e1d32;
				.groupTitle{
					margin-bottom: 13px;
				}
				.assetsFrame{
					width:100%;
					padding: 56px 188px 97px 73px;
					.assetsTop{
						width:100%;
						display: flex;
						align-items: center;
						justify-content: space-between;
						.assetsLeft{
							width:1050px;
							height:286px;
							background-color: #292647;
							display: flex;
							justify-content: space-between;
							flex-direction: column;
							.th{
								width:100%;
								height: 91px;
								flex-shrink: 0;
								line-height: 91px;
								text-align: center;
								font-size:30px;
								font-family:Microsoft YaHei;
								font-weight:bold;
								color:rgba(255,255,255,0.8);
								text-shadow:0px 1px 2px rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
							}
							.tb{
								width:100%;
								flex-grow: 1;
								display: flex;
								justify-content: space-between;
								align-items: center;
								.td{
									height: 100%;
									display: flex;
									flex-direction: column;
									justify-content: center;
									align-items: center;
									.number{
										font-size:24px;
										font-family:Microsoft YaHei;
										font-weight:bold;
										color:rgba(196,188,255,1);
										margin-top: 49px;
										text-shadow:0px 1px 2px rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
									}
								}
							}
						}
						.assetsRight{
							width:236px;
							.button{
								width:236px;
								height:114px;
								cursor: pointer;
							}
						}
					}
					.assetsBottom{
						width: 100%;
						margin-top: 39px;
						.table{
							width:100%;
							.th{
								width:100%;
								background-color: #3a3263;
								height: 75px;
								display: flex;
								.td{
									height:100%;
									line-height: 75px;
									text-align: center;
									font-size:20px;
									font-family:Microsoft YaHei;
									font-weight:400;
									color:rgba(255,255,255,0.65);
									text-shadow:0px 1px 2px rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
								}
							}
							.tb{
								width:100%;
								background-color: #2d2a49;
								height:63px;
								border-bottom: 1px solid rgba(213,213,213,0.2);
								display: flex;
								align-items: center;
								justify-content: center;
								.td{
									height:100%;
									display: flex;
									justify-content: center;
									align-items: center;
									font-size:16px;
									font-family:Microsoft YaHei;
									font-weight:400;
									color:rgba(255,255,255,0.65);
									.in{
										width:55px;
										height:29px;
									}
									
								}
								.point{
									cursor: pointer;
									font-size:20px;
									padding: 0 10px;
									font-family:Microsoft YaHei;
									font-weight:400;
									color:rgba(255,255,255,0.65);
									text-shadow:0px 1px 2rpx rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
									&.hl{
										color:green;
									}
								}
							}
						}
					}
				}
				.incomeFrame{
					width:100%;
					padding: 26px 78px 33px 76px;
					.incomeTop{
						width: 100%;
						height: 551px;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.incomeLeft{
							width:360px;
							height: 100%;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							.point{
								.frame{
									width:350px;
									height: 204px;
									border-radius: 10px;
									background-color: #2e2b4c;
									display: flex;
									flex-direction: column;
									align-items: center;
									padding-top: 1px;
									margin-left: 7px;
									.icon{
										width:78px;
										height:78px;
										margin-top: 30px;
									}
									.number{
										font-size:36px;
										font-family:Microsoft YaHei;
										font-weight:bold;
										color:rgba(196,188,255,0.65);
										text-shadow:0px 1px 2px rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
										margin-top: 33px;
									}
									.dsc{
										font-size:14px;
										font-family:Microsoft YaHei;
										font-weight:400;
										color:rgba(196,188,255,0.45);
										text-shadow:0px 1px 2px rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
									}
								}
								
							}
						}
						.incomeRight{
							width: 1090px;
							height: 100%;
							.list{
								width:100%;
								height: 508px;
								background-color: #292944;
								padding-top:66px;
								display: flex;
								flex-wrap: wrap;
								.point{
									width:301px;
									height:144px;
									background-color: #322e51;
									display: flex;
									flex-direction: column;
									margin-left: 57px;
									.top{
										width: 100%;
										height: 42px;
										background-color: #362f5a;
										flex-shrink: 0;
										font-size:22px;
										font-family:Adobe Heiti Std;
										font-weight:normal;
										color:rgba(255,255,255,0.7);
										line-height: 42px;
										text-align: center;
									}
									.number{
										width:100%;
										flex-grow: 1;
										display: flex;
										justify-content: center;
										align-items: center;
										font-size:28px;
										font-family:Adobe Heiti Std;
										font-weight:normal;
										color:rgba(255,255,255,1);
									}
								}
							}
						}
					}
					.incomeBottom{
						width:100%;
						margin-top: 25px;
						.dataFrame{
							width: 100%;
							height: 78px;
							background-color: #362f58;
							display: flex;
							align-items: center;
							padding-left: 19px;
							.big{
								font-size:16px;
								font-family:Microsoft YaHei;
								font-weight:400;
								color:rgba(244,246,255,1);
							}
							.small{
								font-size:16px;
								font-family:Microsoft YaHei;
								font-weight:400;
								color:rgba(155,148,204,1);
								margin-left: 15px;
							}
						}
						.timeFrame{
							width:100%;
							height: 23px;
							background-color: #292848;
							display: flex;
							.time{
								height: 100%;
								padding: 0 9px;
								line-height: 23px;
								font-size:12px;
								font-family:Microsoft YaHei;
								font-weight:400;
								color:rgba(53,124,225,1);
								cursor: pointer;
								&.hl{
									background-color: #202135;
									color:rgba(53,124,225,1);
								}
							}
						}
					}
				}
				.rechargeFrame{
					width:100%;
					padding: 53px 152px 42px 60px;
					.frame{
						width:100%;
						background-color: #292745;
						padding: 66px 77px 22px 78px;
						display: flex;
						flex-direction: column;
						align-items: center;
						.qrCode{
							width:346px;
							height:346px;
						}
						.logo{
							width:169px;
							height:33px;
							margin-top: 19px;
						}
						.codeFrame{
							display: flex;
							justify-content: center;
							align-items: center;
							margin-top: 46px;
							.code{
								font-size:28px;
								font-family:Microsoft YaHei;
								font-weight:bold;
								text-decoration:underline;
								color:rgba(255,255,255,1);
								margin-right: 42px;
							}
							.copy{
								width:153px;
								height:45px;
								background:rgba(142,121,255,1);
								border:1px solid rgba(142,121,255,1);
								border-radius:10px;
								font-size:28px;
								font-family:Microsoft YaHei;
								font-weight:bold;
								color:rgba(255,255,255,1);
								line-height: 45px;
								text-align: center;
								cursor: pointer;
							}
						}
						.list{
							width:100%;
							background:rgba(59,51,98,1);
							padding: 46px 37px 43px 36px;
							margin-top: 45px;
							.point{
								position: relative;
								font-size:18px;
								font-family:Microsoft YaHei;
								font-weight:bold;
								color:rgba(255,255,255,0.5);
								line-height:30px;
								.det{
									position: absolute;
									top:4px;
									left:-18px;
								}
							}
						}
					}
				}
				.withdrawal{
					width:100%;
					padding: 54px 152px 42px 60px;
					.frame{
						width:100%;
						background-color: #292745;
						padding: 35px 77px 22px 78px;
						.title{
							font-size:24px;
							font-family:Microsoft YaHei;
							font-weight:400;
							color:rgba(255,255,255,0.65);
							text-shadow:0px 1px 2px rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
							margin-bottom: 29px;
						}
						.input{
							width:966px;
							height:62px;
							border:2px solid rgba(255,255,255,1);
							border-radius:10px;
							line-height: 62px;
							text-indent: 30px;
							font-size:24px;
							font-family:Microsoft YaHei;
							font-weight:bold;
							color:rgba(255,255,255,1);
							text-shadow:0px 1px 2px rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
						}
						.dsc{
							font-size:20px;
							font-family:Microsoft YaHei;
							font-weight:400;
							color:rgba(147,217,247,1);
							text-shadow:0px 1px 2px rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
							margin-top: 16px;
						}
						.centerFrame{
							width: 966px;
							display: flex;
							justify-content: space-between;
							margin-top: 34px;
							.subInput{
								width:468px;
								height:62px;
								background:rgba(118,118,118,1);
								border:2px solid rgba(255,255,255,1);
								border-radius:10px;
								text-indent: 28px;
								font-size:24px;
								font-family:Microsoft YaHei;
								font-weight:400;
								color:rgba(255,255,255,1);
								line-height: 58px;
							}
						}
						.list{
							width:100%;
							background:rgba(59,51,98,1);
							padding: 25px 56px 20px 36px;
							margin-top: 30px;
							.point{
								position: relative;
								font-size:18px;
								font-family:Microsoft YaHei;
								font-weight:bold;
								color:rgba(255,255,255,0.5);
								line-height:30px;
								.det{
									position: absolute;
									top:4px;
									left:-18px;
								}
							}
						}
						.submit{
							width:227px;
							height:59px;
							display: block;
							margin: auto;
							margin-top: 37px;
							cursor: pointer;
						}
					}
				}
			}
		}
	}
	.phone{
		position: fixed;
		top:0;
		left: 0;
		right:0;
		bottom:0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.topFrame{
			width:750rpx;
			height:96rpx;
			background-color: #342e57;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 34rpx;
			flex-shrink: 0;
			.icon{
				width:42rpx;
				height:55rpx;
			}
			.right{
				display: flex;
				align-items: center;
				.line{
					width:2px;
					height: 25rpx;
					background:rgba(255,255,255,0.2);
					box-shadow:0px 1px 2px 0px rgba(0, 0, 0, 0.6), 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
					margin-right: 54rpx;
				}
				.avartar{
					width:30rpx;
					height:30rpx;
					margin-right: 23rpx;
				}
				.name{
					font-size:24rpx;
					font-family:Microsoft YaHei;
					font-weight:400;
					color:rgba(196,188,255,0.5);
					text-shadow:0px 1px 2px rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
					margin-right: 46rpx;
				}
				.exit{
					width:21rpx;
					height:22rpx;
				}
			}
		}
		.bottomFrame{
			width:750rpx;
			height: 98rpx;
			display: flex;
			flex-shrink: 0;
			.button{
				width:50%;
				height:100%;
				background-color: #2d2c4a;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.icon{
					width:44rpx;
					height:42rpx;
					margin-bottom: 6rpx;
				}
				.title{
					font-size:24rpx;
					font-family:Microsoft YaHei;
					font-weight:400;
					color:rgba(196,188,255,0.65);
					text-shadow:0px 1px 2rpx rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
				}
				&.hl{
					background-color: #40405e;
				}
			}
		}
		.centerFrame{
			width:750rpx;
			height: 50rpx;
			flex-grow: 1;
			background-color: #25233b;
			.groupTitle{
				margin-bottom: 17rpx;
			}
			.assetFrame{
				padding: 60rpx 0 28rpx 40rpx;
				.assetTop{
					width:686rpx;
					height:334rpx;
					background-color: #2d2c4a;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.th{
						width:100%;
						height: 92rpx;
						flex-shrink: 0;
						line-height: 92rpx;
						text-align: center;
						font-size:30rpx;
						font-family:Microsoft YaHei;
						font-weight:bold;
						color:rgba(255,255,255,0.8);
						text-shadow:0px 1px 2px rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
					}
					.tb{
						width:100%;
						flex-grow: 1;
						display: flex;
						.td{
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							align-items: center;
							padding: 35rpx 0 50rpx 0;
							.tdBottom{
								display: flex;
								flex-direction: column;
								align-items: center;
								.number{
									font-size:24rpx;
									font-family:Microsoft YaHei;
									font-weight:bold;
									color:rgba(196,188,255,1);
									text-shadow:0px 1px 2rpx rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
								}
								.unit{
									font-size:24rpx;
									font-family:Microsoft YaHei;
									font-weight:bold;
									color:rgba(196,188,255,1);
									text-shadow:0px 1px 2rpx rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
									margin-top: 18rpx;
								}
							}
						}
					}
				}
				.buttonFrame{
					width:686rpx;
					margin-top: 32rpx;
					display: flex;
					justify-content: space-between;
					.button{
						width:329rpx;
						height:160rpx;
					}
				}
				.assetBottom{
					margin-top: 40rpx;
					width:100%;
					.table{
						width: 100%;
						overflow: hidden;
						.th{
							height: 75rpx;
							display: flex;
							flex-wrap: nowrap;
							.td{
								height: 75rpx;
								background-color: #362f58;
								font-size:20rpx;
								font-family:Microsoft YaHei;
								font-weight:400;
								color:rgba(255,255,255,0.65);
								text-shadow:0px 1px 2rpx rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
								line-height: 75rpx;
								text-align: center;
								flex-shrink: 0;
							}
						}
						.tb{
							height: 63rpx;
							display: flex;
							flex-wrap: nowrap;
							align-items: center;
							.td{
								height: 63rpx;
								background-color: #362f58;
								font-size:20rpx;
								font-family:Microsoft YaHei;
								font-weight:400;
								color:rgba(255,255,255,0.65);
								display: flex;
								justify-content: center;
								align-items: center;
								flex-shrink: 0;
								.in{
									width:55rpx;
									height:29rpx;
								}
							}
							.point{
								font-size:20rpx;
								padding: 0 10rpx;
								font-family:Microsoft YaHei;
								font-weight:400;
								color:rgba(255,255,255,0.65);
								text-shadow:0px 1px 2rpx rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
								&.hl{
										color:green;
									}
							}
						}
					}
				}
			}
			.incomeFrame{
				width:100%;
				padding: 44rpx 32rpx 48rpx 38rpx;
				.incomeTop{
					width:100%;
					display: flex;
					justify-content: space-between;
					.point{
						.frame{
							width:328rpx;
							height:255rpx;
							margin-top: 8rpx;
							margin-left: 9rpx;
							background-color: #2d2d48;
							display: flex;
							flex-direction: column;
							align-items: center;
							padding-top: 60rpx;
							.icon{
								width:78rpx;
								height:78rpx;
							}
							.number{
								margin-top: 22rpx;
								font-size:36rpx;
								font-family:Microsoft YaHei;
								font-weight:bold;
								color:rgba(196,188,255,0.65);
								text-shadow:0px 1px 2px rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
							}
							.dsc{
								margin-top: 13rpx;
								font-size:14rpx;
								font-family:Microsoft YaHei;
								font-weight:400;
								color:rgba(196,188,255,0.45);
								text-shadow:0px 1px 2px rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
								transform: scale(0.6);
								width:125%;
							}
						}
					}
				}
				.incomeCenter{
					width: 100%;
					margin-top: 49rpx;
					.frame{
						width:100%;
						background-color: #2b2848;
						padding: 40rpx 13rpx 0rpx 20rpx;
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;
						.point{
							width:301rpx;
							height: 144rpx;
							position: relative;
							margin-bottom: 58rpx;
							.bg{
								position: absolute;
								top:0;
								left:0;
								width:301rpx;
								height: 144rpx;
							}
							.number{
								width: 100%;
								padding-top:  81rpx;
								text-align: center;
								font-size:28rpx;
								font-family:Adobe Heiti Std;
								font-weight:normal;
								color:rgba(255,255,255,1);
								position: relative;
								z-index: 3;
							}
						}
					}
				}
				.incomeBottom{
					width:100%;
					margin-top: 50rpx;
					.dataFrame{
						width:100%;
						height: 43rpx;
						margin-top: 29rpx;
						background-color: #362f58;
						padding-left: 18rpx;
						display: flex;
						align-items: center;
						.big{
							font-size:16rpx;
							font-family:Microsoft YaHei;
							font-weight:400;
							color:rgba(244,246,255,1);
						}
						.small{
							font-size:16rpx;
							font-family:Microsoft YaHei;
							font-weight:400;
							color:rgba(155,148,204,1);
							margin-left: 8rpx;
							    width: 158%;
							    flex-shrink: 0;
							    transform: scale(0.5);
							    transform-origin: left;
						}
					}
					.timeFrame{
						width:100%;
						height: 32rpx;
						background-color: #2b2846;
						display: flex;
						.time{
							padding: 0 12rpx;
							font-size:16rpx;
							font-family:Microsoft YaHei;
							font-weight:400;
							color:rgba(97,104,138,1);
							&.hl{
								font-size:16rpx;
								font-family:Microsoft YaHei;
								font-weight:400;
								color:rgba(53,124,225,1);
								background:rgba(30,34,55,1);
							}
						}
					}
				}
			}
			.rechargeFrame{
				width: 100%;
				padding: 48rpx 32rpx 0 38rpx;
				.frame{
					width: 100%;
					margin-top: 9rpx;
					background-color: #2b2846;
					padding: 58rpx 27rpx 54rpx 27rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					.qrCode{
						width:407rpx;
						height:407rpx;
						flex-shrink: 0;
					}
					.icon{
						width:257rpx;
						height:47rpx;
						margin-top: 20rpx;
						flex-shrink: 0;
					}
					.code{
						font-size:20rpx;
						font-family:Microsoft YaHei;
						font-weight:bold;
						text-decoration:underline;
						color:rgba(255,255,255,1);
						margin-top: 38rpx;
						flex-shrink: 0;
					}
					.copy{
						width:153rpx;
						height: 45rpx;
						margin-top: 25rpx;
					}
					.list{
						width:100%;
						margin-top: 43rpx;
						background:rgba(59,51,98,1);
						padding: 31rpx 17rpx 35rpx 29rpx;
						.point{
							position: relative;
							font-size:18rpx;
							font-family:Microsoft YaHei;
							font-weight:bold;
							color:rgba(255,255,255,0.5);
							line-height:30rpx;
							width: 126%;
							transform: scale(0.8);
							transform-origin: left top;
							.det{
								position: absolute;
								top:5rpx;
								left:-20rpx;
							}
						}
					}
				}
			}
			.withdrawal{
				width: 100%;
				padding: 46rpx 32rpx 0 38rpx;
				.frame{
					width:100%;
					background-color: #292946;
					padding: 1px 42rpx 32rpx 31rpx;
					.title{
						margin-top: 48rpx;
						font-size:24rpx;
						font-family:Microsoft YaHei;
						font-weight:400;
						color:rgba(255,255,255,1);
						opacity:0.65;
						text-shadow:0px 1px 2rpx rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
					}
					.input{
						width:100%;
						height:62rpx;
						border:2rpx solid rgba(255,255,255,1);
						border-radius:10rpx;
						margin-top: 29rpx;
						text-indent: 30rpx;
						line-height: 62rpx;
						font-size:20rpx;
						font-family:Microsoft YaHei;
						font-weight:bold;
						color:rgba(255,255,255,1);
						text-shadow:0px 1px 2rpx rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
					}
					.dsc{
						margin-top: 4rpx;
						font-size:20rpx;
						font-family:Microsoft YaHei;
						font-weight:400;
						color:rgba(147,217,247,1);
						text-shadow:0px 1px 2rpx rgba(0, 0, 0, 0.6), 0px 1px 1px rgba(0, 0, 0, 0.25);
						    transform: scale(0.8);
						    width: 109%;
						    transform-origin: left top;
					}
					.subInput{
						width:100%;
						height:62rpx;
						background:rgba(118,118,118,1);
						border:2rpx solid rgba(255,255,255,1);
						border-radius:10rpx;
						font-size:24rpx;
						font-family:Microsoft YaHei;
						font-weight:400;
						color:rgba(255,255,255,1);
						line-height: 62rpx;
						text-indent: 28rpx;
						margin-top: 29rpx;
					}
					.submit{
						width:100%;
						height: 59rpx;
						text-align: center;
						line-height: 59rpx;
						background:rgba(142,121,255,1);
						border:1px solid rgba(142,121,255,1);
						border-radius:10rpx;
						font-size:28rpx;
						font-family:Microsoft YaHei;
						font-weight:bold;
						color:rgba(255,255,255,1);
						margin-top: 64rpx;
					}
					.list{
						width:100%;
						background:rgba(59,51,98,1);
						padding: 26rpx 18rpx 32rpx 27rpx;
						margin-top: 27rpx;
						.point{
							position: relative;
							font-size:18rpx;
							font-family:Microsoft YaHei;
							font-weight:bold;
							color:rgba(255,255,255,0.5);
							line-height:30rpx;
							width: 126%;
							transform: scale(0.8);
							transform-origin: left top;
							.det{
								position: absolute;
								top:5rpx;
								left:-20rpx;
							}
						}
					}
				}
			}
		}
	}
</style>
