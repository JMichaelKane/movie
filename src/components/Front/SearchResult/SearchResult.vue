<script setup lang="ts">
	const props = defineProps<{
		imgUrl: string;
		name: string;
		desc: string;
		director: string;
		actor: string;
		category: string;
		id: number;
	}>();
</script>

<template>
	<n-list-item>
		<template #prefix>
			<ImgLazy :imgUrl="props.imgUrl" />

			<!-- 这里是电影图片 -->
		</template>
		<n-thing :title="props.name">
			<div>
				<n-ellipsis :line-clamp="1" :tooltip="false">导演：{{ props.director }}</n-ellipsis>
			</div>
			<div>
				<n-ellipsis :line-clamp="1" :tooltip="false">主演：{{ props.actor }}</n-ellipsis>
			</div>
			<n-space>
				<n-ellipsis :line-clamp="3" :tooltip="false">
					{{ props.desc }}
				</n-ellipsis>
			</n-space>
		</n-thing>
	</n-list-item>
</template>

<style></style>
