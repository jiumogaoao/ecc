module.exports = {
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