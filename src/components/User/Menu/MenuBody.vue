<script setup lang="ts">
	import { Component } from "vue";
	import { RouterLink } from "vue-router";
	import { NIcon } from "naive-ui";
	import type { MenuOption } from "naive-ui";
	import { HomeOutline } from "@vicons/ionicons5";
	import {
		Class20Regular,
		Library20Regular,
		MoviesAndTv20Regular,
		AppsList20Regular,
	} from "@vicons/fluent";

	function renderIcon(icon: Component) {
		return () => h(NIcon, null, { default: () => h(icon) });
	}

	const menuOptions: MenuOption[] = [
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "panel",
						},
					},
					{ default: () => "仪表盘" }
				),
			key: "instrument-panel",
			icon: renderIcon(HomeOutline),
		},
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "source",
						},
					},
					{ default: () => "采集源" }
				),
			key: "source",
			icon: renderIcon(Library20Regular),
		},
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "category",
						},
					},
					{ default: () => "分类管理" }
				),
			key: "category-management",
			icon: renderIcon(Class20Regular),
		},
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "movies",
						},
					},
					{ default: () => "影片管理" }
				),
			key: "movie-management",
			icon: renderIcon(MoviesAndTv20Regular),
		},
		// {
		// 	label: "卧龙",
		// 	key: "wolong",
		// 	children: [
		// 		{
		// 			label: "采集类",
		// 			key: "wolong-caiji",
		// 		},
		// 		{
		// 			label: "影片",
		// 			key: "wolong-movie",
		// 		},
		// 	],
		// 	icon: renderIcon(AppsList20Regular),
		// },
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
