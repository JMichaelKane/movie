<script setup lang="ts">
	import { Component } from "vue";
	import { NIcon } from "naive-ui";
	import type { MenuOption } from "naive-ui";
	import { BookOutline as BookIcon } from "@vicons/ionicons5";

	function renderIcon(icon: Component) {
		return () => h(NIcon, null, { default: () => h(icon) });
	}

	const menuOptions: MenuOption[] = [
		{
			label: "仪表盘",
			key: "instrument-panel",
			icon: renderIcon(BookIcon),
		},
		{
			label: "管理员",
            key: "admin",
		},
		{
			label: "采集源",
			key: "source",
			icon: renderIcon(BookIcon),
		},
		{
			label: "分类管理",
			key: "category-management",
			disabled: true,
			icon: renderIcon(BookIcon),
		},
		{
			label: "影片管理",
			key: "movie-management",
			icon: renderIcon(BookIcon),
		},
		{
			label: "卧龙",
			key: "wolong",
			children: [
				{
					label: "采集类",
					key: "wolong-caiji",
				},
				{
					label: "影片",
					key: "wolong-movie",
				},
			],
		},
	];
	const activeKey = ref<string | null>(null);
	const collapsed = ref(false);
</script>

<template>
	<div>
		<n-menu
			v-model:value="activeKey"
			:accordion="false"
			:collapsed-icon-size="22"
			:options="menuOptions"
			mode="vertical"
		/>
	</div>
</template>

<style></style>
