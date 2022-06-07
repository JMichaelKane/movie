<script setup lang="ts">
	import { watchPostEffect } from "vue";
	import Hls from "hls.js";
	import DPlayer from "dplayer";

	const props = defineProps(["url"]); //获取外部参数
	const dplayer = ref(null);
	onMounted(() => {
		let dp;
		watchPostEffect(() => {
			dp = new DPlayer({
				autoplay: false,
				container: dplayer.value,
				preload: "metadata",
				video: {
					url: props.url,
					type: "customHls",
					customType: {
						customHls: function (video: HTMLMediaElement, player: any) {
							const hls = new Hls();
							hls.loadSource(video.src);
							hls.attachMedia(video);
						},
					},
				},
			});
		});
	});
</script>

<template>
	<div id="dplayer" ref="dplayer"></div>
</template>

<style>
	#dplayer {
		margin: 50px 0 30px 0;
	}
</style>
