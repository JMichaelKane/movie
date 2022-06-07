<script setup lang="ts">
	const props = defineProps<{
		imgUrl: string;
		name: string;
		desc: string;
	}>();
</script>

<template>
	<div style="padding: 10px">
		<div
			style="height: 0; padding-bottom: 148%; background-size: 100%"
			:style="{ backgroundImage: `url(&quot;${props.imgUrl}&quot;)` }"
		></div>
		<div class="mv-bottom">
			<div class="mv-name">
				<n-ellipsis :line-clamp="1" :tooltip="false">{{ props.name }}</n-ellipsis>
			</div>
			<div class="mv-intro">
				<n-ellipsis :line-clamp="1" :tooltip="false">
					{{ props.desc }}
				</n-ellipsis>
			</div>
		</div>
	</div>
</template>

<style>
	.mv-bottom {
		padding: 10px;
		background-color: #f5f5f5;
	}
	.mv-name {
		margin-bottom: 2px;
	}
	.mv-intro {
		color: gray;
	}
</style>
