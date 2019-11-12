import headCP from '@/components/head_CP.vue'
module.exports = {
	components:{headCP},
	data() {
				return {
					ww:0,
					wh:0
				}
				},
	mounted(){
		let that = this;
		uni.getSystemInfo({
		    success: function (res) {
				that.ww = res.windowWidth
				that.wh = res.windowHeight
		    }
		});
		uni.onWindowResize((res)=>{
			that.ww = res.size.windowWidth
			that.wh = res.size.windowHeight
		})
	},
	computed:{
		w(){
			if(this.ww > 1200){
				return this.ww;
			}else{
				return 1200;
			}
		},
		s(){
			if(this.ww > 1200){
				return 1;
			}else{
				return this.ww/1200
			}
		},
		h(){
			console.log()
			return this.wh/this.s;
		}
	},
	methods: {
		back(){
			uni.navigateBack();
		},
		go(url){
			uni.navigateTo({
			    url: url
			});
		}
	},
}