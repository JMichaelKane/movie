<script setup lang="ts">
	import Hls from "hls.js";
	import DPlayer from "dplayer";

	import { onMounted, ref, watch } from "vue";

	const props = defineProps(["url"]); //获取外部参数
	const dplayer = ref(null);
	onMounted(() => {
		let dp = new DPlayer({
			container: dplayer.value,
			video: {
				url: props.url,
			},
		});
		watch(
			() => props.url,
			() => {
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
			}
		);
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
