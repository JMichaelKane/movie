<script setup lang="ts">
	import { LogoYoutube, FilmOutline, HelpBuoySharp } from "@vicons/ionicons5";

	interface Tags {
		tag: string;
		id: string;
	}

	const props = defineProps<{
		category: String;
		tags: Tags[];
	}>(); //接收参数
</script>

<template>
	<n-space justify="space-between">
		<n-space>
			<n-icon size="35" color="#0e7a0d" v-if="props.category == 'film'">
				<FilmOutline />
			</n-icon>
			<n-icon size="35" color="#2583f0" v-else-if="props.category == 'animation'">
				<LogoYoutube />
			</n-icon>
			<n-icon size="35" color="#f1a225" v-else-if="props.category == 'tv'">
				<HelpBuoySharp />
			</n-icon>
			<div style="height: 36px; display: flex; align-items: center; font-size: 1.125rem">
				<span v-if="props.category == 'film'">电影</span>
				<span v-else-if="props.category == 'animation'">动漫</span>
				<span v-else-if="props.category == 'tv'">电视剧</span>
			</div>
		</n-space>
		<n-space>
			<n-grid cols="1 l:4" item-responsive responsive="screen">
				<n-grid-item v-for="item in props.tags" span="0 l:1">
					<div
						style="
							height: 36px;
							display: flex;
							align-items: center;
							font-size: 15px;
							color: #999;
							margin: 0 10px;
						"
					>
						<span>{{ item.tag }}</span>
					</div>
				</n-grid-item>
			</n-grid>
		</n-space>
	</n-space>

	<div class="divider"></div>
</template>

<style>
	.divider {
		margin-top: 0px;
		margin-bottom: 20px;
		height: 1px;
		background-color: hsl(240, 23%, 95%);
	}
</style>
